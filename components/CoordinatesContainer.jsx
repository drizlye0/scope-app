const colors = {
  red: {
    strokeColor: "#ff0000",
    fillColor: "rgba(255,41,41,0.1)",
    strokeWidth: 2
  },
  yellow: {
    strokeColor: "#Ffff00",
    fillColor: "rgba(232, 245, 39, 0.1)",
    strokeWidth: 2
  },
  orange: {
    strokeColor: "#FFA500",
    fillColor: "rgba(255, 165, 0, 0.2)",
    strokeWidth: 2
  }
}


const Coordinates = {
  portales: {
    coordinates: [
      { latitude: 25.85338150817608, longitude: -97.49098163098097 },
      { latitude: 25.84614666134398, longitude: -97.4911093711853 },
      { latitude: 25.847869571433534, longitude: -97.48461976647377 },
      { latitude: 25.853146468603097, longitude: -97.4860480427742 }
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  independencia: {
    coordinates: [
      { latitude: 25.84844737019477, longitude: -97.48181967611444 },
      { latitude: 25.852734234568214, longitude: -97.47250913768346 },
      { latitude: 25.840133008523697, longitude: -97.47005519734424 },
      { latitude: 25.837014972237444, longitude: -97.47947399776386 }
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  mariano: {
    name: "Mariano Matamoros",
    coordinates: [
      { latitude: 25.85905741381228, longitude: -97.51610002534198 },
      { latitude: 25.85141075969024, longitude: -97.5199194911773 },
      { latitude: 25.850522479930024, longitude: -97.51777372385409 },
      { latitude: 25.85071558479332, longitude: -97.51680812855864 },
      { latitude: 25.85288200686416, longitude: -97.51565161206761 },
      { latitude: 25.852302701941614, longitude: -97.5141817614512 },
      { latitude: 25.856468806716066, longitude: -97.51208963838005 }
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  lasbrisas: {
    name: "Las Brisas",
    coordinates: [
      { latitude: 25.85966748402961, longitude: -97.5646555660532 },
      { latitude: 25.850707764566433, longitude: -97.56392600513777 },
      { latitude: 25.851074662962215, longitude: -97.55748870316815 },
      { latitude: 25.860581216751573, longitude: -97.55221176892519 },
      { latitude: 25.86825563588867, longitude: -97.55774047225714 },
      { latitude: 25.86630947353172, longitude: -97.56392631679773 }
      
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  palmares: {
      name: "Palmares",
      coordinates: [
        {"latitude": 25.844416786087372, "longitude": -97.55673866719007},
        {"latitude": 25.839288868375043, "longitude": -97.55684964358807},
        {"latitude": 25.839256882313432, "longitude": -97.55499590188265},
        {"latitude": 25.838441234820188, "longitude": -97.5550327822566},
        {"latitude": 25.83624351512472, "longitude": -97.5496868044138},
        {"latitude": 25.838774072785654, "longitude": -97.54619054496288},
        {"latitude": 25.842953025725745, "longitude": -97.54602391272783},  
        
      ],
      strokeColor: colors.red.strokeColor,
      fillColor: colors.red.fillColor,
      strokeWidth: colors.red.strokeWidth
  },
  sanfrancisco: {
    name: "San Francisco",
    coordinates: [
      {"latitude": 25.87646500500567, "longitude": -97.51817621290684},
      {"latitude": 25.87629517009049, "longitude": -97.50474739819765},
      {"latitude": 25.865089749487574, "longitude": -97.50397257506847},
      {"latitude": 25.867279089352696, "longitude": -97.51860469579697},
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth
  },
  buenavista: {
    name: "Buena Vista",
    coordinates: [
      {"latitude": 25.867156303968404, "longitude": -97.51864694058895},
      {"latitude": 25.864475809916346, "longitude": -97.50410668551922},
      {"latitude": 25.858206806570703, "longitude": -97.50440876930952},
      {"latitude": 25.86203088083946, "longitude": -97.51966584473848},
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  vallereal: {
    name: "Valle Real",
    coordinates: [
      {"latitude": 25.855732783348724, "longitude": -97.54075907170773},
      {"latitude": 25.85245281250513, "longitude": -97.53837458789349},
      {"latitude": 25.84797336766713, "longitude": -97.53729164600372},
      {"latitude": 25.848029490011307, "longitude": -97.53593780100346},
      {"latitude": 25.85201501354313, "longitude": -97.53396201878786},
      {"latitude": 25.855419604522403, "longitude": -97.53716424107552},
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  unidosavanzamos: {
    name: "Unidos Avanzamos",
    coordinates: [
      {"latitude": 25.824090894236523, "longitude": -97.58697956800461},
      {"latitude": 25.824317843113413, "longitude": -97.57573440670967},
      {"latitude": 25.818459284113235, "longitude": -97.5781125202775},
      {"latitude": 25.8220462221737, "longitude": -97.58628889918327},
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  molinodelrey: {
    name: "Molino del Rey",
    coordinates: [
      {"latitude": 25.852998324036555, "longitude": -97.58919507265091},
      {"latitude": 25.850451173967077, "longitude": -97.58310679346323},
      {"latitude": 25.845682286011986, "longitude": -97.58291535079479},
      {"latitude": 25.845473784214008, "longitude": -97.58651118725538},
      {"latitude": 25.843919815676347, "longitude": -97.58647564798594},
      {"latitude": 25.843839853636204, "longitude": -97.58898586034775},
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  haciendamisiones: {
    name: "Hacienda Misiones",
    coordinates: [
      {"latitude": 25.826708324738583, "longitude": -97.54561856389046},
      {"latitude": 25.826803387711323, "longitude": -97.54164956510067},
      {"latitude": 25.825524407098413, "longitude": -97.53888990730047},
      {"latitude": 25.825270902929343, "longitude": -97.53898411989212},
      {"latitude": 25.82531315366187, "longitude": -97.53955945372581},
      {"latitude": 25.82449922082594, "longitude": -97.53962986171246},
      {"latitude": 25.824478095316305, "longitude": -97.54126198589802},
      {"latitude": 25.82374865933622, "longitude": -97.5414266064763},
      {"latitude": 25.823939091752923, "longitude": -97.54484340548515},
      {"latitude": 25.824478095316305, "longitude": -97.54553642123938},
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  haciendamisionesII: {
    name: "Hacienda Misiones II",
    coordinates: [
      {"latitude": 25.82754759234568, "longitude": -97.56013467907906},
      {"latitude": 25.82631087014952, "longitude": -97.56018161773682},
      {"latitude": 25.826247494579146, "longitude": -97.5559427216649},
      {"latitude": 25.828107704345634, "longitude": -97.55583677440882},
      {"latitude": 25.8284143162576, "longitude": -97.5543337315321},
      {"latitude": 25.830112738723855, "longitude": -97.55442727357149},
      {"latitude": 25.830207798962615, "longitude": -97.55345832556486},
      {"latitude": 25.82963532392581, "longitude": -97.55338657647371},
      {"latitude": 25.829458179007155, "longitude": -97.55136486142874},
      {"latitude": 25.832553801106933, "longitude": -97.55127232521772},
      {"latitude": 25.83257100213434, "longitude": -97.55712121725082},
      {"latitude": 25.832876998941256, "longitude": -97.55716849118471},
      {"latitude": 25.83283776862561, "longitude": -97.55807843059301},
      {"latitude": 25.827633299310527, "longitude": -97.55803685635328},
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  secc16: {
    name: "Seccion 16",
    coordinates: [
      {"latitude": 25.837023871732082, "longitude": -97.5340773537755},
      {"latitude": 25.836417934024155, "longitude": -97.5204735249281},
      {"latitude": 25.841918334469366, "longitude": -97.52042960375547},
      {"latitude": 25.842044767044666, "longitude": -97.53100790083408},
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  victoria: {
    name: "Victoria",
    coordinates: [
      {"latitude": 25.849962677296343, "longitude": -97.51127254217863},
      {"latitude": 25.8452345045631, "longitude": -97.51326877623796},
      {"latitude": 25.84474447763868, "longitude": -97.51320071518421},
      {"latitude": 25.844673266660553, "longitude": -97.51249797642231},
      {"latitude": 25.8439792591202, "longitude": -97.51252043992281},
      {"latitude": 25.843326284829732, "longitude": -97.50789597630501},
      {"latitude": 25.849073179720417, "longitude": -97.50656493008137},
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  vallealto: {
    name: "Valle Alto",
    coordinates: [
      {"latitude": 25.85208320287467, "longitude": -97.51568745821714},
      {"latitude": 25.848478467806014, "longitude": -97.51716133207083},
      {"latitude": 25.847263689275398, "longitude": -97.5129096955061},
      {"latitude": 25.85079604717723, "longitude": -97.51149114221334},
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  martharita: {
    name: "Martha Rita",
    coordinates: [
      {"latitude": 25.824154572755212, "longitude": -97.54729997366667},
      {"latitude": 25.823063884771226, "longitude": -97.54773650318384},
      {"latitude": 25.823317393665963, "longitude": -97.54838425666094},
      {"latitude": 25.818742380018712, "longitude": -97.55101516842842},
      {"latitude": 25.817917235054065, "longitude": -97.54529736936092},
      {"latitude": 25.823694034450188, "longitude": -97.54549384117126},
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  lospresidentes: {
    name: "Los Presidentes",
    coordinates: [
      {"latitude": 25.853526031635344, "longitude": -97.5895930454135},
      {"latitude": 25.85075863315932, "longitude": -97.58264780044556},
      {"latitude": 25.857399737612045, "longitude": -97.58322581648827},
      {"latitude": 25.85737831626742, "longitude": -97.57826238870621},
      {"latitude": 25.858861508930474, "longitude": -97.57828384637833},
      {"latitude": 25.858901334026154, "longitude": -97.58314937353134},
      {"latitude": 25.860918819612184, "longitude": -97.58296966552734},
      {"latitude": 25.859303204695397, "longitude": -97.58553486317396},
      {"latitude": 25.85967912752309, "longitude": -97.58988440036774},
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth
  },
  cabraspintas: {
    name: "Cabras Pintas",
    coordinates: [
      {"latitude": 25.828289981601614, "longitude": -97.54541873931885},
      {"latitude": 25.827298015724917, "longitude": -97.5409847125411},
      {"latitude": 25.828644274670364, "longitude": -97.53867633640766},
      {"latitude": 25.83053402097919, "longitude": -97.53778450191021},
      {"latitude": 25.83022711277957, "longitude": -97.53600016236305},
      {"latitude": 25.837197685960057, "longitude": -97.53435462713242},
      {"latitude": 25.8392309313514, "longitude": -97.54046235233545},
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth
  },
  acuario: {
    name: "Acuario 2001",
    coordinates: [
      {"latitude": 25.86285783005851, "longitude": -97.53025688230991},
      {"latitude": 25.860510317011304, "longitude": -97.52931576222181},
      {"latitude": 25.85883526056462, "longitude": -97.52957928925753},
      {"latitude": 25.858008283203237, "longitude": -97.52413675189018},
      {"latitude": 25.859822436472534, "longitude": -97.5235490128398},
      {"latitude": 25.859627536258767, "longitude": -97.52134390175343},
      {"latitude": 25.861871886291446, "longitude": -97.52041015774012},
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth
  },
  losebanos: {
    name: "Los Ebanos",
    coordinates: [
      {"latitude": 25.827250333553714, "longitude": -97.53211699426174},
      {"latitude": 25.823903781803377, "longitude": -97.53253944218159},
      {"latitude": 25.823903781803377, "longitude": -97.52056203782558},
      {"latitude": 25.827174283468736, "longitude": -97.52056203782558},
      {"latitude": 25.828048856496086, "longitude": -97.52447001636028},
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  losencinos: {
    name: "Los Encinos",
    coordinates: [
      {"latitude": 25.864422108907814, "longitude": -97.54021022468805},
      {"latitude": 25.865629772321537, "longitude": -97.5331573560834},
      {"latitude": 25.86283882326436, "longitude": -97.53087647259235},
      {"latitude": 25.85888564535369, "longitude": -97.53296859562397},
      {"latitude": 25.858731473865564, "longitude": -97.5390924140811},
      {"latitude": 25.861613029435027, "longitude": -97.54160396754742},
      {"latitude": 25.86172164077249, "longitude": -97.54098605364561},
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  nuevoamanecer: {
    name: "Nuevo Amanecer",
    coordinates: [
      {"latitude": 25.87769305802261, "longitude": -97.55571104586124},
      {"latitude": 25.879667388170947, "longitude": -97.55497980862856},
      {"latitude": 25.87958503709176, "longitude": -97.55049347877502},
      {"latitude": 25.877845394831663, "longitude": -97.54884861409664},
      {"latitude": 25.876788384488773, "longitude": -97.54891265183687},
      {"latitude": 25.87634615075674, "longitude": -97.54969250410795},
      {"latitude": 25.876134686429346, "longitude": -97.55027990788221},
      {"latitude": 25.876240569470845, "longitude": -97.55430690944195},
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth
  }
}

export default Coordinates
