### MDS implementation ###
import numbers, math, random
import matplotlib.pyplot as plt
import numpy as np

import misc, distances, dissimilarities, gd

def dissimilarity_graph(D):
    """\
    Sets up dictionary with dissimilarity graph to be used by MDS
    
    Parameters:

    D : dictionary or numpy array
    Can be either i) a dictionary containing keys 'nodes', 'edges', 'distances',
    and 'weights'. D['nodes'] is a list of nodes (must be range(N) for some N as
    of now) and the rest are lists of the same size; ii) a dissimilarity 
    (square) matrix.
    """
    if isinstance(D,np.ndarray):
        shape = D.shape; assert len(shape)==2; assert shape[0]==shape[1]
        D = dissimilarities.from_matrix(D)
        
    dissimilarities.check(D)

    D['distances'] = np.maximum(D['distances'],1e-4)
    
    d = D['distances']; w = D['weights']
    D['normalization'] = np.dot(w,d**2)
    D['rms'] = math.sqrt(D['normalization']/len(d))

    return D

def stress(X,D):
    """\

    Normalized MDS stress function.

    Parameters:

    X : numpy array
    Position/coordinate/embedding array for nodes 0,1,...,N-1

    D : dictionary
    Dictionary containing nodes, edges, distances, and weights.

    Returns:

    stress : float
    MDS stress at X.
    """
    e = D['edges']; d = D['distances']; w = D['weights']
    stress = 0
    for (i,j), Dij, wij in zip(e,d,w):
        dij = np.linalg.norm(X[i]-X[j])
        stress += wij*(Dij-dij)**2
    stress /= D['normalization']
    return stress

def stress_and_gradient(X,D,approx=None):
    """\
    Returns normalized MDS stress and gradient.
    
    Parameters:

    X : numpy array
    Positions/embedding array.

    D : dictionary
    Dictionary containing list of dissimilarities.

    approx : None or positive number
    If not None, approximates gradient/stress by only each edge with probability
    approx > 0.

    Returns:

    stress : float
    MDS stress at X.
    
    grad : numpy array
    MDS gradient at X.
    """
    e = D['edges']; d = D['distances']; w = D['weights']
    stress = 0; dX = np.zeros(X.shape)
    if approx is None:
        for n in range(len(e)):
            i,j = e[n]; Dij = d[n]; wij = w[n]
            Xij = X[i]-X[j]
            dij = np.linalg.norm(Xij)
            diffij = dij-Dij
            stress += wij*diffij**2
            dXij = wij*2*diffij/dij*Xij
            dX[i] += dXij
            dX[j] -= dXij
    else:
        assert isinstance(approx,numbers.Number); assert 0<approx<=1
        for n in range(len(e)):
            if np.random.randn() <= approx:
                i,j = e[n]; Dij = d[n]; wij = w[n]
                Xij = X[i]-X[j]
                dij = np.linalg.norm(Xij)
                diffij = dij-Dij
                stress += wij*diffij**2
                dXij = wij*2*diffij/dij*Xij
                dX[i] += dXij
                dX[j] -= dXij
    stress /= D['normalization']
    dX /= D['normalization']
    return stress, dX

