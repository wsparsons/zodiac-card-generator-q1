const zodiac = require('./data')
const generate = require('./signs')
const clear = require('./signs')
// const zodiacAnimalTemplate = require('./template')


// forms variables
const zodiacInputForm = document.querySelector('#zodiacInputForm')



// event listners

zodiacInputForm.addEventListener('submit', generate.generateCard)
zodiacInputForm.addEventListener('reset', clear.clearCard)
