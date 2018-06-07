const zodiac = require('./data')
const generate = require('./signs')


const figureImgs = Array.from(document.querySelectorAll('.figure-img'))
const myForm = document.querySelector('#myForm')
const partnerForm = document.querySelector('#partnerForm')
const myYear= document.querySelector('#myYear')
const partnerYear= document.querySelector('#partnerYear')



// event listners


myForm.addEventListener('submit', generate.generateBothAnimals)
partnerForm.addEventListener('submit', generate.generateBothAnimals)
myForm.addEventListener('reset', generate.clearCard)


figureImgs.forEach(animal => {
  animal.addEventListener('click', generate.clickAnimalCard)
})

// adds zodiac sign to local storage
const zodiacInfo = JSON.parse(localStorage.getItem('zodiac-sign'))

if(zodiacInfo){
  document.querySelector('#welcome').textContent = `Welcome Back, ${zodiacInfo.pet}!`
}
