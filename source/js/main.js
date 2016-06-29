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
let pos;



// const loca = new Promise((resolve) => setTimeout(() => {
//   (resolve('location'))
// }, 2000))
// const weath = new Promise((resolve) => setTimeout(() => {
//   (resolve('weather'))
// }, 10))
//
// loca.then((val) => weath.then((valb) => console.log(`${val} based on ${valb}`)))
