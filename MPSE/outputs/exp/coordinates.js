var t='Thu Nov 21 15:32:02 2019';
var steps=320;
 var costhistory=[872497.07,917902.98,880271.05,869530.23,886445.43,858274.82,850671.95,
 919965.39,826634.03,861328.93,836767.13,917507.79,848183.09,828248.96,
 820134.67,830398.67,782862.35,847753.49,857020.01,824729.71,844946.62,
 813780.48,893960.96,793109.6 ,836969.8 ,811673.89,875541.41,800943.51,
 754324.44,812411.06,821229.75,824259.38,808753.42,773026.65,791733.21,
 778631.94,732233.3 ,806670.47,775015.72,773406.59,774555.09,796329.94,
 734080.57,751918.69,760550.86,764357.8 ,791221.73,769920.52,770020.12,
 705557.82,740078.99,730358.04,743750.14,724070.33,729603.7 ,732790.66,
 737598.38,692202.9 ,740861.91,687154.34,742019.8 ,712047.57,749678.46,
 740013.29,718099.66,676016.36,731686.09,730927.03,768979.86,719727.37,
 725902.04,749033.95,668814.26,717630.63,715249.85,711103.9 ,725935.43,
 732845.58,676480.19,700298.58,652723.26,685366.48,699856.  ,670262.92,
 631236.22,694528.6 ,729494.32,657990.49,658911.21,687246.04,680759.32,
 681086.25,700134.77,665549.49,605350.28,656425.55,622535.48,647187.71,
 659041.69,664110.53,676955.32,653586.64,635345.87,684999.89,691951.18,
 641801.54,648950.99,670058.37,637173.46,657510.67,622271.61,628337.02,
 639777.22,633942.65,645076.3 ,628076.58,641726.49,615530.31,617661.62,
 632485.12,615368.5 ,663287.72,632708.72,630282.22,607488.16,632247.13,
 585935.08,674757.99,608962.13,598107.25,614831.14,628278.62,618981.66,
 603535.98,599670.85,613085.64,589527.67,636661.58,579573.79,587774.92,
 607109.32,631912.99,591250.92,562315.38,611386.48,600866.33,571895.93,
 561224.14,559114.9 ,581858.19,550633.47,584031.18,631941.4 ,561005.29,
 565169.93,575184.7 ,568190.15,567434.03,595704.78,564853.18,571097.66,
 593344.76,596393.85,568904.99,563252.49,510417.1 ,525931.8 ,565290.28,
 539878.77,567289.31,534628.75,500167.47,490535.32,593973.96,565032.89,
 571628.38,503127.96,541847.07,559277.5 ,587416.01,547945.57,542876.68,
 520454.87,530518.27,543825.75,549885.59,544132.39,525632.05,521404.5 ,
 507540.73,472663.17,538512.37,510003.7 ,522631.37,513426.97,525445.3 ,
 545995.93,506121.01,507196.17,523477.4 ,509176.53,486347.55,446267.13,
 418447.  ,400384.72,390324.23,385107.39,382066.22,379729.41,378780.72,
 375560.09,371545.88,370159.52,369467.85,368998.99,368414.13,368302.71,
 367908.64,367361.79,365988.52,363453.97,358434.42,356362.57,354397.56,
 353308.58,352784.73,352283.07,351618.49,351073.41,350792.23,350634.97,
 350513.63,350059.5 ,349803.32,349064.14,349006.32,348924.15,348803.64,
 348615.01,347808.84,347349.6 ,347060.11,346907.99,346750.  ,346500.03,
 346226.61,346081.7 ,346030.61,345908.87,345629.21,344678.81,343496.62,
 343090.46,342990.33,342950.8 ,342936.24,342924.3 ,342908.25,342891.89,
 342885.7 ,342880.94,342855.44,342719.78,342404.76,341995.37,341462.12,
 341002.34,340758.43,340756.54,340690.5 ,340685.16,340676.48,340666.24,
 340664.67,340664.47,340663.88,340663.82,340663.79,340663.75,340663.65,
 340663.74,340663.64,340663.64,340663.64,340663.64,340663.64,340663.63,
 340663.61,340663.54,340663.33,340662.88,340662.25,340661.88,340661.82,
 340661.78,340661.78,340661.77,340661.77,340661.77,340661.77,340661.77,
 340661.77,340661.77,340661.77,340661.77,340661.77,340661.77,340661.77,
 340661.77,340661.77,340661.77,340661.77,340661.77,340661.77,340661.77,
 340661.77,340661.77,340661.77,340661.77,340661.77];
