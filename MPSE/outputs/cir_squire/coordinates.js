var t='Thu Nov 21 13:22:05 2019';
var steps=400;
 var costhistory=[5306.96,5793.21,5580.34,5428.06,5411.89,5143.13,5292.75,5430.47,5118.46,
 5390.56,5460.2 ,5211.54,4994.88,4938.97,5329.78,4886.89,5026.58,5080.92,
 4509.94,4986.07,5209.54,4862.28,5029.44,4970.26,5310.29,4861.47,4918.7 ,
 4759.77,4889.4 ,4728.38,4839.36,4680.35,4860.76,4298.72,4311.57,4792.07,
 4861.13,4782.61,4559.07,4774.23,4511.49,4969.48,4460.71,4955.04,4529.39,
 4620.13,4172.63,4364.8 ,4725.  ,4368.98,4547.15,4146.84,4502.3 ,4391.34,
 4381.87,4178.83,4286.42,4555.27,4641.28,4269.69,3952.24,4238.3 ,4611.74,
 4083.06,4185.28,4251.63,4264.89,4303.5 ,4535.72,4119.94,4404.91,4050.79,
 4241.02,4129.47,4290.95,3998.51,3919.89,4086.49,4150.32,3835.53,4020.63,
 4070.42,3544.35,4171.78,3781.95,3630.51,3760.48,3555.58,3986.52,3793.26,
 3803.6 ,3762.6 ,3687.65,3704.67,3559.71,3894.29,3881.73,3441.05,3464.24,
 3714.28,3643.62,3913.79,3534.77,3612.39,3486.45,3554.33,3501.91,3452.69,
 3692.67,3355.94,3417.89,3589.73,3729.65,3480.31,3464.74,3593.32,3712.3 ,
 3308.26,3239.49,3342.39,3460.97,3105.96,3434.64,3554.31,3486.29,3599.5 ,
 3548.62,3167.08,3417.73,3291.6 ,3503.09,2994.1 ,3573.99,3507.21,3458.51,
 3039.38,3207.14,3292.22,3017.31,3264.46,2869.62,3159.5 ,3423.51,3311.56,
 3276.83,2768.05,2971.02,3005.  ,3203.82,3048.79,3027.54,3087.09,3070.95,
 3210.17,3115.06,3092.56,2907.93,3098.08,2896.8 ,3142.65,3050.75,2977.8 ,
 2821.08,2933.27,3138.12,3167.76,2933.06,2996.17,2742.53,2927.27,2909.96,
 3233.34,2905.84,3008.39,2867.33,2875.01,2805.2 ,3026.24,2741.12,2818.63,
 2782.46,2940.63,2580.21,2821.49,2814.45,2724.31,2708.83,2873.81,2760.88,
 2894.87,2700.01,2844.24,2740.27,2805.31,2796.38,2755.24,2728.91,2774.01,
 3127.07,2669.86,2762.84,2748.49,2570.55,2406.16,2342.15,2239.87,2136.02,
 2066.72,1947.48,1710.54,1535.83,1474.9 ,1462.66,1450.15,1444.35,1441.62,
 1433.41,1428.85,1423.08,1418.84,1418.68,1417.1 ,1412.37,1402.78,1393.32,
 1378.03,1365.47,1352.9 ,1335.12,1324.03,1322.27,1314.79,1300.61,1289.83,
 1285.71,1283.28,1281.11,1273.95,1266.17,1263.75,1255.98,1231.31,1204.73,
 1201.17,1196.49,1192.77,1116.48,1111.06,1100.95,1092.05,1031.4 , 923.31,
  868.08, 863.34, 788.25, 697.82, 601.63, 539.51, 502.61, 469.91, 442.54,
  430.96, 403.79, 353.23, 261.93,  99.24,  34.55,  31.98,  30.86,  30.38,
   30.36,  30.35,  30.33,  30.33,  30.33,  30.33,  30.33,  30.33,  30.33,
   30.33,  30.33,  30.33,  30.33,  30.33,  30.33,  30.33,  30.33,  30.34,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.33,  30.32,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.33,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,  30.32,
   30.32,  30.32,  30.32,  30.32];
