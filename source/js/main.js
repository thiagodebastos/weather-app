// Cache DOM elements
const appLocation = document.querySelector('.js-location');
const appTemp = document.querySelector('.js-temp');
const appTempC = document.querySelector('.js-tempC');
const appTempF = document.querySelector('.js-tempF');
const appRain = document.querySelector('.js-rain');
const appClouds = document.querySelector('.js-clouds');


// const allPromises = [getPosition(), getWeather('./data/london.json')];
//
// Promise.all(allPromises)
//   .then((results) => {
//     const location = results[0]
//     const weather1 = results
//     console.log(location, weather1)
//   })


let weather;
let loc;

getPosition({enableHighAccuracy: false})
  .then((position) => {
    loc = position;
    appLocation.textContent += `${position.coords.latitude}, ${position.coords.longitude}`;

})
getWeather('./data/london.json')
  .then((result) => {
    console.log("I'm getting the weather immediately!");
    weather = result; //cache results
    appTemp.textContent = weather.tempC;
    appLocation.textContent = `${weather.location}, ${weather.country}`;
    appClouds.textContent = weather.clouds;
    appRain.textContent = weather.rain;  console.log(weather);

    // event listeners for radio buttom
    appTempC.addEventListener('click', ((event) =>
    (appTemp.textContent = weather.tempC)))
    appTempF.addEventListener('click', ((event) =>
    (appTemp.textContent = weather.tempF)))
    console.log(result);
})