class MDS(object):
    """\
    Class with methods to solve MDS problems.
    """
    def __init__(self, D, dim=2, verbose=0, title='',
                 labels=None):
        """\
        Initializes MDS object.

        Parameters:

        D : dictionary or numpy array
        Either i) a dictionary with the lists of edges, distances, and weights 
        as described in dissimilarities.py or ii) a Can also be a dissimilarity
        matrix.

        dim : int > 0
        Embedding dimension.

        verbose : int >= 0
        Print status of methods in MDS object if verbose > 0.

        title : string
        Title assigned to MDS object.

        labels : list or array
        Labels attached to points corresponding to D.
        """
        if verbose > 0:
            print('+ mds.MDS('+title+'):')
        self.verbose = verbose; self.title = title; self.labels = labels

        self.D = dissimilarity_graph(D)
        self.N = len(D['nodes']); self.NN = len(D['edges'])
        
        assert isinstance(dim,int); assert dim > 0
        self.dim = dim

        self.cost_function = lambda X: stress(X,self.D)
        self.gradient_function = lambda X: stress_gradient(self.D,X)
        self.partial_function = lambda X,n: stress_partial(self.D,X,n)
        self.batch_function = lambda X_batch,indices: \
                              stress_batch(self.D,X_batch,indices)
        
        self.f = lambda X: stress(X,self.D)
        #self.df = lambda X: gradient(X,self.D)
        def F(X,batches=None,batch_number=None,batch_size=None):
            if batches is None and batch_number is None and batch_size is None:
                return gradient(X,self.D)
            elif batches is not None:
                return F_batch(self.D,X,batches)
            else:
                if isinstance(batch_number,int):
                    batch_size = math.ceil(self.N/batch_number)
                elif isinstance(batch_size,int):
                    batch_number = math.ceil(self.N/batch_size)
                else:
                    sys.exit('wrong batch_size/batch_number in MDS.F()')
                indices = list(range(self.N)); random.shuffle(indices)
                batches = [list(indices[j*batch_size:(j+1)*batch_size]) for \
                           j in range(batch_number)]
                return F_batch(self.D,X,batches)
        self.F = F
        def F(X, approx=None):
            return stress_and_gradient(X,self.D,approx)
        self.F = F

        self.H = {}
        
        if verbose > 0:
            print(f'  number of points : {self.N}')
            print(f'  number of edges : {self.NN}')
            print(f'  (weighted) distance rms : {self.D_rms:0.2e}')
            print(f'  embedding dimension : {self.dim}')

        if labels is None:
            labels = list(range(self.N))
        self.labels = labels
            
    def initialize(self, X0=None, title='',**kwargs):
        """\
        Set initial embedding.

        Parameters:

        X0 : numpy array or None
        Initial embedding. If set to None, the initial embedding is produced 
        randomly using misc.initial_embedding().
        """
        if self.verbose > 0:
            print('- MDS.initialize('+title+'):')
            
        if X0 is None:
            X0 = misc.initial_embedding(self.N,dim=self.dim,
                                        radius=self.D_rms,**kwargs)
            if self.verbose > 0:
                print('  method : random')
        else:
            assert isinstance(X0,np.ndarray)
            assert X0.shape == (self.N,self.dim)
            if self.verbose > 0:
                print('  method : initialization given')
            
        self.X = X0
        self.update()
        
        self.X0 = self.X.copy()
        
        if self.verbose > 0:
            print(f'  initial stress : {self.cost:0.2e}[{self.ncost:0.2e}]')

    def update(self,H=None):
        self.cost = self.f(self.X)
        if H is not None:
            if bool(self.H) is True:
                H['cost'] = np.concatenate((self.H['cost'],H['cost']))
                H['steps'] = np.concatenate((self.H['steps'],H['steps']))
                H['iterations'] = self.H['iterations']+H['iterations']
            self.H = H        

    def forget(self):
        self.X = self.X0; self.H = {}
        self.update()

    def stochastic(self, approx=0.2, lr=1,**kwargs):
        """\
        Optimizes approximate stress function using gradient descent with a
        fixed learning rate.
        """
        F = lambda X: self.F(X,approx=approx)
        self.X, H = gd.mgd(self.X,F,lr=lr,**kwargs)
        self.update(H=H)

    def adaptive(self, X0=None, **kwargs):
        F = lambda X: self.F(X)
        if self.verbose > 0:
            print('  method : exact gradient & adaptive gradient descent')
        self.X, H = gd.agd(self.X,F,**kwargs,**self.H)
        self.update(H=H)
        
    def optimize(self, agd=True, batch_size=None, batch_number=None, lr=0.01,
                 **kwargs):
        """\
        Optimize stress function using gradient-based methods. If batch size or
        number are given, optimization begins with stochastic gradient descent.
        If agd is set to True, optimization ends with adaptive gradient descent.
        """
        if self.verbose > 0:
            print('- MDS.optimize():')

        if batch_number is not None or batch_size is not None:
            F = lambda X: self.F(X,batch_number=batch_number,
                                 batch_size=batch_size)
            if self.verbose > 0:
                print('  method : stochastic gradient descent')
                if batch_number is None:
                    print(f'  batch size : {batch_size}')
                else:
                    print(f'  batch number : {batch_number}')
            self.X, H = gd.mgd(self.X,F,lr=lr,**kwargs)
            self.update(H=H)
        if agd is True:
            F = lambda X: self.F(X)
            if self.verbose > 0:
                print('  method : exact gradient & adaptive gradient descent')
            self.X, H = gd.agd(self.X,F,**kwargs,**self.H)
            self.update(H=H)

        if self.verbose > 0:
            print(f'  final stress : {self.cost:0.2e}[{self.ncost:0.2e}]')

    def figureX(self,title='mds embedding',labels=None,colors=None,edges=None,
                plot=True, ax=None):
        if labels is None:
            labels = self.labels
        if self.dim >= 2:
            if ax is None:
                fig, ax = plt.subplots()
            else:
                plot = False
            if edges is not None:
                if isinstance(edges,numbers.Number):
                    edges = edges-self.D
                for i in range(self.N):
                    for j in range(i+1,self.N):
                        if edges[i,j] > 0:
                            ax.plot([self.X[i,0],self.X[j,0]],
                                      [self.X[i,1],self.X[j,1]],'-',
                                    linewidth=0.25,color='blue')#,l='b')
            ax.scatter(self.X[:,0],self.X[:,1],s=25,c=colors)
            ax.title.set_text(title+f' - stress = {self.cost:0.2e}[{self.ncost:0.2e}]')
            if plot is True:
                plt.draw()
                plt.pause(0.1)

    def figureH(self,title='Computation history for X',plot=True):
        assert hasattr(self,'H')
        fig = plt.figure()
        plt.semilogy(self.H['cost'], label='cost')
        plt.semilogy(self.H['steps'], label='step size')
        plt.xlabel('iterations')
        plt.legend()
        plt.title(title)
        if plot is True:
            plt.draw()
            plt.pause(0.2)
        return fig

    def figure(self,title='mds computation & embedding',labels=None,
               plot=True):
        #if labels is None:
        #    labels = self.labels
        if self.dim >= 2:
            fig,axs = plt.subplots(1,2)
            plt.suptitle(title+f' - stress = {self.cost:0.2e}'+
                         f'[{self.ncost:0.2e}]')
            axs[0].semilogy(self.H['cost'], label='cost')
            axs[0].semilogy(self.H['steps'], label='step size')
            axs[0].legend()
            axs[1].scatter(self.X[:,0],self.X[:,1],c=labels)
            if plot is True:
                plt.draw()
                plt.pause(0.1)
        return fig

    def graph(self,edge_bound=1.01,plot=True,ax=None,title=None):
        import networkx as nx
        G = nx.Graph()
        positions = {}
        for n in range(self.N):
            label = self.labels[n]
            G.add_node(label)
            positions[label] = self.X[n]
        for i in range(self.N):
            for j in range(i+1,self.N):
                if self.D[i,j] <= edge_bound:
                    G.add_edge(self.labels[i],self.labels[j])
        if ax is None:
            fig = plt.figure()
            nx.draw_networkx(G, pos=positions)
            nx.draw_networkx_edges(G, pos=positions)
            plt.title(title)
            plt.axis('off')
            if plot is True:
                plt.show(block=False)
            return fig
        else:
            nx.draw_networkx(G, pos=positions, ax=ax)
            nx.draw_networkx_edges(G, pos=positions, ax=ax)
            ###

