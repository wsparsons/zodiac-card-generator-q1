const zodiac = require('./data')
const generateCard = require('./template')


// scrollIntoView variables and localStorage variable
const banner = document.querySelector('.chinese-banner')
const welcome = document.querySelector('#welcome')
const subtitle = document.querySelector('.subtitle')

// form input variables
const myYear= document.querySelector('#myYear')
const partnerYear= document.querySelector('#partnerYear')

// card variables
const animalCard = document.querySelector('#animalCard')
const cardContainer = document.querySelector('.card-container')


// event listener functions
// generate card when image is clicked
function clickAnimalCard(event){
  event.preventDefault()
  const clickAnimal = event.target.alt

  if (cardContainer.innerHTML.includes('animalCard')){
    cardContainer.innerHTML = ''
  }
  cardContainer.innerHTML = generateCard(clickAnimal)

  subtitle.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}



// generate card when enter year for mine
function generateMyAnimal(event){
  // if(event) event.preventDefault()

  let myBirthYear = myYear.value
  let myCalendarYear = myBirthYear % 12
  let myBirthPet = ''

  zodiac.filter(animal => {
    if (animal.number === myCalendarYear)
    myBirthPet = animal.animal
  })

  // if (cardContainer.innerHTML.includes('animalCard')){
  //   cardContainer.innerHTML = ''
  // }

  cardContainer.innerHTML += generateCard(myBirthPet)

  localStorage.setItem('zodiac-sign', JSON.stringify({pet: myBirthPet, year: myCalendarYear}))

  subtitle.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}


// generate card when enter year for partner
function generatePartnerAnimal(event){
  // event.preventDefault()

  let partnerBirthYear = partnerYear.value
  let partnerCalendarYear = partnerBirthYear % 12
  let partnerBirthPet = ''

  zodiac.filter(animal => {
    if (animal.number === partnerCalendarYear)
    partnerBirthPet = animal.animal
  })

  // if (cardContainer.innerHTML.includes('animalCard')){
  //   cardContainer.innerHTML = ''
  // }

  // generateMyAnimal()

  // if(myYear.value){
  //   generateMyAnimal()
  // }

  cardContainer.innerHTML += generateCard(partnerBirthPet)

  subtitle.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}


function generateBothAnimals(event){
  event.preventDefault()
  cardContainer.innerHTML = ''

  if(myYear.value){
    generateMyAnimal()
  }
  if(partnerYear.value){
    generatePartnerAnimal()
  }
}


//clears clickAnimalCard, myCard, and partnerCard
function clearCard(event){
  event.preventDefault()
  myYear.value = ''
  partnerYear.value = ''
  cardContainer.innerHTML = ''

  banner.scrollIntoView({
    behavior: 'smooth'
  })
  
  localStorage.removeItem('zodiac-sign')
}


module.exports = {
  clickAnimalCard,
  generateMyAnimal,
  generatePartnerAnimal,
  generateBothAnimals,
  clearCard
}
