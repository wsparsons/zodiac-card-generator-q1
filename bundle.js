(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const zodiac = [{
    "animal": "Rat",
    "number": 4,
    "emoji": "🐀",
    "src": "./img/rat.jpg",
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
    "number": 5,
    "emoji": "🐂",
    "src": "./img/ox.jpg",
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
    "number": 6,
    "emoji": "🐅",
    "src": "./img/tiger.jpg",
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
    "number": 7,
    "emoji": "🐇",
    "src": "./img/rabbit.jpg",
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
    "number": 8,
    "emoji": "🐉",
    "src": "./img/dragon.jpg",
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
    "number": 9,
    "emoji": "🐍",
    "src": "./img/snake.jpg",
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
    "number": 10,
    "emoji": "🐎",
    "src": "./img/horse.jpg",
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
    "number": 11,
    "emoji": "🐐",
    "src": "./img/goat.jpg",
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
    "number": 0,
    "emoji": "🐒",
    "src": "./img/monkey.jpg",
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
    "number": 1,
    "emoji": "🐓",
    "src": "./img/rooster.jpg",
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
    "number": 2,
    "emoji": "🐕",
    "src": "./img/dog.jpg",
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
    "number": 3,
    "emoji": "🐖",
    "src": "./img/pig.jpg",
    "trine": "4th",
    "direction": "North",
    "unicode_symbol": "亥",
    "yin_yang": "Yin",
    "season": "Early Winter",
    "element": "Water",
    "years": "1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043",
    "lucky_colors": "yellow",
    "lucky_numbers": "2, 5, 6, 8",
    "personality_traits": "loving, tolerant, honest, and appreciative of luxury",
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

},{"./data":1,"./signs":3}],3:[function(require,module,exports){
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


// generate card when image is clicked
function clickAnimalCard(event){
  event.preventDefault()
  const clickAnimal = event.target.alt

  // if (cardContainer.innerHTML.includes('animalCard')){
    cardContainer.innerHTML = ''
  // }
  cardContainer.innerHTML += generateCard(clickAnimal)

  subtitle.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}



// generate card when enter year for mine and saves animal to local storage
function generateMyAnimal(){

  let myBirthYear = myYear.value
  let myCalendarYear = myBirthYear % 12
  let myBirthPet = ''

  zodiac.filter(animal => {
    if (animal.number === myCalendarYear)
    myBirthPet = animal.animal
  })

  cardContainer.innerHTML += generateCard(myBirthPet)

  localStorage.setItem('zodiac-sign', JSON.stringify({pet: myBirthPet, year: myCalendarYear}))

  subtitle.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

// generate card when enter year for partner
function generatePartnerAnimal(){

  let partnerBirthYear = partnerYear.value
  let partnerCalendarYear = partnerBirthYear % 12
  let partnerBirthPet = ''

  zodiac.filter(animal => {
    if (animal.number === partnerCalendarYear)
    partnerBirthPet = animal.animal
  })

  cardContainer.innerHTML += generateCard(partnerBirthPet)

  subtitle.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

// renders both myAnimal and partnerAnimal when form is submitted
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


//clears clickAnimalCard, myCard, partnerCard, and removes object from local storage
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

},{"./data":1,"./template":4}],4:[function(require,module,exports){
const zodiac = require('./data')

const generateCard = birthpet => {

  const zodiacData = zodiac.find(element => element.animal === birthpet)

  return `
  <div class = "col-6 col-lg-5">
    <div class="card rounded" id="animalCard">
      <h2 class ="text-center">Zodiac Sign: ${zodiacData.animal}</h2>
      <img class="card-img-top" src="${zodiacData.src}" alt="${zodiacData.name}">
      <div>
        <h5 class="card-title"><span class="font-weight-bold">Zodiac Sign: </span>${zodiacData.animal}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span class="font-weight-bold">Ying-Yang Sign: </span>${zodiacData.yin_yang}</li>
        <li class="list-group-item"><span class="font-weight-bold">Season: </span>${zodiacData.season}</li>
        <li class="list-group-item"><span class="font-weight-bold">Element: </span>${zodiacData.element}</li>
        <li class="list-group-item"><span class="font-weight-bold">Years: </span>${zodiacData.years}</li>
        <li class="list-group-item"><span class="font-weight-bold">Lucky Colors: </span>${zodiacData.lucky_colors}</li>
        <li class="list-group-item"><span class="font-weight-bold">Lucky Numbers: </span>${zodiacData.lucky_numbers}</li>
        <li class="list-group-item"><span class="font-weight-bold">Personality Traits: </span>${zodiacData.personality_traits}</li>
        <li class="list-group-item"><span class="font-weight-bold">Best Match: </span>${zodiacData.best_match}</li>
        <li class="list-group-item"><span class="font-weight-bold">Average Match: </span>${zodiacData.average_match}</li>
        <li class="list-group-item"><span class="font-weight-bold">No Match: </span>${zodiacData.no_match}</li>
      </ul>
    </div>
  </div>
  `
}



module.exports = generateCard

},{"./data":1}]},{},[2]);
