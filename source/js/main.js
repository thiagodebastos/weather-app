// Cache DOM elements
const appLocation = document.querySelector('.js-location');
const appTemp = document.querySelector('.js-temp');
const appTempC = document.querySelector('.js-tempC');
const appTempF = document.querySelector('.js-tempF');
const appRain = document.querySelector('.js-rain');
const appClouds = document.querySelector('.js-clouds');


const allPromises = [getLocation, getWeather];

Promise.all(allPromises)
  .then((results) => {
    const location = results[0]()
    const weather = results[1]()
    console.log(location, weather)
  })

// ES6 fetch API returns a promise

const temp = appTemp.innerText;
appTempC.addEventListener('click', ((event) =>
(appTemp.textContent = roundNum((appTemp.innerText - 32) / 1.8))))

appTempF.addEventListener('click', ((event) =>
(appTemp.textContent = roundNum(appTemp.innerText * 9/5 +32))))
