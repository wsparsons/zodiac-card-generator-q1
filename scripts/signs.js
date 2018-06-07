const zodiac = require('./data')
const generateCard = require('./template')


// input variables
const banner = document.querySelector('.chinese-banner')
const welcome = document.querySelector('#welcome')
const birthYearInput= document.querySelector('.birthYearInput')
const subtitle = document.querySelector('.subtitle')

// output variables
const zodiacAnimalName = document.querySelector('#zodiacAnimalName')

// card variables
const animalCard = document.querySelector('#animalCard')
const cardContainer = document.querySelector('.card-container')



// event listener functions
// generate card when image is clicked
function clickAnimalCard(event){
  event.preventDefault()

  const clickAnimal = event.target.alt
  // zodiacAnimalName.innerHTML = `Zodiac Sign is: ${clickAnimal}`

  if (cardContainer.innerHTML.includes('animalCard')){
    cardContainer.innerHTML = ''
  }
  cardContainer.innerHTML += generateCard(clickAnimal)

  subtitle.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

// generate card when enter year
function generateAnimal(event){
  event.preventDefault()

  let birthYear = birthYearInput.value
  let calendarYear = birthYear % 12
  let birthpet = ''

  zodiac.filter(animal => {
    if (animal.number === calendarYear)
    birthpet = animal.animal
  })

  // zodiacAnimalName.innerHTML = `Zodiac Sign is: ${birthpet}`

  if (cardContainer.innerHTML.includes('animalCard')){
    cardContainer.innerHTML = ''
  }

  cardContainer.innerHTML += generateCard(birthpet)

  localStorage.setItem('zodiac-sign', JSON.stringify({pet: birthpet, year: birthYear}))

  subtitle.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

//clear card when click clear button
function clearCard(event){
  event.preventDefault()

  birthYearInput.value = ''
  // zodiacAnimalName.innerHTML = ''
  document.querySelector('.card-container').innerHTML = ''

  banner.scrollIntoView({
    behavior: 'smooth'
  })
  localStorage.removeItem('zodiac-sign')

}

module.exports = {
  clickAnimalCard,
  generateAnimal,
  clearCard
}
