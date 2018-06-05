const zodiac = require('./data')
const generateSign = require('./signs')


// forms variables
const zodiacInputForm = document.querySelector('#zodiacInputForm')



// event listners

zodiacInputForm.addEventListener('submit', generateSign)
