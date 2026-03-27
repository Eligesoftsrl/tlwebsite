// Site configuration data
export const siteConfig = {
  name: "Tenuta Leone",
  tagline: "Location per Matrimoni ed Eventi a Salerno",
  description: "Tenuta Leone a Calvanico (Salerno) - Location esclusiva per matrimoni, eventi e ricevimenti in Campania. Dimora storica immersa nel verde con piscina panoramica e cucina gourmet.",
  phone: "+39089957360",
  whatsapp: "393452294361",
  email: "info@tenutaleone.it",
  address: {
    street: "Via Roma, 19",
    city: "Calvanico",
    province: "SA",
    zip: "84080",
    country: "Italia"
  },
  coordinates: {
    lat: 40.776270,
    lng: 14.829491
  },
  social: {
    facebook: "https://www.facebook.com/MatrimonioSalerno",
    instagram: "https://www.instagram.com/tenutaleone"
  }
};

export const heroSlides = [
  {
    video: "/img/video/hero-video.mp4",
    poster: "/img/slide/slide_1.jpg",
    title: "Tenuta Leone",
    text: "Qui inizia la tua storia, dove ogni dettaglio è un'emozione.",
    isVideoSlide: true
  },
  {
    image: "/img/slide/slide_1.jpg",
    title: "Location per Matrimoni ed Eventi in Campania",
    text: "Una sala incantevole, una piscina immersa nella natura, la magia di un \"sì\" indimenticabile."
  },
  {
    image: "/img/slide/slide_2.jpg",
    title: "Dimora Storica per Eventi Esclusivi",
    text: "Eleganza, tradizione e cucina d'eccellenza per il vostro giorno speciale."
  },
  {
    image: "/img/slide/slide_3.jpg",
    title: "La Tua Location per Eventi a Salerno",
    text: "Benvenuti a Tenuta Leone, qui ogni sogno diventa realtà."
  }
];

