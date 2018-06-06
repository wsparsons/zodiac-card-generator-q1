const zodiac = require('./data')
const generateCard = require('./template')

// form variables
const zodiacInputForm = document.querySelector('#zodiacInputForm')

// input variables
const zodiacSignValue = document.querySelector('#zodiacSignValue')
const birthYearInput = document.querySelector('#birthYearInput')

// output variables
const zodiacAnimalName = document.querySelector('#zodiacAnimalName')

// card variables
const animalCard = document.querySelector('#animalCard')
const image = document.querySelector('#img')
const title = document.querySelector('#title')
const yinYang = document.querySelector('#yinYang')
const season = document.querySelector('#season')
const element = document.querySelector('#element')
const years = document.querySelector('#years')
const colors = document.querySelector('#colors')
const numbers = document.querySelector('#numbers')
const traits = document.querySelector('#traits')
const bestMatch = document.querySelector('#bestMatch')
const averageMatch = document.querySelector('#averageMatch')
const noMatch = document.querySelector('#noMatch')

// event listener function

const clickAnimalCard = event => {
  event.preventDefault()
  const clickAnimal = event.target.alt
  generateCard(clickAnimal)

}

const generateAnimal = event => {
  event.preventDefault()

  const start = 1900
  let birthYear = birthYearInput.value
  let x = ((start - birthYear) % 12)
  let birthpet = ''

  if (x == 0){
    birthpet = zodiac[0].animal;
  }
  if (x == -1 || x == 11){
    birthpet = zodiac[1].animal;
  }
  if (x == -2 || x == 10){
    birthpet = zodiac[2].animal;
  }
  if (x == -3 || x == 9){
    birthpet = zodiac[3].animal;
  }
  if (x == -4 || x == 8){
    birthpet = zodiac[4].animal;
  }
  if (x == -5 || x == 7){
    birthpet = zodiac[5].animal;
  }
  if (x == -6 || x == 6){
    birthpet = zodiac[6].animal;
  }
  if (x == -7 || x == 5){
    birthpet = zodiac[7].animal;
  }
  if (x == -8 || x == 4){
    birthpet = zodiac[8].animal;
  }
  if (x == -9 || x == 3){
    birthpet = zodiac[9].animal;
  }
  if (x == -10 || x == 2){
    birthpet = zodiac[10].animal;
  }
  if (x == -11 || x == 1){
    birthpet = zodiac[11].animal;
  }

  zodiacAnimalName.innerHTML = `Your Zodiac Sign is: ${birthpet}`

  generateCard(birthpet)
}

const clearCard = event => {
  event.preventDefault()

  birthYearInput.value = ''
  zodiacAnimalName.innerHTML = ''
  animalCard.classList.add('d-none')
  document.querySelector('.chinese-banner').scrollIntoView({behavior: 'smooth'})
}

module.exports = {
  clickAnimalCard, generateAnimal, clearCard
}




// function zodiacAnimal (birthYearInput){
//   for (let i = 0; i < zodiac.length; i++){
//     for (let j = 0; j < zodiac[i].years.length; j++) {
//       if (zodiac[i].years[j] === birthYearInput) {
//         return zodiac[i].animal
//       }
//     }
//   }
// }
