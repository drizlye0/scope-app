const colors = {
  red: {
    strokeColor: "#ff0000",
    fillColor: "rgba(255,41,41,0.2)",
    strokeWidth: 2
  },
  yellow: {
    strokeColor: "#Ffff00",
    fillColor: "rgba(232, 245, 39, 0.2)",
    strokeWidth: 2
  },
  orange: {
    strokeColor: "#FFA500",
    fillColor: "rgba(255,165,0,0.2)",
    strokeWidth: 2
  }
}


const Coordinates = {
  portales: {
    name: "Portales",
    coordinates: [
      { latitude: 25.85338150817608, longitude: -97.49098163098097 },
      { latitude: 25.84614666134398, longitude: -97.4911093711853 },
      { latitude: 25.847869571433534, longitude: -97.48461976647377 },
      { latitude: 25.853146468603097, longitude: -97.4860480427742 }
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth,
  },
  independencia: {
    name: "Independencia",
    coordinates: [
      { latitude: 25.84844737019477, longitude: -97.48181967611444 },
      { latitude: 25.852734234568214, longitude: -97.47250913768346 },
      { latitude: 25.840133008523697, longitude: -97.47005519734424 },
      { latitude: 25.837014972237444, longitude: -97.47947399776386 }
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth,
  },

  lauroVillar: {
    name: "Lauro Villar",
    coordinates: [
      { latitude: 25.85277293876976, longitude: -97.47245326638222 },
      { latitude: 25.85277293876976, longitude: -97.47245326638222 },
      { latitude: 25.84020348502562, longitude: -97.4700003862381 },
      { latitude: 25.843245115407726, longitude: -97.45768569409849 }
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth,
  },

  lasAmericas: {
    name: "Las Americas",
    coordinates: [
      { latitude: 25.83994850352933, longitude: -97.46991254389286 },
      { latitude: 25.841352252833357, longitude: -97.45767027139664 },
      { latitude: 25.83727342784412, longitude: -97.45749391615391 },
      { latitude: 25.835840057273607, longitude: -97.46900964528322 }
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth,
  },
  arboledas: {
    name: "Arboledas",
    coordinates: [
      { "latitude": 25.86673786731479, "longitude": -97.47727755457163 },
      { "latitude": 25.873508997970706, "longitude": -97.47432745993137 },
      { "latitude": 25.87260368905199, "longitude": -97.46255591511726 },
      { "latitude": 25.861225648185318, "longitude": -97.46762730181217 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  campestreDelRio1: {
    name: "Campestre Del Rio 1",
    coordinates: [
      { "latitude": 25.86129926278841, "longitude": -97.46751330792902 },
      { "latitude": 25.862789948636824, "longitude": -97.46638745069504 },
      { "latitude": 25.863405103740583, "longitude": -97.45539743453264 },
      { "latitude": 25.854566052237924, "longitude": -97.4556562677026 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  adolfoLopezMateos: {
    name: "Adolfo Lopez Mateos",
    coordinates: [
      { "latitude": 25.8725599468592, "longitude": -97.48951178044081 },
      { "latitude": 25.87840406200236, "longitude": -97.48598065227269 },
      { "latitude": 25.87493044869232, "longitude": -97.4758368730545 },
      { "latitude": 25.867736441160208, "longitude": -97.4795688316226 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  privanzasDelRio: {
    name: "Privanzas Del Rio",
    coordinates: [
      { "latitude": 25.877086423750768, "longitude": -97.49726369976997 },
      { "latitude": 25.884364924445368, "longitude": -97.48787496238948 },
      { "latitude": 25.878255345783582, "longitude": -97.4868708103895 },
      { "latitude": 25.873006116465497, "longitude": -97.48987052589654 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },

  centro: {
    name: "El Centro",
    coordinates: [
      { "latitude": 25.870991552295017, "longitude": -97.50411473214625 },
      { "latitude": 25.871275125848946, "longitude": -97.49963611364365 },
      { "latitude": 25.87732986214463, "longitude": -97.49959252774715 },
      { "latitude": 25.879653813821193, "longitude": -97.49792117625476 },
      { "latitude": 25.897522641637664, "longitude": -97.49792117625476 },
      { "latitude": 25.890394859707975, "longitude": -97.50506289303304 },
      { "latitude": 25.885024006443714, "longitude": -97.51827511936426 },
      { "latitude": 25.876372093572552, "longitude": -97.51794956624508 },
      { "latitude": 25.876049919595523, "longitude": -97.51461692154408 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },


  lucero: {
    name: "Lucero",
    coordinates: [
      { "latitude": 25.861196986749572, "longitude": -97.503191716969 },
      { "latitude": 25.859129121247385, "longitude": -97.49106109142305 },
      { "latitude": 25.86626934924572, "longitude": -97.48875908553599 },
      { "latitude": 25.871166824965606, "longitude": -97.50376470386982 },
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth
  },

  satelite: {
    name: "Satelite",
    coordinates: [
      { "latitude": 25.84431690938431, "longitude": -97.50705845654011 },
      { "latitude": 25.861005105800768, "longitude": -97.50352397561075 },
      { "latitude": 25.85925372519725, "longitude": -97.49115396291018 },
      { "latitude": 25.846068209499037, "longitude": -97.49146711081266 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },

  solidaridad: {
    name: "Solidaridad",
    coordinates: [
      { "latitude": 25.83163761645445, "longitude": -97.48021624982357 },
      { "latitude": 25.848425664726385, "longitude": -97.48201735317707 },
      { "latitude": 25.845909796961255, "longitude": -97.49115563929081 },
      { "latitude": 25.830132354334946, "longitude": -97.50079181045294 },
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth
  },

  lomasDeSanJuan: {
    name: "Lomas de San Juan",
    coordinates: [
      { "latitude": 25.823314375706122, "longitude": -97.50139094889164 },
      { "latitude": 25.82998086137733, "longitude": -97.50077337026596 },
      { "latitude": 25.831587220057298, "longitude": -97.48003017157316 },
      { "latitude": 25.82433474354428, "longitude": -97.48059444129467 },
      { "latitude": 25.82141787452982, "longitude": -97.48189698904754 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },

  popular: {
    name: "Col.Popular",
    coordinates: [
      { "latitude": 25.848428983777815, "longitude": -97.48240526765586 },
      { "latitude": 25.853024875418534, "longitude": -97.48319920152424 },
      { "latitude": 25.853066814521128, "longitude": -97.48567655682565 },
      { "latitude": 25.85838933915996, "longitude": -97.4826305732131 },
      { "latitude": 25.85436842790721, "longitude": -97.47477438300848 },
      { "latitude": 25.85155910952426, "longitude": -97.47565649449825 },
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth
  },
  cdIndustrial: {
    name: "Ciudad Industrial",
    coordinates: [
      { "latitude": 25.838582457208208, "longitude": -97.44397927075624 },
      { "latitude": 25.84650301310766, "longitude": -97.44328793138266 },
      { "latitude": 25.83740439178422, "longitude": -97.42273986339569 },
      { "latitude": 25.83586359486741, "longitude": -97.42310296744108 },
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth
  },
  cima3: {
    name: "Cima 3",
    coordinates: [
      { "latitude": 25.83629209896165, "longitude": -97.43018869310617 },
      { "latitude": 25.83710323485744, "longitude": -97.43774648755789 },
      { "latitude": 25.827201444218986, "longitude": -97.4391794577241 },
      { "latitude": 25.825755880073913, "longitude": -97.43752688169478 },
      { "latitude": 25.824992953091545, "longitude": -97.43124917149545 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  cima1: {
    name: "Cima 1",
    coordinates: [
      { "latitude": 25.83720311765058, "longitude": -97.43887636810541 },
      { "latitude": 25.838302124568077, "longitude": -97.44638085365295 },
      { "latitude": 25.822868018598705, "longitude": -97.44664538651705 },
      { "latitude": 25.821888079276658, "longitude": -97.44047295302153 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  fundadores: {
    name: "Fundadores",
    coordinates: [
      { "latitude": 25.827727456186263, "longitude": -97.45250467211008 },
      { "latitude": 25.82772866332523, "longitude": -97.44689851999283 },
      { "latitude": 25.83436502538938, "longitude": -97.44686264544725 },
      { "latitude": 25.835088360629978, "longitude": -97.45214056223631 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  tecnologico: {
    name: "Fundadores",
    coordinates: [
      { "latitude": 25.828230530275786, "longitude": -97.45741378515959 },
      { "latitude": 25.82785631819932, "longitude": -97.452961653471 },
      { "latitude": 25.838770149950168, "longitude": -97.4520570784807 },
      { "latitude": 25.838868522554524, "longitude": -97.45739568024874 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  mexico: {
    name: "Col.Mexico",
    coordinates: [
      { "latitude": 25.83603469492775, "longitude": -97.4642339721322 },
      { "latitude": 25.82390921410398, "longitude": -97.46285263448954 },
      { "latitude": 25.823725421128103, "longitude": -97.45739031583071 },
      { "latitude": 25.83718742609954, "longitude": -97.45755393058062 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  villaLasTorres: {
    name: "Villa Las Torres",
    coordinates: [
      { "latitude": 25.810887575704715, "longitude": -97.51978553831577 },
      { "latitude": 25.811152881917582, "longitude": -97.51212280243635 },
      { "latitude": 25.815304137465382, "longitude": -97.50617366284132 },
      { "latitude": 25.82289246416334, "longitude": -97.5018895044923 },
      { "latitude": 25.82404230539119, "longitude": -97.51386087387802 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
  emilioPortes: {
    name: "Emilio Portes G.",
    coordinates: [
      { "latitude": 25.844245999891367, "longitude": -97.50731460750103 },
      { "latitude": 25.845863329243258, "longitude": -97.49159518629313 },
      { "latitude": 25.83758092128982, "longitude": -97.49712187796831 },
      { "latitude": 25.83161347447045, "longitude": -97.50094234943388 },
      { "latitude": 25.82766770279303, "longitude": -97.50111870467663 },
      { "latitude": 25.823439319179204, "longitude": -97.50178758054972 },
      { "latitude": 25.824388462754975, "longitude": -97.51380454748869 },
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  tierraYLibertad: {
    name: "Tierra Y Libertad",
    coordinates: [
      { "latitude": 25.82434047761851, "longitude": -97.48047307133675 },
      { "latitude": 25.82879667468467, "longitude": -97.46526025235653 },
      { "latitude": 25.836203682398843, "longitude": -97.46579132974149 },
      { "latitude": 25.83576069330105, "longitude": -97.46895834803581 },
      { "latitude": 25.84004959093384, "longitude": -97.47007012367249 },
      { "latitude": 25.836872991118845, "longitude": -97.4795550853014 },
    ],
    strokeColor: colors.orange.strokeColor,
    fillColor: colors.orange.fillColor,
    strokeWidth: colors.orange.strokeWidth
  },
}

export default Coordinates