// Sale della dimora con tour virtuali 360° Kuula
export const spaces = [
  {
    slug: "foyer",
    name: "Foyer d'Ingresso",
    headline: "Là dove inizia la magia",
    description: "Varcando la soglia, si viene accolti da un ambiente che conserva intatta l'eleganza dell'epoca. Il pavimento in cotto antico e il soffitto a volta guidano lo sguardo verso i dettagli architettonici che raccontano storie di un tempo passato.",
    image: "/img/stanze/foyer/foyer1.webp",
    gallery: ["/img/stanze/foyer/foyer1.webp", "/img/stanze/foyer/foyer2.webp", "/img/stanze/foyer/foyer3.webp", "/img/stanze/foyer/foyer4.webp", "/img/stanze/foyer/foyer5.webp"],
    kuulaEmbed: "https://kuula.co/share/hxcJ2?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "la_bottaia",
    name: "La Bottaia",
    headline: "Dove il tempo si versa lento, come il vino buono",
    description: "Tra pietra viva e botti antiche, qui il tempo si custodisce e i sapori si celebrano. Luci calde avvolgono bottiglie che raccontano territori e passioni, mentre un tavolo su botte invita alla degustazione e al dialogo. Più di una cantina: un rifugio autentico per chi ama il ritmo lento e il gusto pieno.",
    image: "/img/stanze/la_bottaia/bottaia1.webp",
    gallery: ["/img/stanze/la_bottaia/bottaia1.webp", "/img/stanze/la_bottaia/bottaia2.webp", "/img/stanze/la_bottaia/bottaia3.webp"],
    kuulaEmbed: "https://kuula.co/share/hxDhZ?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "antico_forno",
    name: "L'Antico Forno",
    headline: "Sapori e calore del passato",
    description: "Tra profumi antichi e dettagli autentici, l'Antico Forno celebra la cucina di un tempo. Pentole in rame, legno vivo e il calore del forno a legna evocano atmosfere familiari, dove la storia profuma di pane e di casa.",
    image: "/img/stanze/forno/forno1.webp",
    gallery: ["/img/stanze/forno/forno1.webp", "/img/stanze/forno/forno2.webp", "/img/stanze/forno/forno3.webp"],
    kuulaEmbed: "https://kuula.co/share/hxDhy?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "scala_maestra",
    name: "La Scala Maestra",
    headline: "Un viaggio tra arte e luce",
    description: "Ogni passo su questa scalinata è un viaggio nel tempo. Affreschi e decori raccontano epoche lontane, mentre la luce e il ferro battuto guidano lo sguardo verso l'alto, in un'ascesa di eleganza e incanto.",
    image: "/img/stanze/scala_maestra/scala1.webp",
    gallery: ["/img/stanze/scala_maestra/scala1.webp", "/img/stanze/scala_maestra/scala2.webp", "/img/stanze/scala_maestra/scala3.webp"],
    kuulaEmbed: "https://kuula.co/share/hxcJ2?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "sala_note",
    name: "Sala delle Note",
    headline: "Note che attraversano i secoli",
    description: "Tra libri antichi, quadri e un pianoforte d'epoca, questa sala è un rifugio di serenità. Luce soffusa, arredi armoniosi e atmosfere intime la rendono un luogo dove la bellezza, la cultura e la musica si incontrano senza tempo.",
    image: "/img/stanze/sala_note/note1.webp",
    gallery: ["/img/stanze/sala_note/note1.webp", "/img/stanze/sala_note/note2.webp"],
    kuulaEmbed: "https://kuula.co/share/hxlB9?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "sala_parole",
    name: "Sala delle Parole",
    headline: "Dove il silenzio racconta",
    description: "Tonalità cipria, arredi d'epoca e sedute morbide creano un angolo intimo e raccolto. Tra una macchina da cucire d'altri tempi e un leggio vissuto, qui la bellezza si esprime con lentezza, tra letture, conversazioni e ricordi che restano nel cuore.",
    image: "/img/stanze/sala_parole/parole1.webp",
    gallery: ["/img/stanze/sala_parole/parole1.webp", "/img/stanze/sala_parole/parole2.webp"],
    kuulaEmbed: "https://kuula.co/share/hxlSf?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "corte_accoglienza",
    name: "La Corte dell'Accoglienza",
    headline: "Benvenuti, qui inizia la vostra storia",
    description: "Cuore vivo della dimora, questa corte accoglie con calore e bellezza, invitando ogni ospite a sentirsi subito a casa.",
    image: "/img/stanze/corte_accoglienza/corte1.webp",
    gallery: ["/img/stanze/corte_accoglienza/corte1.webp", "/img/stanze/corte_accoglienza/corte2.webp"],
    kuulaEmbed: "https://kuula.co/share/hTYph?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "cappella_dimora",
    name: "La Cappella della Dimora",
    headline: "Un angolo di silenzio e luce",
    description: "Tra affreschi che narrano scene sacre e il marmo dell'altare che riflette la luce, la Cappella custodisce un'atmosfera di raccoglimento e devozione. Il pavimento, con lo stemma di famiglia, intreccia storia e spiritualità.",
    image: "/img/stanze/cappella_dimora/cappella1.webp",
    gallery: ["/img/stanze/cappella_dimora/cappella1.webp", "/img/stanze/cappella_dimora/cappella2.webp"],
    kuulaEmbed: "https://kuula.co/share/hxDps?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "sala_tempo",
    name: "Sala del Tempo",
    headline: "Dove il tempo si fa racconto",
    description: "Nel cuore della dimora, il salone con camino accoglie con calore e autenticità. Tra soffitti in legno, dipinti d'epoca e divani color pesca, ogni incontro diventa un momento prezioso, avvolto da luce e storie senza tempo.",
    image: "/img/stanze/sala_tempo/tempo1.webp",
    gallery: ["/img/stanze/sala_tempo/tempo1.webp", "/img/stanze/sala_tempo/tempo2.webp"],
    kuulaEmbed: "https://kuula.co/share/hxlyf?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "sala_ottocentesca",
    name: "Sala Ottocentesca",
    headline: "L'eleganza che attraversa i secoli",
    description: "Specchi dorati, arredi intagliati e un soffitto affrescato raccontano il fascino di un'epoca raffinata, dove ogni dettaglio è pensato per accogliere con grazia.",
    image: "/img/stanze/sala_ottocentesca/ottocento1.webp",
    gallery: ["/img/stanze/sala_ottocentesca/ottocento1.webp", "/img/stanze/sala_ottocentesca/ottocento2.webp"],
    kuulaEmbed: "https://kuula.co/share/hxlyj?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "sala_affreschi",
    name: "Sala degli Affreschi",
    headline: "Dove l'arte incontra l'accoglienza",
    description: "Avvolta da travi a vista e luce morbida, la Sala degli Affreschi accoglie con eleganza. Il dipinto murale regala una veduta poetica, tra arredi d'epoca e dettagli che invitano alla conversazione.",
    image: "/img/stanze/sala_affreschi/affreschi1.webp",
    gallery: ["/img/stanze/sala_affreschi/affreschi1.webp", "/img/stanze/sala_affreschi/affreschi2.webp"],
    kuulaEmbed: "https://kuula.co/share/hxlrs?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "sala_ricevimenti",
    name: "Sala Ricevimenti",
    headline: "L'arte dell'ospitalità, firmata Tenuta Leone",
    description: "Dall'ingresso alla Sala Ricevimenti, Tenuta Leone accoglie in un abbraccio di eleganza e armonia, dove ogni dettaglio diventa emozione e ogni momento un ricordo indimenticabile.",
    image: "/img/stanze/sala_ricevimenti/sala1.webp",
    gallery: ["/img/stanze/sala_ricevimenti/sala1.webp", "/img/stanze/sala_ricevimenti/sala2.webp", "/img/stanze/sala_ricevimenti/Ingresso1.webp", "/img/stanze/sala_ricevimenti/ingresso2.webp"],
    kuulaEmbed: "https://kuula.co/share/hxP4P?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  },
  {
    slug: "sala_esterni",
    name: "Gli Esterni",
    headline: "Un'oasi di charme tra natura e raffinatezza",
    description: "Gli spazi esterni di Tenuta Leone accolgono gli ospiti in un'atmosfera senza tempo, dove la bellezza della natura si intreccia con l'eleganza architettonica. Giardini curati, scorci suggestivi e ambienti pensati per stupire.",
    image: "/img/stanze/gli_esterni/esterno1.webp",
    gallery: ["/img/stanze/gli_esterni/esterno1.webp", "/img/stanze/gli_esterni/esterno2.webp", "/img/stanze/gli_esterni/esterno3.webp", "/img/stanze/gli_esterni/esterno4.webp"],
    kuulaEmbed: "https://kuula.co/share/hxP4y?logo=1&info=1&fs=1&vr=0&autorotate=0.81&thumbs=1&inst=it",
    has360: true
  }
];

export const services = [
  { id: "parcheggio", name: "Ampio Parcheggio", icon: "/img/icon/hotel_1_1.svg", image: "/img/servizi/parcheggio.jpg" },
  { id: "wifi", name: "Free Charge & WiFi", icon: "/img/icon/hotel_1_2.svg", image: "/img/servizi/wifi.jpg" },
  { id: "ludoteca", name: "Ludoteca", icon: "/img/icon/ludoteca.svg", image: "/img/servizi/ludoteca.jpg" },
  { id: "suite", name: "Suite Leone", icon: "/img/icon/hotel_1_4.svg", image: "/img/servizi/suite.jpg" },
  { id: "allestimenti", name: "Qualcosa di blu Wedding", icon: "/img/icon/hotel_1_5.svg", image: "/img/servizi/allestimenti.jpg" },
  { id: "bar", name: "Cafè Bar", icon: "/img/icon/hotel_1_6.svg", image: "/img/servizi/bar.jpg" },
  { id: "piscina", name: "Piscina Panoramica", icon: "/img/icon/hotel_1_7.svg", image: "/img/servizi/piscina.jpg" },
];

export const testimonials = [
  {
    id: 1,
    text: "Un luogo magico dove abbiamo vissuto il giorno più bello della nostra vita. Staff impeccabile e location da sogno.",
    author: "Marco & Giulia",
    event: "Matrimonio",
    rating: 5
  },
  {
    id: 2,
    text: "La comunione di nostra figlia è stata perfetta. Ogni dettaglio curato con amore e professionalità.",
    author: "Famiglia Esposito",
    event: "Comunione",
    rating: 5
  },
  {
    id: 3,
    text: "Eleganza e tradizione si fondono in modo perfetto. Un'esperienza indimenticabile per tutti i nostri ospiti.",
    author: "Anna & Luigi",
    event: "Matrimonio",
    rating: 5
  }
];

export const eventTypes = [
  { value: "matrimonio", label: "Matrimonio" },
  { value: "comunione", label: "Comunione" },
  { value: "battesimo", label: "Battesimo" },
  { value: "compleanno", label: "Party di Compleanno" },
  { value: "aziendale", label: "Evento Aziendale" },
];

export const guestRanges = [
  { value: "0-60", label: "0-60 persone" },
  { value: "60-90", label: "60-90 persone" },
  { value: "90-120", label: "90-120 persone" },
  { value: "120+", label: "Oltre 120 persone" },
];

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/tour", label: "La Dimora" },
  { path: "/piatti", label: "I Piatti" },
  { path: "/brigata", label: "La Brigata" },
  { path: "/pasticceria", label: "Pasticceria" },
  { path: "/contatti", label: "Contatti" },
];

