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
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth,
  },

  lasAmericas: {
    name: "Las Americas",
    coordinates: [
      { latitude: 25.83994850352933, longitude: -97.46991254389286 },
      { latitude: 25.841352252833357, longitude: -97.45767027139664 },
      { latitude: 25.83727342784412, longitude: -97.45749391615391 },
      { latitude: 25.835840057273607, longitude: -97.46900964528322 }
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth,
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
  modelo: {
    name: "Modelo",
    coordinates: [
      { "latitude": 25.868057129399567, "longitude": -97.49281659722328 },
      { "latitude": 25.872637476113933, "longitude": -97.4895292147994 },
      { "latitude": 25.87966949973634, "longitude": -97.50339690595865 },
      { "latitude": 25.87136985133125, "longitude": -97.50395983457564 },
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
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
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

  lomasDeSanJuan: {
    name: "Lomas De San Juan",
    coordinates: [
      { "latitude": 25.823630959274173, "longitude": -97.50156462192534 },
      { "latitude": 25.824059507655473, "longitude": -97.480650767684 },
      { "latitude": 25.837162078204976, "longitude": -97.47958928346634 },
      { "latitude": 25.83768231247649, "longitude": -97.49666053801775 },
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },
}

export default Coordinates
