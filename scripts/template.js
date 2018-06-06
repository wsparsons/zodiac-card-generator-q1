const zodiac = require('./data')

// input variables
const birthYearInput = document.querySelector('#birthYearInput')

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


const generateCard = pet => {

  const zodiacData = zodiac.find(element => element.animal === pet)

  animalCard.classList.remove('d-none')

  image.setAttribute('src', zodiacData.src)
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

  birthYearInput.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

// const zodiacAnimalTemplate = (event) => {
//   event.preventDefault()
//
//   for (let i = 0; i < zodiac.length; i++){
//       if (zodiac[i].animal === animal) {
//       return `
//       <div class="card border border-secondary rounded" style="width: 30rem">
//         <img class="card-img-top" src="./img/rat.webp" alt="${zodiac[i].animal}">
//         <div class="card-body">
//           <h5 class="card-title">${zodiac[i].animal}</h5>
//           <p class="card-text">Some text about the zodiac animal</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">Ying Yang Sign:</span> ${zodiac[i].yin_yang}</li>
//           <li class="list-group-item">Season:</span> ${zodiac[i].season}</li>
//           <li class="list-group-item">Element:</span> ${zodiac[i].element}</li>
//           <li class="list-group-item">Years:</span> ${zodiac[i].years}</li>
//           <li class="list-group-item">Lucky Colors:</span> ${zodiac[i].lucky_color}</li>
//         </ul>
//       </div>
//       `
//   }

module.exports = generateCard
