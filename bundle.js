(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const zodiac = [{
    "animal": "Rat",
    "yin_yang": "Yang",
    "direction": "North",
    "season": "Mid-Winter",
    "element": "Water",
    "trine": "1st",
    "years": [
      1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032
    ],
    "unicode_symbol": "子",
    "emoji": "🐀",
    "traits": ['quick-witted', 'smart', 'charming',  'persuasive']
  },
  {
    "animal": "Ox",
    "yin_yang": "Yin",
    "direction": "North",
    "season": "Late Winter",
    "element": "Earth",
    "trine": "2nd",
    "years": [
      1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033
    ],
    "unicode_symbol": "丑",
    "emoji": "🐂",
  },
  {
    "animal": "Tiger",
    "yin_yang": "Yang",
    "direction": "East",
    "season": "Early Spring",
    "element": "Wood",
    "trine": "3rd",
    "years": [
      1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034
    ],
    "unicode_symbol": "寅",
    "emoji": "🐅",
  },
  {
    "animal": "Rabbit",
    "yin_yang": "Yin",
    "direction": "East",
    "season": "Mid-Spring",
    "element": "Wood",
    "trine": "4th",
    "years": [
      1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035
    ],
    "unicode_symbol": "卯",
    "emoji": "🐇",
  },
  {
    "animal": "Dragon",
    "yin_yang": "Yang",
    "direction": "East",
    "season": "Late Spring",
    "element": "Earth",
    "trine": "1st",
    "years": [
      1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036
    ],
    "unicode_symbol": "辰",
    "emoji": "🐉",
  },
  {
    "animal": "Snake",
    "yin_yang": "Yin",
    "direction": "South",
    "season": "Early Summer",
    "element": "Fire",
    "trine": "2nd",
    "years": [
      1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037
    ],
    "unicode_symbol": "巳",
    "emoji": "🐍",
  },
  {
    "animal": "Horse",
    "yin_yang": "Yang",
    "direction": "South",
    "season": "Mid-Summer",
    "element": "Fire",
    "trine": "3rd",
    "years": [
      1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038
    ],
    "unicode_symbol": "午",
    "emoji": "🐎",
  },
  {
    "animal": "Goat",
    "yin_yang": "Yin",
    "direction": "South",
    "season": "Late Summer",
    "element": "Earth",
    "trine": "4th",
    "years": [
      1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039
    ],
    "unicode_symbol": "未",
    "emoji": "🐐",
  },
  {
    "animal": "Monkey",
    "yin_yang": "Yang",
    "direction": "West",
    "season": "Early Autumn",
    "element": "Metal",
    "trine": "1st",
    "years": [
      1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040
    ],
    "unicode_symbol": "申",
    "emoji": "🐒",
  },
  {
    "animal": "Rooster",
    "yin_yang": "Yin",
    "direction": "West",
    "season": "Mid-Autumn",
    "element": "Metal",
    "trine": "2nd",
    "years": [
      1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041
    ],
    "unicode_symbol": "酉",
    "emoji": "🐓",
  },
  {
    "animal": "Dog",
    "yin_yang": "Yang",
    "direction": "West",
    "season": "Late Autumn",
    "element": "Earth",
    "trine": "3rd",
    "years": [
      1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042
    ],
    "unicode_symbol": "戌",
    "emoji": "🐕",
  },
  {
    "animal": "Pig",
    "yin_yang": "Yin",
    "direction": "North",
    "season": "Early Winter",
    "element": "Water",
    "trine": "4th",
    "years": [
      1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043
    ],
    "unicode_symbol": "亥",
    "emoji": "🐖",
  }
]

module.exports = zodiac

},{}],2:[function(require,module,exports){
const zodiac = require('./data')
const generateSign = require('./signs')


// forms variables
const zodiacInputForm = document.querySelector('#zodiacInputForm')



// event listners

zodiacInputForm.addEventListener('submit', generateSign)

},{"./data":1,"./signs":3}],3:[function(require,module,exports){
const zodiac = require('./data')

// form variables
const zodiacInputForm = document.querySelector('#zodiacInputForm')

// input variables
const zodiacSignValue = document.querySelector('#zodiacSignValue')
const birthYearInput = document.querySelector('#birthYearInput')

// output variables
const zodiacAnimalName = document.querySelector('#zodiacAnimalName')


// event listner function 
const generateSign = (event) => {

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
    birthpet = zodiac[50].animal;
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
}

module.exports = generateSign




// function zodiacAnimal (birthYearInput){
//   for (let i = 0; i < zodiac.length; i++){
//     for (let j = 0; j < zodiac[i].years.length; j++) {
//       if (zodiac[i].years[j] === birthYearInput) {
//         return zodiac[i].animal
//       }
//     }
//   }
// }

},{"./data":1}]},{},[2]);
