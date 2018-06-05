const zodiac = require('./data')

const birthyearInput = document.getElementById('birthYearInput').value

function zodiacAnimal(birthyearInput){
  for (let i = 0; i < zodiac.length; i++){
    for (let j = 0; j < zodiac[i].years.length; j++) {
      if (zodiac[i].years[j] === birthyearInput) {
        return zodiac[i].animal
      }
    }
  }
}

function signs() {
  const start = 1900
  let birthyear = document.getElementById('birthYearInput').value
  let x = ((start – birthyear) % 12)
  let birthpet = ''

  if (x == 0){
    birthpet = "Rat";
  }
  if (x == -1 || x == 11){
    birthpet = "Ox";
  }
  if (x == -2 || x == 10){
    birthpet = "Tiger";
  }
  if (x == -3 || x == 9){
    birthpet = "Rabbit";
  }
  if (x == -4 || x == 8){
    birthpet = "Dragon";
  }
  if (x == -5 || x == 7){
    birthpet = "Snake";
  }
  if (x == -6 || x == 6){
    birthpet = "Horse";
  }
  if (x == -7 || x == 5){
    birthpet = "Goat";
  }
  if (x == -8 || x == 4){
    birthpet = "Monkey";
  }
  if (x == -9 || x == 3){
    birthpet = "Rooster";
  }
  if (x == -10 || x == 2){
    birthpet = "Dog";
  }
  if (x == -11 || x == 1){
    birthpet = "Pig";
  }

  document.getElementById('zodiacSign').value = birthpet
}



module.exports = {
  zodiacSign, signs
