var t='Mon Apr 20 11:19:08 2020';
var steps=100;
 var costhistory=[0.58,0.57,0.56,0.55,0.52,0.46,0.39,0.36,0.34,0.32,0.29,0.27,0.25,0.23,
 0.2 ,0.17,0.12,0.08,0.06,0.05,0.05,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04];
var proj=[[[1.,0.,0.],
 [0.,1.,0.]],[[1.,0.,0.],
 [0.,0.,1.]],];
var points=[[-0.9795854214009707, 0.23573770738358407, 0.24958295355483898], [-0.9538395112982857, 0.19054481447469526, 0.1889282611618214], [-0.953365582565346, 0.13403476455786748, 0.12030827987100047], [-0.9272562401975495, 0.06298667289183585, 0.07314863261550927], [-0.906584287189489, 0.0017313791983053454, 0.016102448384588606], [-0.8937383272745605, -0.059328374261961976, -0.03251587376529124], [-0.8879338227647461, -0.12557389750791462, -0.09574075797031323], [-0.8515030721557975, -0.19083270366348573, -0.15227025352018955], [-0.8694148887175122, -0.24845426493832337, -0.19304475630986306], [-0.8394732766068361, -0.3152067142935517, -0.2508862925581486], [-0.7673163355785547, -0.37035282400031144, -0.31097638342148165], [-0.7584249868534972, -0.42462908529339066, -0.36516838283921343], [-0.7439176022573433, -0.48348409210664645, -0.42090118858779507], [-0.67579243191937, -0.5443346303680208, -0.4554475249310254], [-0.6880140810353865, -0.5911452420745209, -0.5002846950731147], [-0.6171786411759742, -0.6507966648644798, -0.5721695771392121], [-0.6157657031168899, -0.6930400622872496, -0.6301428211273439], [-0.5539444667735985, -0.7467381439711431, -0.6701347144726807], [-0.5293691508164224, -0.7926469937763377, -0.7386658896130207], [-0.4834038793467268, -0.8218710418742826, -0.7795914841321119], [-0.4528758084960422, -0.858499244081868, -0.8304702337650812], [-0.3896628631131037, -0.8920177579491719, -0.8854329199701659], [-0.3438965734210743, -0.921683898600716, -0.9366333195509372], [-0.3029649070506645, -0.9542512168784085, -0.9937227929963377], [-0.2580990171046304, -0.9634393407475733, -1.0511390699098], [-0.19637059279069133, -0.9889691357362174, -1.1021280168388512], [-0.1614140703981963, -1.0037326769833539, -1.0745979471519687], [-0.09500504630592614, -1.0095409425391038, -1.031121985765043], [-0.039680331059882376, -1.0211780759483589, -1.0100189286485024], [0.00222036020921125, -1.0175737360232378, -0.9716612709630774], [0.08203028299032414, -1.0187414125627814, -0.9499995363517886], [0.15075883955322056, -1.0132745826497553, -0.9132539961736355], [0.20778546559676195, -1.0083472130101931, -0.8812768986599493], [0.2535057868485141, -0.9772819448070287, -0.8514654026883735], [0.29533015722832395, -0.9706737125325614, -0.8070905703331513], [0.35575615167652685, -0.948155442077053, -0.7879892900173003], [0.4531652430572739, -0.928406275176374, -0.752135183893588], [0.48848987919919323, -0.8946068052013832, -0.7292752548101661], [0.5188364268577516, -0.8570074446590991, -0.6891951045666778], [0.6002184866110173, -0.8253123822163294, -0.6607634293425619], [0.636433581741386, -0.7881117762283333, -0.6301635959005876], [0.7058349103576212, -0.7456105005479301, -0.6056342065966779], [0.7214864596875308, -0.6994095359938484, -0.560209063925611], [0.784357791182927, -0.638140321621275, -0.5343650547391391], [0.8187645116385687, -0.5956584481520222, -0.5016309588998382], [0.8702524117267996, -0.5409222837068237, -0.46957176006096424], [0.9247768187530543, -0.48398210962103216, -0.4394875679915542], [0.9584680614523667, -0.42660725813111483, -0.4134675101528633], [1.01902703519928, -0.3616242433855074, -0.362088825559159], [1.031311153942748, -0.3102167476467827, -0.3573018838065464], [1.0752696634611236, -0.24573832044135782, -0.32190675750457104], [1.055001183742247, -0.19031853804661925, -0.2722301727989915], [1.0534333912892617, -0.13259570002837054, -0.2181793546860045], [1.0503006119543565, -0.053475912049606784, -0.15664510459112074], [1.0253887819807868, 0.004370897552704842, -0.10169771386089425], [1.0081797697680934, 0.060748906777576515, -0.04393088669323332], [0.9882959683796699, 0.13066932273474172, 0.009235707558256005], [0.9633248192573057, 0.1949737304563552, 0.06630941311133086], [0.9285743810309053, 0.25417216656325825, 0.112796836346468], [0.9008295621084191, 0.31676145881331735, 0.17724547448417943], [0.9075035694365913, 0.3680222263231089, 0.21332713428215844], [0.8456373498228628, 0.42666267575554645, 0.27065449735773955], [0.8212472017314143, 0.47474712217872184, 0.33220984176203966], [0.8005647118054243, 0.5346897159139669, 0.3904802390208447], [0.7657937066344785, 0.6058268926458027, 0.44376608093882547], [0.7542121119819964, 0.6418874609863249, 0.4823025560966247], [0.6885141890728368, 0.6957945630409896, 0.5380477164060867], [0.6449200398726012, 0.7275558980635807, 0.5947782721492809], [0.616593265046718, 0.788138865801507, 0.6529551755542469], [0.5824089427025219, 0.833642744789374, 0.7007071601287832], [0.5314055164899956, 0.865382776539011, 0.7464964711368577], [0.49543961789593316, 0.8927999878367603, 0.818720976869412], [0.4498886192938695, 0.9209503058245013, 0.8575634377800283], [0.39467909987022715, 0.9611545200455603, 0.9078673778247731], [0.35231278636969926, 0.9608849400442148, 0.9636836888542394], [0.2983844084949929, 1.0076942247303962, 1.0232434313301828], [0.24639845060252105, 0.99866678343698, 0.9883194584434353], [0.19910713927606893, 1.004435289095055, 0.9543168415310389], [0.14621313241500722, 1.007258657796485, 0.928282607269386], [0.0796252426368062, 1.01310334703016, 0.8911672457677022], [0.025617837534139987, 1.0161526375027803, 0.8610005747403414], [-0.028023660522169563, 1.015190414186833, 0.831276785241231], [-0.10075835708487559, 1.010277396898908, 0.7975692642259117], [-0.15032517557727376, 0.9811503580792313, 0.7627579421244586], [-0.21547422661334525, 0.9708056312330022, 0.7331952522549777], [-0.26432174369759665, 0.9547878628796456, 0.7003158122132678], [-0.30951964935929716, 0.9231830603512017, 0.6659478680130126], [-0.3640802615384785, 0.8924887584761644, 0.6381599984177619], [-0.43715625615252707, 0.8506092480392885, 0.6062885864605004], [-0.49251224866050114, 0.8242528078764648, 0.5847804290068512], [-0.5380792934774313, 0.7788532001997615, 0.550972944003111], [-0.588879001217864, 0.7470474888697216, 0.5088279383171609], [-0.6565528859609425, 0.6936738181330451, 0.4769258096476904], [-0.6756506107700107, 0.6510355126683142, 0.44724828320682547], [-0.7288509668457211, 0.6027505008758994, 0.4205164657749257], [-0.7791599325942508, 0.5459473702163363, 0.3930951482192169], [-0.8261635419675403, 0.49280346761415394, 0.3604546663178595], [-0.862610080752183, 0.4375211738127812, 0.319658248971983], [-0.9030587316844082, 0.3675420787688712, 0.29744325831263546], [-0.9529866682232012, 0.3116544572283023, 0.2681120440030323]];