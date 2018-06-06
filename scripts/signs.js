const zodiac = require('./data')

// form variables
const zodiacInputForm = document.querySelector('#zodiacInputForm')

// input variables
const zodiacSignValue = document.querySelector('#zodiacSignValue')
const birthYearInput = document.querySelector('#birthYearInput')

// output variables
const zodiacAnimalName = document.querySelector('#zodiacAnimalName')

// card variables
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
const generateCard = (event) => {

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

  const zodiacData = zodiac.find(element => element.animal === birthpet)

  document.querySelector('#animalCard').classList.remove('d-none')

  image.setAttribute('src', zodiacData.src )
  image.setAttribute('alt', zodiacData.animal)
  title.innerText = zodiacData.animal
  yinYang.innerText = zodiacData.yin_yang
  season.innerText = zodiacData.season
  element.innerText = zodiacData.element
  years.innerText = zodiacData.years
  colors.innerText = zodiacData.lucky_colors
  numbers.innerText = zodiacData.lucky_numbers
  traits.innerText = zodiacData.personality_traits
  bestMatch.innerText = zodiacData.best_match
  averageMatch.innerText = zodiacData.average_match
  noMatch.innerText = zodiacData.no_match
}

const clearCard = event => {
  event.preventDefault()

  zodiacAnimalName.innerHTML = ''
  document.querySelector('#animalCard').classList.add('d-none')
}

module.exports = {
  generateCard, clearCard
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