def F_batch(D,X,batches):
    """\
    Returs MDS approximate stress and gradient for matrix D at embedding X, by
    dividing the data into batches and only including terms in each batch.
    
    Parameters:

    D : numpy array
    Distance/dissimilarity matrix.

    X : numpy array
    Positions/embedding.

    batches: list
    List containing lists with indices in each batch.

    Returns:

    stress : float
    MDS stress at X (or approximation given by batch).
    
    grad : numpy array
    MDS gradient at X (or approximation given by batch).
    """
    N = len(D)
    stress = 0; dX = np.zeros(X.shape)
    for batch in batches:
        batch_size = len(batch)
        for i in range(batch_size):
            for j in range(i+1,batch_size):
                I = batch[i]; J = batch[j]
                XdiffIJ = X[I]-X[J]
                dIJ = np.linalg.norm(XdiffIJ)
                diffIJ = dIJ-D[I,J]
                stress += diffIJ**2*(N-1)/(batch_size-1)
                dXIJ = 2*diffIJ/dIJ*XdiffIJ*(N-1)/(batch_size-1)
                dX[I] += dXIJ
                dX[J] -= dXIJ
    return stress, dX

def stress_partial(D,X,i):
    """\
    Returns partial gradient of MDS stress function with respect to node i,
    evaluated at X.
    """
    N,dim = X.shape
    partial = np.zeros(dim)
    indices = list(range(N)); indices.remove(i)
    for j in indices:
        dij = np.linalg.norm(X[i]-X[j])
        rel_error = (dij-D[i,j])/dij
        partial += 2*rel_error*(X[i]-X[j])
    return partial

