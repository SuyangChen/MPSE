var t='Mon Apr 20 11:16:02 2020';
var steps=100;
 var costhistory=[0.6 ,0.57,0.56,0.56,0.53,0.5 ,0.42,0.37,0.33,0.31,0.28,0.24,0.2 ,0.15,
 0.09,0.06,0.05,0.05,0.05,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,
 0.04,0.04];
var proj=[[[1.,0.,0.],
 [0.,1.,0.]],[[1.,0.,0.],
 [0.,0.,1.]],];
var points=[[0.9829895807733291, -0.39200177219787025, 0.4782376733004815], [0.9622263080587142, -0.45177700143173394, 0.4824338318887865], [0.9144234820932334, -0.5144311643821368, 0.50196014978213], [0.8707470884108383, -0.5654225306220547, 0.5239100074105763], [0.8279432565723636, -0.6225673373307514, 0.547047138768004], [0.7544222482591472, -0.6732493782663586, 0.5636273350193273], [0.7063607538991137, -0.7205464621908739, 0.5852838755776121], [0.6659318633411605, -0.7622794463751504, 0.6102738191103585], [0.601066481079321, -0.8081202800943224, 0.6354211540445734], [0.5734537215600168, -0.842363925431999, 0.65870286137681], [0.4956264212512202, -0.8734343923594448, 0.6775714371054706], [0.43326056417763115, -0.914684654959367, 0.7006266791253881], [0.38728278554869144, -0.9378839274760218, 0.724377964374113], [0.31224508098423165, -0.9464835737774457, 0.7499713470035544], [0.2757413079088627, -0.9757667949512946, 0.7618359286712452], [0.20999968955696097, -0.9900814886247732, 0.798000644327328], [0.15565655244918444, -1.0126418955384295, 0.8147715675468901], [0.08857133318839036, -1.0134791559301002, 0.8391501316272844], [0.013888046791142254, -1.0198808553986887, 0.8686144906083385], [-0.03528214239494144, -1.0230317106036297, 0.8943827659756903], [-0.0852954281931665, -1.0136317834112367, 0.9138703719925131], [-0.1627989712542289, -1.0045664789916566, 0.9306241869933659], [-0.206300289263936, -0.9975559797977264, 0.9626550048523181], [-0.2743593672906735, -0.9822259526292945, 0.9744423643631454], [-0.33375478639624107, -0.9546608441458257, 1.0034747586084882], [-0.38895406547978095, -0.9402405920169257, 1.0415600813617165], [-0.4276713639808392, -0.9097846664510963, 0.976830146541668], [-0.472831311907331, -0.8796100486585331, 0.9145036204666304], [-0.5069826395349917, -0.8406004149376572, 0.8601151821490569], [-0.531390089355352, -0.8019200901212121, 0.7944291260591495], [-0.5891539317536794, -0.772402370760863, 0.7458957587048461], [-0.6064708357548093, -0.7294200107847191, 0.6833305731269883], [-0.682330034971009, -0.6686001361393228, 0.6268526366822239], [-0.6888042599734053, -0.6236448999054327, 0.5670088573271471], [-0.7151118628824595, -0.5771906873881182, 0.5202263158643237], [-0.7265824830176046, -0.5184697832364435, 0.455150278140128], [-0.7538205455393311, -0.4616099659237414, 0.40116508584572913], [-0.7784352820399686, -0.4120764779306536, 0.34870746418798354], [-0.8611163505964696, -0.3693731888733939, 0.29130961141029504], [-0.8458064518138592, -0.3008674920837179, 0.23324697426205762], [-0.8411749211454411, -0.23979059602189917, 0.1836011648430838], [-0.8516246132574741, -0.1538432792982204, 0.10800093751774302], [-0.9059368105197338, -0.10470812379393643, 0.06298676304017495], [-0.8662604176674062, -0.03949727688988798, -0.006120301451261143], [-0.8998658605884151, 0.021340186188160973, -0.055219775325734875], [-0.9173758690278108, 0.09624766647798949, -0.11303996769506555], [-0.9199634362460978, 0.15080989429596753, -0.17690184363426825], [-0.9504897587618745, 0.21442060031076213, -0.23082986977322692], [-0.9369980052867141, 0.27485774510378513, -0.29568874737624584], [-0.963327330894598, 0.3332396316722309, -0.3532081638399669], [-0.956123748366243, 0.3824135321080655, -0.424162244165333], [-0.908633556583768, 0.44356362679703787, -0.43420064039531886], [-0.8569074825221961, 0.503358296423349, -0.45340589903746853], [-0.8139690097350554, 0.5653467285436978, -0.4790612474630572], [-0.7726151926373643, 0.6168675509289758, -0.4997236154524334], [-0.717857476262589, 0.665027150804041, -0.5173616666791085], [-0.6590381209440007, 0.7134699345287866, -0.5423451570620844], [-0.6200023920848148, 0.75951850864636, -0.5700164651601003], [-0.5699913752518759, 0.7962942804118407, -0.5869221338783726], [-0.5125408979381646, 0.8398738894385472, -0.6137221807470125], [-0.43062695447483496, 0.8790662162068567, -0.6336165956489133], [-0.388438585689844, 0.9045224375326428, -0.6500508114019254], [-0.3256894207906963, 0.929187554179318, -0.6857673995274822], [-0.2759353331987425, 0.9573280147343877, -0.7065503313464756], [-0.21705244111877353, 0.9820886267774782, -0.7231049900672668], [-0.15241842431887434, 0.9879299487215464, -0.7519972048183851], [-0.08138316325112585, 1.0091720155418087, -0.7701236663877357], [-0.038033311001540775, 1.0171094878972315, -0.7982666161663052], [0.013989635654148111, 1.0190791233984038, -0.8256939112885466], [0.07677218727238239, 1.0151539474139997, -0.8416898095465776], [0.1406484914379569, 1.0172284770135873, -0.8737421852682061], [0.198778935261586, 1.009947283757557, -0.8958884250266722], [0.2626212023343723, 0.9972900614603335, -0.9199043671367906], [0.322027009790341, 0.9777765537540488, -0.9289246918749804], [0.3802570751935397, 0.9594735745763486, -0.9668996250535717], [0.43371763527333196, 0.9355963967643736, -0.9786660890331664], [0.47482981266800495, 0.9049485204264732, -0.9210835711977156], [0.5238931414138801, 0.8910834249777483, -0.8707585328480766], [0.5682332646638847, 0.8474029705360193, -0.8018548650075826], [0.5907910045886114, 0.8112753193534393, -0.7560723902800199], [0.631305978961816, 0.7582225539944519, -0.6865336942641556], [0.6660674736145071, 0.721289471110816, -0.633211525155079], [0.6829703325614954, 0.6621441013164404, -0.5771894910998535], [0.7036981916020913, 0.6310746523938728, -0.513468849780664], [0.7504728039556234, 0.5700220720096475, -0.46001701395529504], [0.7934030099010844, 0.5135604735885653, -0.4089768217989535], [0.8031264001874141, 0.4755031566629024, -0.3339704420627403], [0.8428807354363117, 0.39464250379532656, -0.29133798228534064], [0.862525080302706, 0.34017552044166044, -0.24259409749225266], [0.8825318860516218, 0.2752696989527661, -0.18500679466502404], [0.9262942304288574, 0.2271699976487757, -0.1314978175644228], [0.9305233618115331, 0.19452665242431097, -0.06547550747805371], [0.9258445786260631, 0.1091225824604457, -0.005660199770092903], [0.9315651824722634, 0.03560430733264461, 0.052259853960911914], [0.9555443619675031, -0.031925221950718195, 0.11219001343711876], [0.9786534023637663, -0.09360033078271046, 0.1624051911545823], [0.9871999206730717, -0.15415810422350065, 0.22624476899918322], [0.9886659749597043, -0.21501050460417673, 0.28734075943063236], [1.0017928380880687, -0.27558454716458824, 0.3503556241181339], [0.9963845358396488, -0.3303027328626435, 0.41307458500385785]];