var proj=[[[1.,0.,0.],
 [0.,0.,0.],
 [0.,0.,1.]],[[1.,0.,0.],
 [0.,1.,0.],
 [0.,0.,0.]],[[0.,0.,0.],
 [0.,1.,0.],
 [0.,0.,1.]],];
var points=[[0.7413567372090076, 0.7422867660377598, 0.7181302455601939], [0.764077132015631, 0.6963573619363366, 0.6481949619333454], [0.7845211226284508, 0.6476601205653839, 0.5812392293305959], [0.8031536914747563, 0.596408045998528, 0.5160100602132397], [0.8200573160320076, 0.5428179232668989, 0.4519364747074659], [0.8352443284616679, 0.4871105912825496, 0.38871044438738644], [0.848679509180565, 0.42951384820400657, 0.3261114173942597], [0.8603137734642564, 0.3702622521382501, 0.26398184537762437], [0.8701140139632327, 0.30959653993678937, 0.20220712206044733], [0.8780354262021979, 0.2477639021745668, 0.14071485073997445], [0.8840529169302302, 0.1850165705288628, 0.07941735951626096], [0.8881256782487847, 0.12161132572851299, 0.018253996778897757], [0.8902488304890398, 0.057807845491562634, -0.042835429495206745], [0.8904099939439841, -0.006132061032127296, -0.1039023366245012], [0.888602091351344, -0.06994598914158326, -0.16499977230401588], [0.8848451101341508, -0.1333720215051905, -0.22618002199718001], [0.879148942117576, -0.19615020568768857, -0.28750024091007403], [0.8715427015301915, -0.25802358002326276, -0.34903197192272994], [0.8620554783875579, -0.3187394873125345, -0.41083706217511295], [0.8507292630725064, -0.37805031058477095, -0.4730117864549094], [0.8376020320324904, -0.43571460045702287, -0.5356651451044281], [0.8227200952593338, -0.4914971244708855, -0.5989627512123339], [0.8061141026168076, -0.5451693636664539, -0.6631179443714573], [0.787780813124362, -0.596508972036352, -0.7284572495268747], [0.7676299939462204, -0.6452976896188481, -0.7955500411530229], [0.7451628431682684, -0.6913209225381074, -0.8657337379771801], [0.6917923344681175, -0.7359591598494045, -0.8587523924674542], [0.6367993383475626, -0.7773231773014379, -0.8537709463771929], [0.5803619084109584, -0.8153593340323645, -0.8501338769273267], [0.5226692589348053, -0.8499690560662346, -0.847495867286127], [0.4638669121883365, -0.8810483760255367, -0.8456134489739455], [0.40410523052523806, -0.9084963525206419, -0.8443118407530864], [0.34352023571743395, -0.9322201870160194, -0.8434433041018818], [0.282240335096455, -0.9521375388822814, -0.8429105174306415], [0.22039615994987888, -0.96817798254485, -0.8426199672036083], [0.15811356092724924, -0.9802841505970648, -0.8425145309874461], [0.0955186242418626, -0.9884123940576239, -0.8425450340827199], [0.03272934252736301, -0.9925332882389437, -0.8426774362234979], [-0.030121889639001982, -0.9926318203275258, -0.8428933289915578], [-0.09291520139606922, -0.9887076333937761, -0.8431965406231307], [-0.155525069893891, -0.9807749897480049, -0.843607231477388], [-0.21782597886874133, -0.9688626393092389, -0.8441488952882616], [-0.2796953182665302, -0.9530135441894343, -0.8448652327245745], [-0.34100915805706306, -0.933284417830216, -0.8458293006909867], [-0.40163328439012586, -0.9097451737988622, -0.8471188725214222], [-0.46143293864485685, -0.8824778441980775, -0.8488377582262169], [-0.5202777452275702, -0.8515748550343527, -0.8511247241050947], [-0.5780246470811183, -0.8171368349826676, -0.8541741246666457], [-0.6345094766467034, -0.7792685633097448, -0.858190210882877], [-0.689561644998077, -0.7380688886524968, -0.8635446726572353], [-0.7430963954023435, -0.693588476500898, -0.8667314939794224], [-0.7658139768190994, -0.6476848131471707, -0.7967252907283618], [-0.786255130145261, -0.5990050036156566, -0.7297251617171167], [-0.8048836826115604, -0.5477652108487263, -0.6644594997798554], [-0.8217874823681782, -0.4941831705101433, -0.6003592074648343], [-0.8369694486224439, -0.4384806814090147, -0.5371083340259584], [-0.8503950675125912, -0.3808858990393032, -0.47448374025043966], [-0.8620249806694291, -0.32163348570821093, -0.41234184810909974], [-0.871815603585649, -0.26096478430506886, -0.3505591863228855], [-0.8797281454622692, -0.19912719307007012, -0.28905514991709425], [-0.885730841154898, -0.13637338233943808, -0.22775043836761524], [-0.889796906743382, -0.07296036466932174, -0.16657846710928428], [-0.8919091466504387, -0.00914832600362928, -0.10548867785479946], [-0.8920588661912421, 0.05480056295164991, -0.04442252953396391], [-0.890250465720335, 0.11862341625440564, 0.016670318917722686], [-0.8864850456584796, 0.1820579797430541, 0.07784905168408952], [-0.8807855775437178, 0.24484379594457661, 0.13917079679843913], [-0.8731765533003834, 0.30672353160505766, 0.20069681703758585], [-0.8636898060487711, 0.36744407446115285, 0.26250188511708844], [-0.8523660300291749, 0.4267574237221736, 0.3246822369029641], [-0.8392483077920868, 0.4844215678704279, 0.3873560866013368], [-0.8243753382469657, 0.5402010617072889, 0.4506800484522272], [-0.807778798217396, 0.5938668884650633, 0.5148757400537406], [-0.789452697456726, 0.6451961849175919, 0.5802847614171546], [-0.7692900932762504, 0.6939704831875195, 0.6475248941553229], [-0.7449693678762875, 0.7400832721265175, 0.7129019202981495], [-0.6915679665088793, 0.7846989747425647, 0.7060847120377967], [-0.6365362975483447, 0.8260513797607351, 0.7012121512611784], [-0.5800705758209591, 0.8640792424127871, 0.6976448437365865], [-0.5223491155485078, 0.8986826665961064, 0.6950632600192233], [-0.4635294241183761, 0.9297565131359716, 0.6932323711831182], [-0.4037512463017897, 0.9571996280202626, 0.6919638077397339], [-0.34314930452112813, 0.9809188897876696, 0.6911303095769625], [-0.28185792203559384, 1.0008316610494516, 0.6906141160689829], [-0.22000049314226466, 1.0168674965625146, 0.6903432064780585], [-0.15770981289133904, 1.028968900377473, 0.6902455784990763], [-0.09510680485245637, 1.0370922607657476, 0.6902763939724235], [-0.032317281403262725, 1.0412081536933961, 0.6904128331267021], [0.030536764219361457, 1.0413016402707236, 0.690638800273077], [0.0933282006412538, 1.0373724057261706, 0.690950234714584], [0.15593895653500833, 1.0294347373160773, 0.6913591426449173], [0.21823567558353665, 1.017517441740657, 0.6919069013748953], [0.2800985309032467, 1.0016634766204724, 0.6926336773597381], [0.34139985125191813, 0.9819295683588484, 0.6936034404832925], [0.4020153103647279, 0.9583853879775911, 0.6949058965056132], [0.4618005531951866, 0.9311129123591254, 0.6966525948547165], [0.5206337083620041, 0.9002040693566553, 0.6989833480550713], [0.5783599282795623, 0.8657592387752692, 0.7020699008709809], [0.6348208244785253, 0.8278821691374988, 0.7061665715051937], [0.6898381158747927, 0.7866701852502319, 0.7116148691273921]];