// Piatti categorizzati
export const piatti = {
  primi: [
    "/img/piatti/p1.jpg", "/img/piatti/p2.jpg", "/img/piatti/p3.jpg", "/img/piatti/p4.jpg",
    "/img/piatti/p5.jpg", "/img/piatti/p6.jpg", "/img/piatti/p7.jpg", "/img/piatti/p8.jpg",
    "/img/piatti/p9.jpg", "/img/piatti/p10.jpg", "/img/piatti/p11.jpg", "/img/piatti/p12.jpg"
  ],
  secondi: [
    "/img/piatti/p13.jpg", "/img/piatti/p14.jpg", "/img/piatti/p15.jpg"
  ],
  dolci: [
    "/img/piatti/p16.jpg", "/img/piatti/p17.jpg", "/img/piatti/p18.jpg"
  ]
};

// Team Chef
export const brigata = [
  {
    name: "Salvatore Mosca",
    role: "Executive Chef",
    image: "/img/brigata/c1.jpg",
    description: "Guida la visione culinaria della tenuta con passione e creatività"
  },
  {
    name: "Nunzio Avventurato",
    role: "Sous Chef",
    image: "/img/brigata/c3.jpg",
    description: "Coordina tempi e qualità in ogni servizio"
  },
  {
    name: "Antonio Buonocore",
    role: "Chef",
    image: "/img/brigata/c2.jpg",
    description: "Presiede i reparti con precisione artigianale"
  }
];
