const zodiac = require('./data')
const generate = require('./signs')


const figureImgs = Array.from(document.querySelectorAll('.figure-img'))
const zodiacInputForm1 = document.querySelector('#zodiacInputForm1')
const zodiacInputForm2 = document.querySelector('#zodiacInputForm2')



// event listners

zodiacInputForm1.addEventListener('submit', generate.generateAnimal)
zodiacInputForm1.addEventListener('reset', generate.clearCard)

// zodiacInputForm2.addEventListener('submit', generate.generateAnimal2)
// zodiacInputForm2.addEventListener('reset', generate.clearCard2)

figureImgs.forEach(animal => {
  animal.addEventListener('click', generate.clickAnimalCard)
})

// adds zodiac sign to local storage
const zodiacInfo = JSON.parse(localStorage.getItem('zodiac-sign'))

if(zodiacInfo){
  document.querySelector('#welcome').textContent = `Welcome Back, ${zodiacInfo.pet}!`
}