def stress_batch(D,Y_batch,indices):
    """\
    Returns approximation of the block of the stress gradient given by the list
    of indices. The partial derivatives are approximated using only the 
    distances and positions with indices in the index list.
    """
    batch_size, dim = Y_batch.shape
    batch_gradient = np.zeros((batch_size,dim))
    for i in range(batch_size):
        I = indices[i]
        for j in range(i+1,batch_size):
            J = indices[j]
            diffIJ = Y_batch[i]-Y_batch[j]
            dIJ = np.linalg.norm(diffIJ)
            rel_error = (dIJ-D[I,J])/dIJ
            partial_term = 2*rel_error*(diffIJ)
            batch_gradient[i] += partial_term
            batch_gradient[j] -= partial_term
    return batch_gradient
                                   
### TESTS ###

def example_disk(N=100,dim=2,**kwargs):
    print('\n***mds.example_disk()***')
    
    Y = misc.disk(N,dim); labels = misc.labels(Y)
    
    plt.figure()
    plt.scatter(Y[:,0],Y[:,1],c=labels)
    plt.title('original data')
    plt.draw()
    plt.pause(0.1)
    
    D = dissimilarities.from_coordinates(Y)
    title = 'basic disk example'
    mds = MDS(D,dim=dim,verbose=1,title=title,labels=labels)
    mds.initialize()
    mds.figureX(title='initial embedding')
    mds.optimize(**kwargs)
    mds.figureX(title='final embedding',labels=labels))
    mds.figure(title='final embedding',labels=labels)
    plt.show()

def example_approx(N=30,dim=2,batch_number=5):
    print('\n***mds.example_disk_batch()***\n')
    
    Y = misc.disk(N,dim); labels = misc.labels(Y)
    
    plt.figure()
    plt.scatter(Y[:,0],Y[:,1],c=labels)
    plt.title('Original data')
    plt.draw()
    plt.pause(0.1)
    
    D = dissimilarites.from_coordinates(Y)

    title = 'basic disk example using approximate gradient'
    mds = MDS(D,dim=dim,verbose=1,title=title,labels=labels)
    mds.initialize()
    mds.approximate(verbose=2,max_iters=200,
                    lr=0.1,batch_number=batch_number,algorithm='gd')
    mds.figureX(title='Final embedding')
    mds.figureH()
    plt.show()

