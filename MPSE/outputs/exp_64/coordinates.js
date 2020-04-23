var t='Mon Apr 20 11:21:30 2020';
var steps=100;
 var costhistory=[0.59,0.58,0.56,0.54,0.53,0.51,0.43,0.35,0.28,0.25,0.23,0.19,0.16,0.1 ,
 0.07,0.05,0.05,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04];
var proj=[[[1.,0.,0.],
 [0.,1.,0.]],[[1.,0.,0.],
 [0.,0.,1.]],];
var points=[[-0.1367251824349355, -1.0184221285404826, -1.1193902055955387], [-0.17293398774049173, -1.0035117168999892, -1.0666241855142429], [-0.23678552185509008, -0.9889843096377056, -1.0197337209224873], [-0.2631179867064401, -0.9802563556932927, -0.9641204255349344], [-0.3218098759314325, -0.9480358924115917, -0.918899714337705], [-0.3948653059492631, -0.92790263473433, -0.8731620551656797], [-0.42876737466352477, -0.8958796687842744, -0.8307751314920722], [-0.469962280958261, -0.8675380495498974, -0.7776354315919871], [-0.5001584494619191, -0.8225944811605753, -0.7219948842190036], [-0.5490934003571603, -0.7720512121958351, -0.6852495671552012], [-0.5705418890681994, -0.7408289799463169, -0.6235487771803447], [-0.6392120448788203, -0.6894708284543315, -0.5762228506585233], [-0.6785637861040223, -0.6444034055768461, -0.5314945072045699], [-0.7218687287045068, -0.6015046197765352, -0.4652096167348892], [-0.7578272987036816, -0.528586089455495, -0.42863790057137985], [-0.7829716680583484, -0.4834304346194822, -0.3786227929777544], [-0.8338461481116153, -0.42506764409046444, -0.3336209985930858], [-0.851055093831381, -0.37618493814229553, -0.28608274688755175], [-0.8745882012937543, -0.3107005476375231, -0.23576157605010065], [-0.9088720716016987, -0.24960512122641745, -0.19243534081980032], [-0.9435299473659723, -0.19606088625511736, -0.1341851556184932], [-0.944646902290182, -0.11528276070259146, -0.0771957867899649], [-0.9794149635216244, -0.053736557461248995, -0.032126495457423625], [-1.0055253545152973, -0.004188985829423579, 0.022335650861902562], [-1.0149991885386982, 0.07186170193438057, 0.07947227166886073], [-1.0433703995640522, 0.11702052060378122, 0.12881954361856202], [-1.0046832792262033, 0.2013916000150004, 0.15516418483900085], [-0.9679521970907681, 0.26046076613263885, 0.19898922149577905], [-0.9340843043790531, 0.31620662119690185, 0.2319882638462308], [-0.9033596118429991, 0.3791426220813299, 0.2713383746234387], [-0.8528439503999732, 0.439561640900809, 0.3027615469450123], [-0.8195431240439958, 0.4952245528859682, 0.33905228423596373], [-0.778760798722398, 0.5483429713528859, 0.37700989969841553], [-0.7223001722284582, 0.5922073914154107, 0.4137286916232989], [-0.6714786451249681, 0.6453709900363116, 0.4576910672442601], [-0.6431752378001996, 0.7160262917540211, 0.47998339529911677], [-0.5893454137583579, 0.740503235692325, 0.5242134167247385], [-0.5589783613057778, 0.7793053748325902, 0.5651239015941565], [-0.5181495522734083, 0.8274413666985894, 0.6001513900116525], [-0.4438517928286626, 0.8690626768169184, 0.6400145706254394], [-0.3798485809691666, 0.888532348892331, 0.665822858652507], [-0.3527663136753956, 0.9235306151270524, 0.7245803582651467], [-0.2968162600934343, 0.9447499007504493, 0.7463790518585264], [-0.22143880963482399, 0.9591727889556354, 0.7763314516736606], [-0.1766672108598472, 0.9747161345510906, 0.8207379107906808], [-0.12894623450115203, 0.9872310331724249, 0.8605947046263936], [-0.04818301750161928, 0.9969497847201219, 0.8950177911565693], [-0.005554299986131998, 1.0045176047061875, 0.9221273533441787], [0.0606963305300815, 1.0066786985976433, 0.9703360839761309], [0.10617793798687257, 1.0043983022790535, 1.0115265506185935], [0.1594218201343001, 0.9986480814773993, 1.047464337252188], [0.2196008491417769, 0.9839527836273331, 0.9914520270803413], [0.2566085100978597, 0.9729087120377325, 0.945680539396174], [0.3057736676803942, 0.9434705338925533, 0.8840366437632506], [0.3518582821891374, 0.9237751260382812, 0.8472456377419451], [0.4071732379756613, 0.9030657310420396, 0.7838619629635047], [0.42783381248562247, 0.8754763880781841, 0.7489915413422426], [0.4896353637226905, 0.8388805959912186, 0.6994662798527984], [0.5472894107534848, 0.8005621412511952, 0.6480779305944003], [0.5664839379527176, 0.760800480943252, 0.6031249855443568], [0.6159002587782698, 0.7212384455844981, 0.5452711370294808], [0.6605680249846081, 0.6721408476906818, 0.5001386284877478], [0.7310094243130163, 0.6146024728095836, 0.44915801496317487], [0.7538238413195535, 0.5820987357835058, 0.4018872363398145], [0.7840203472029534, 0.52029514728679, 0.3521837444604398], [0.819368227250184, 0.4622025107088886, 0.3109107398378992], [0.8830289964215094, 0.40937857496321867, 0.26403587561975983], [0.8723395236193234, 0.33958675276542966, 0.2130271622299985], [0.9061874436434011, 0.2809593483405529, 0.1600040146141867], [0.920497311702821, 0.2262865349585331, 0.1092225420844317], [0.986295168198251, 0.16299245727338474, 0.05960492930827444], [0.9838979271908653, 0.09840902682463716, 0.008946052071754682], [0.9980765149705826, 0.03300731102307395, -0.039958539840669056], [1.0226687732408006, -0.021550324448953634, -0.08704612614217275], [1.0421709925478557, -0.08874290304458857, -0.16575497897686847], [1.067922743440395, -0.16033887234402125, -0.18925595771094217], [1.0243966929019002, -0.21163193957489881, -0.23363799088284096], [1.0053983336916048, -0.2683868231045124, -0.27027066434934305], [0.9610397765921626, -0.3415224037586219, -0.30224811787056505], [0.9130584546062107, -0.4001419062634355, -0.341949944752154], [0.8793239835492216, -0.46001884201639276, -0.37531969684541305], [0.8436753896956575, -0.5254143923465531, -0.4125765555225075], [0.798674547874477, -0.5668646825749626, -0.4515306314662833], [0.7802114456485141, -0.6219230630679234, -0.4868671353883757], [0.7101109048702711, -0.673306988920107, -0.5321195280825873], [0.6534489466002877, -0.7118111345440721, -0.5615008326865828], [0.6064829994060791, -0.7669199534800802, -0.5989275011693304], [0.5737441307481148, -0.8001563224039895, -0.6327800602390955], [0.5006758216979209, -0.8477472718499566, -0.6728229207765971], [0.4615994383117449, -0.8837177735699323, -0.7165388857853473], [0.4154959612852713, -0.9155158109540535, -0.7580920572682859], [0.3714185275437106, -0.9399624190240754, -0.792547460447421], [0.3112499469604908, -0.9677288304391174, -0.8196652082411624], [0.27209105707381215, -0.9938262309993111, -0.8615105533568206], [0.19824705805089501, -0.9957875906731705, -0.8920880257710162], [0.13744766130403108, -1.0084046971845766, -0.9368264392379014], [0.08698860753673159, -1.023227633431095, -0.971127470923034], [0.03887326232947094, -1.0324127859229473, -1.0037007791733077], [-0.017955746290373845, -1.029632127965269, -1.0467888038305109], [-0.08864592724980917, -1.0215325257621193, -1.081974407000158]];