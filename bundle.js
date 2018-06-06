(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const zodiac = [{
    "animal": "Rat",
    "emoji": "🐀",
    "src": "./img/rat.webp",
    "trine": "1st",
    "direction": "North",
    "unicode_symbol": "子",
    "yin_yang": "Yang",
    "season": "Mid-Winter",
    "element": "Water",
    "years": "1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032",
    "lucky_colors": "gold, blue, green",
    "lucky_numbers": "2, 3, 6, 8",
    "personality_traits": "quick-witted, smart, charming, and persuasive",
    "best_match": "Rat, Dragon, Monkey",
    "average_match": "Snake, Rooster, Ox, Pig, Rabbit, Goat, Dog, Tiger",
    "no_match": "Horse"
  },
  {
    "animal": "Ox",
    "emoji": "🐂",
    "src": "./img/ox.webp",
    "trine": "2nd",
    "direction": "North",
    "unicode_symbol": "丑",
    "yin_yang": "Yin",
    "season": "Late Winter",
    "element": "Earth",
    "years": "1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033",
    "lucky_colors": "blue, red, purple ",
    "lucky_numbers": "8, 9, 3",
    "personality_traits": "patient, kind, stubborn, and conservative",
    "best_match": "Ox, Snake, Rooster",
    "average_match": "Dragon, Monkey, Rat, Dog, Tiger, Horse, Pig, Rabbit",
    "no_match": "Goat"
  },
  {
    "animal": "Tiger",
    "emoji": "🐅",
    "src": "./img/tiger.webp",
    "trine": "3rd",
    "direction": "East",
    "unicode_symbol": "寅",
    "yin_yang": "Yang",
    "season": "Early Spring",
    "element": "Wood",
    "years": "1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034",
    "lucky_colors": "grey, white, blue, purple, orange",
    "lucky_numbers": "1, 4, 7, 8",
    "personality_traits": "authoritative, emotional, courageous, and intense",
    "best_match": "Tiger, Dog, Horse",
    "average_match": "Pig, Rabbit, Goat, Snake, Rooster, Ox, Dragon, Rat",
    "no_match": "Monkey"
  },
  {
    "animal": "Rabbit",
    "emoji": "🐇",
    "src": "./img/rabbit.webp",
    "trine": "4th",
    "direction": "East",
    "unicode_symbol": "卯",
    "yin_yang": "Yin",
    "season": "Mid-Spring",
    "element": "Wood",
    "years": "1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035",
    "lucky_colors": "black, pink, purple, blue, red",
    "lucky_numbers": "3, 6, 9",
    "personality_traits": "popular, compassionate, and sincere",
    "best_match": "Rabbit, Pig, Goat",
    "average_match": "Dog, Tiger, Horse, Dragon, Monkey, Rat, Snake, Ox",
    "no_match": "Rooster"
  },
  {
    "animal": "Dragon",
    "emoji": "🐉",
    "src": "./img/dragon.webp",
    "trine": "1st",
    "direction": "East",
    "unicode_symbol": "辰",
    "yin_yang": "Yang",
    "season": "Late Spring",
    "element": "Earth",
    "years": "1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036",
    "lucky_colors": "gold, silver, yellow",
    "lucky_numbers": "1, 6, 7",
    "personality_traits": "energetic, fearless, warm-hearted, and charismatic",
    "best_match": "Dragon, Monkey, Rat",
    "average_match": "Snake, Rooster, Ox, Pig, Rabbit, Goat, Tiger, Horse",
    "no_match": "Dog"
  },
  {
    "animal": "Snake",
    "emoji": "🐍",
    "src": "./img/snake.webp",
    "trine": "2nd",
    "direction": "South",
    "unicode_symbol": "巳",
    "yin_yang": "Yin",
    "season": "Early Summer",
    "element": "Fire",
    "years": "1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037",
    "lucky_colors": "red, yellow, black",
    "lucky_numbers": "2, 8",
    "personality_traits": "charming, gregarious, introverted, generous, and smart",
    "best_match": "Snake, Rooster, Ox",
    "average_match": "Dragon, Monkey, Rat, Dog, Tiger, Horse, Rabbit, Goat",
    "no_match": "Pig"
  },
  {
    "animal": "Horse",
    "emoji": "🐎",
    "src": "./img/horse.webp",
    "trine": "3rd",
    "direction": "South",
    "unicode_symbol": "午",
    "yin_yang": "Yang",
    "season": "Mid-Summer",
    "element": "Fire",
    "years": "1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038",
    "lucky_colors": "gold, yellow, red, blue",
    "lucky_numbers": "1, 4, 5, 7, 9",
    "personality_traits": "energetic, independent, impatient, and enjoy traveling",
    "best_match": "Horse, Dog, Tiger",
    "average_match": "Pig, Rabbit, Goat, Snake, Rooster, Ox, Dragon, Monkey",
    "no_match": "Rat"
  },
  {
    "animal": "Goat",
    "emoji": "🐐",
    "src": "./img/goat.webp",
    "trine": "4th",
    "direction": "South",
    "unicode_symbol": "未",
    "yin_yang": "Yin",
    "season": "Late Summer",
    "element": "Earth",
    "years": "1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039",
    "lucky_colors": "green, red, purple",
    "lucky_numbers": "2, 3, 4, 7, 9",
    "personality_traits": "mild-mannered, shy, kind, and peace-loving",
    "best_match": "Goat, Pig, Rabbit",
    "average_match": "Dog, Tiger, Horse, Dragon, Monkey, Rat, Snake, Rooster",
    "no_match": "Ox"
  },
  {
    "animal": "Monkey",
    "emoji": "🐒",
    "src": "./img/monkey.webp",
    "trine": "1st",
    "direction": "West",
    "unicode_symbol": "申",
    "yin_yang": "Yang",
    "season": "Early Autumn",
    "element": "Metal",
    "years": "1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040",
    "lucky_colors": "white, gold, blue",
    "lucky_numbers": "3, 4, 7, 9",
    "personality_traits": "fun, energetic, and active",
    "best_match": "Monkey, Dragon, Rat",
    "average_match": "Snake, Rooster, Ox, Pig, Rabbit, Goat, Dog, Horse",
    "no_match": "Tiger"
  },
  {
    "animal": "Rooster",
    "emoji": "🐓",
    "src": "./img/rooster.webp",
    "trine": "2nd",
    "direction": "West",
    "unicode_symbol": "酉",
    "yin_yang": "Yin",
    "season": "Mid-Autumn",
    "element": "Metal",
    "years": "1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041",
    "lucky_colors": "gold, brown, yellow",
    "lucky_numbers": "5, 7, 8",
    "personality_traits": "independent, practical, hard-working, and observant",
    "best_match": "Rooster, Snake, Ox",
    "average_match": "Dragon, Monkey, Rat, Dog, Tiger, Horse, Pig, Goat",
    "no_match": "Rabbit"
  },
  {
    "animal": "Dog",
    "emoji": "🐕",
    "src": "./img/dog.webp",
    "trine": "3rd",
    "direction": "West",
    "unicode_symbol": "戌",
    "yin_yang": "Yang",
    "season": "Late Autumn",
    "element": "Earth",
    "years": "1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042",
    "lucky_colors": "green, red, purple",
    "lucky_numbers": "3, 4, 9",
    "personality_traits": "patient, diligent, generous, faithful, and kind",
    "best_match": "Dog, Tiger, Horse",
    "average_match": "Pig, Rabbit, Goat, Snake, Rooster, Ox, Monkey, Rat",
    "no_match": "Dragon"
  },
  {
    "animal": "Pig",
    "emoji": "🐖",
    "src": "./img/pig.webp",
    "trine": "4th",
    "direction": "North",
    "unicode_symbol": "亥",
    "yin_yang": "Yin",
    "season": "Early Winter",
    "element": "Water",
    "years": "1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043",
    "lucky_colors": "yellow",
    "lucky_numbers": "2, 5, 6, 8",
    "personality_traits": "",
    "best_match": "Pig, Rabbit, Goat",
    "average_match": "Dog, Tiger, Horse, Dragon, Monkey, Rat, Rooster, Ox",
    "no_match": "Snake"
  }
]

module.exports = zodiac

},{}],2:[function(require,module,exports){
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

},{"./data":1,"./signs":3}],3:[function(require,module,exports){
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

},{"./data":1,"./template":4}],4:[function(require,module,exports){
const zodiac = require('./data')

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


const generateCard = (birthpet) => {

  const zodiacData = zodiac.find(element => element.animal === birthpet)

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

},{"./data":1}]},{},[2]);
