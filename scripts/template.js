const zodiac = require('./data')

const document.querySelector("#animalCard")

const zodiacAnimalTemplate = (event) => {
  event.preventDefault()

  for (let i = 0; i < zodiac.length; i++){
      if (zodiac[i].animal === animal) {
      return `
      <div class="card border border-secondary rounded" style="width: 30rem">
        <img class="card-img-top" src="./img/rat.webp" alt="${zodiac[i].animal}">
        <div class="card-body">
          <h5 class="card-title">${zodiac[i].animal}</h5>
          <p class="card-text">Some text about the zodiac animal</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Ying Yang Sign:</span> ${zodiac[i].yin_yang}</li>
          <li class="list-group-item">Season:</span> ${zodiac[i].season}</li>
          <li class="list-group-item">Element:</span> ${zodiac[i].element}</li>
          <li class="list-group-item">Years:</span> ${zodiac[i].years}</li>
          <li class="list-group-item">Lucky Colors:</span> ${zodiac[i].lucky_color}</li>
        </ul>
      </div>
      `
  }

module.exports = zodiacAnimalTemplate
