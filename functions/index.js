const functions = require('firebase-functions')

absurdeces = [
  '¿Una boina es una fundamental?',
  '¿La porcelana sale de las porceovejas?',
  'Si Stallone ficha a Bambi... ¿rodará Rambi?',
  '¿El cocinero de Asterix y Obélix era Thérmomix?',
  '¿Por qué existe la mayonesa pero no la febreronesa?',
  'Si te da vergüenza pedir un café... ¿Lo pides cortado?',
  '¿Por qué existen las chocolatinas pero no las chocosuecas?',
  '¿Los Beatles se separaron porque Paul era Movistar y Yoko, Ono?',
  '¡El grupo sanguíneo de las personas que comen mucho es el A-Peritivo?',
  'Si encuentro unos trapos flotando en el Mediterráneo... ¿es tela marinera?',
  'Si un felino le dice a otro: "Eres tonto"... ¿el otro le contesta: "Pú más"?',
  'Es normal equivocarse usando un taladro, porque quien tiene broca... se equivoca.',
  'Es una pena que los adivinos no puedan tener hijos porque tienen las bolas de cristal.'
]

exports.Random = functions.https.onRequest((request, response) => {
 response.status(200).json({
   text: absurdeces[Math.floor(Math.random() * absurdeces.length)]
 })
})