def disk_compare(N=100,dim=2): ###
    print('\n***mds.disk_compare()***')
    
    X = misc.disk(N,2); labels = misc.labels(X)
    
    plt.figure()
    plt.scatter(X[:,0],X[:,1],c=labels)
    plt.title('original data')
    plt.draw()
    plt.pause(0.1)
    
    D = distances.compute(X)
    
    mds = MDS(D,dim=dim,verbose=1,title='disk experiments',labels=labels)
    mds.initialize()
    mds.figureX(title='initial embedding')

    title = 'full gradient & agd'
    mds.optimize(algorithm='agd',verbose=2,label=title)
    mds.figureX(title=title)
    mds.figureH(title=title)

    mds.forget()
    title = 'approx gradient & gd'
    mds.approximate(algorithm='gd',verbose=2,label=title)
    mds.figureX(title=title)
    mds.figureH(title=title)

    mds.forget()
    title = 'combine'
    mds.approximate(algorithm='gd',verbose=2,label=title)
    mds.optimize(verbose=2,label=title,max_iters=10)
    mds.figureX(title=title)
    mds.figureH(title=title)
    plt.show()

def example_disk_noisy(N=100,dim=2):
    print('\n***mds.example_disk_noisy()***\n')
    noise_levels = [0.001,0.005,0.01,0.03,0.07,0.1,0.15,0.2,0.7,1.0]
    stress = []
    Y = misc.disk(N,dim)
    D = distances.compute(Y)
    for noise in noise_levels:
        D_noisy = distances.add_noise(D,noise)
        mds = MDS(D_noisy,dim,verbose=1,title=f'noise : {noise:0.2f}')
        mds.initialize()
        mds.optimize(algorithm='agd',max_iters=300,verbose=1)
        stress.append(mds.ncost)
    fig = plt.figure()
    plt.loglog(noise_levels,stress,'.-')
    plt.xlabel('noise level')
    plt.ylabel('stress')
    plt.title('Normalized MDS stress for various noise levels')
    plt.show()
    
def example_disk_dimensions(N=100):
    print('\n***mds.example_disk_dimensions()***\n')
    dims = range(1,11)
    stress = []
    for dim in dims:
        Y = misc.disk(N,dim)
        D = distances.compute(Y)
        mds = MDS(D,dim,verbose=1,label=f'dimension : {dim}')
        mds.initialize_Y()
        mds.optimize(algorithm='agd',max_iters=300)
        stress.append(mds.ncost)
    fig = plt.figure()
    plt.semilogy(dims,stress)
    plt.xlabel('dimension')
    plt.ylabel('stress')
    plt.title('Normalized MDS stress for various dimensions')
    plt.show()

### EMBEDDABILITY TESTS ###

def embeddability_dims(ax=None):
    print('\n**mds.embeddability_dims()')
    N=50
    ncost = []
    dims = list(range(2,50,5))
    #XX = misc.disk(N,20)
    XX = misc.box(N,20)
    for dim in dims:
        X = XX[:,0:dim]
        D = dissimilarities.coord2dict(X,weights='relative')
        mds = MDS(D,dim=2,verbose=1)
        mds.initialize()
        mds.optimize()
        ncost.append(mds.ncost)
    if ax is None:
        fig, ax = plt.subplots(1)
        plot = True
    else:
        plot = False
    ax.plot(dims,ncost)
    if plot is True:
        plt.show()

def embeddability_noise(ax=None):
    print('\n**mds.embeddability_noise()')
    N=50
    ncost = []
    noise_list = [0]+10**np.arange(-4,0,0.5)
    X = misc.disk(N,4)
    DD = distances.compute(X)
    for noise in noise_list:
        D = DD*(1+np.random.randn(N,N)*noise)
        mds = MDS(D,dim=4,verbose=1)
        mds.initialize()
        mds.optimize()
        ncost.append(mds.ncost)
    if ax is None:
        fig, ax = plt.subplots(1)
        plot = True
    else:
        plot = False
    ax.semilogx(noise_list,ncost)
    if plot is True:
        plt.show()
if __name__=='__main__':

    example_disk()
    #example_disk(agd=False,batch_number=10,max_iters=200)
    #example_disk(batch_number=10)
    #example_approx(N=100)
    #disk_compare(N=100)
    #example_disk_noisy(50)
    #example_disk_dimensions(50)

    #embeddability_dims()
    #embeddability_noise()