var proj=[[[1.,0.,0.],
 [0.,0.,0.],
 [0.,0.,1.]],[[1.,0.,0.],
 [0.,1.,0.],
 [0.,0.,0.]],[[0.,0.,0.],
 [0.,1.,0.],
 [0.,0.,1.]],];
var points=[[2.592384333097665, -9.499217592855514, -13.017404082922113], [1.2500946789217433, -9.940149864384253, -10.82010975124494], [0.10958830525013362, -10.20042477521974, -8.141123489840002], [-1.1939061752174003, -9.443750654152122, -6.943460537868956], [-3.2172821516421912, -9.890426750257513, -1.0537993734556719], [1.3935120024591687, -8.080862184204552, 8.095669499441101], [-0.18401264268221845, -7.227491196694019, 9.444495986819051], [-2.008642095957694, -6.600053719402707, 10.570811898052638], [-3.52270063763868, -6.0628473172807285, 11.071076812487899], [0.12083858392221639, -6.316667937254849, -12.632279666297451], [-1.2249462113824834, -8.969744232981045, -8.079053578944222], [-4.101134638600779, -9.79073431033455, -6.166016614847437], [2.09399995208666, -8.089688298676032, -3.4765987649397845], [-0.4856694431502895, -7.213919339356105, -2.4989669159533245], [-1.0102668674988684, -8.62645780423358, -0.8052267813140676], [-2.4454908320187583, -7.670394986373474, 2.7516824319951767], [0.28613559761804247, -6.869954035987916, 3.764810476005074], [-5.00721205655869, -5.328282596247019, 8.193114621803836], [-7.735845964295917, -4.562919958857194, 8.714396298412616], [6.676083183123741, -5.398101829056014, 10.64868952231609], [8.503353916709964, -5.312247676836592, -7.981885066905598], [7.394442930018501, -4.818280503851734, -8.074271906765738], [4.656354374831816, -5.1884839469475175, -3.6976015120972106], [2.615417171001085, -5.726768100602539, 1.0897399523168407], [1.8957982422556026, -4.961982803366112, 1.5757370217493514], [1.0276682525020566, -3.8486591496229563, 2.6163827132009954], [-0.3206272746549584, -4.295060476715961, 5.688908684018233], [-1.8400621870607812, -3.6613325165528083, 5.979794735105969], [-3.379629310778992, -3.0983204549031553, 8.661464403044272], [-5.538874915521007, -2.396834042907129, 10.103886569908582], [-9.688876858850039, -1.4910864441515777, 10.404359775414985], [-8.029533400106219, -1.7633120810555591, -4.101635574332383], [-1.8750604808017854, -4.754585243635344, -0.9320067707301909], [-2.719661504782693, -3.640138679863431, -0.4775616198666308], [-4.56401129692129, -2.8232842427851716, 0.30824364076276806], [-10.879770600314743, -0.9767580038807762, 3.8881768398801406], [9.194386163952618, -0.4322718631582605, -9.057028625994544], [6.363720008080125, -0.07398960688665687, -10.358537117065326], [4.6603797995170915, -2.6575685686359294, -7.27097940312807], [3.0588180686462407, -2.3842446276003666, -7.030303081744347], [0.6815493400911111, -2.076956636940768, -5.635096715331475], [-0.44165518653421126, -1.1360306678366845, -5.471729357082966], [-2.4632496319544557, 1.4867260063494852, -0.6181435347598806], [-4.316180646457619, -3.2106445530348946, 2.930253628933805], [-8.883654767049745, -1.4871688123882638, 7.200003664605091], [-10.484971672856963, 0.03779492369433023, 7.159757899202456], [-12.289434415981402, 1.957749274277264, 8.07314845015726], [-8.886919964297736, 2.7635367896726453, -11.22121147590385], [6.435460289337576, -7.872183793060186, -5.694936471860674], [8.250621413964975, -2.2725185089841373, -0.6007408937906246], [5.321066838785645, 0.7115264108533427, -0.09364731440503564], [4.023388619738049, 3.528793434636244, 0.7982361681450384], [3.0177672737346857, 4.676655612840131, 2.2890683156644216], [1.2331840680751378, 4.092432931551454, 6.722106538658084], [-1.0218870501085193, -1.4765603186603171, 8.042765977928342], [-2.0144700316525777, -0.9676712802393213, 13.044514492163486], [-0.8451695156209624, 1.5782628111770909, -9.108624975008773], [-3.588816685680215, -2.769049426107546, -6.178864758222887], [-5.997359819205295, -0.3848475152595339, -3.2893318230445545], [-9.655403614710924, 0.4019216694758015, 5.075085493153578], [-8.2623006592873, 0.6041921739522644, -8.763722338191291], [11.047969534873177, 1.0834262485915733, -5.074854839876711], [4.683527266529604, 1.152845332887649, -6.3679661262545215], [2.473310820089694, 1.5412577801678162, -5.244815340100599], [0.7336958759819834, 2.3502877704690968, -3.056565086295032], [-0.9837872110963694, 3.253884603178034, -3.0742489232361474], [-2.9539645580260854, 3.8269044899927724, -0.3552488097445934], [-4.6221742802272345, 0.9826519380232066, 1.2511292973000594], [-8.487382228972631, 2.7462058277872723, 1.792425557182233], [-10.426038222449225, 3.506760434145515, 2.973244411800095], [-11.03897426171562, 5.931483581398685, 4.276201560894628], [8.242626638507907, 5.08507542402636, 8.283223072730669], [4.671001730277144, 4.213624256748337, 11.487129447722163], [3.53754649437835, 4.300202203300154, -10.777683965058817], [1.8744301881534025, 5.5005183562303355, -9.971061366616397], [1.9518663652179036, -0.7204733691433289, -8.36524816920213], [0.8307039064036567, 0.25445982188623695, -4.777483333612372], [-1.6533261230452163, 2.0554173573949837, -2.026806571142859], [-6.4978798719221444, 2.8566185367207506, 2.04350249624352], [-7.918525957110744, 4.116116671757871, 4.001885951023531], [-10.74548325371591, 5.682433931453374, 6.7287259491962335], [-10.25615713599653, -10.168859424397139, 9.942983812166279], [10.727822861626167, 3.24829950436169, 10.234176119032918], [11.868510734033956, 3.828526840951262, -6.83014179546879], [10.069029788949614, 4.433922724836786, -5.938293702346966], [8.856496827746414, 5.5290814031566855, -6.168592068217521], [5.300504482794098, 5.85422658181399, -5.921937332326485], [1.887778411782552, 5.9734602605634075, -4.908621743985624], [0.7338291322776742, 6.398664063470305, -3.730678997038068], [-0.3702119935013119, 7.744823448329973, -3.9718722347409496], [-3.881852730047882, 8.621818130686732, -4.135301521782252], [-5.823459165334164, 4.569671404596012, -0.38835351598629986], [-9.501809572413231, 7.166014260727725, -0.7169315255878678], [-9.39621564487924, 12.915172535691463, -1.1870456925327464], [6.908659400303585, 10.04127774723164, 5.786377209816304], [-7.96792495719933, -10.838392240255281, 9.927301583130493], [5.528930270757821, 2.7777564120740994, 14.102373354153496], [7.391424620499832, 3.734436928057138, -10.38570397587474], [2.407059331680769, 5.466064186141284, -12.534827861823572], [-1.1776877649527333, 8.150610560676652, -11.025879749978982]];