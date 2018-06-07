const zodiac = require('./data')

const generateCard = birthpet => {

  const zodiacData = zodiac.find(element => element.animal === birthpet)

  return `
  <div class = "col-8 col-lg-5">
    <h2 class ="text-center">Zodiac Sign is: ${zodiacData.animal}</h2>
    <div class="card border border-secondary rounded" id="animalCard">
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
