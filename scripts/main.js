const zodiac = require('./data')
const generate = require('./signs')


const figureImgs = Array.from(document.querySelectorAll('.figure-img'))
const zodiacInputForm = document.querySelector('#zodiacInputForm')


// event listners

zodiacInputForm.addEventListener('submit', generate.generateAnimal)
zodiacInputForm.addEventListener('reset', generate.clearCard)
figureImgs.forEach(animal => {
  animal.addEventListener('click', generate.clickAnimalCard)
})
