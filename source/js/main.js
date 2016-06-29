const ask = 'http://api.openweathermap.org/data/2.5/weather?q='
const apikey = '&appid=3946023bac4a4be22f711eeaa43667cc';
const query = 'London';
// return ask + query + apikey

function kelvToCels(k) {
  return `${Math.round(k - 273.15)}C`
}

const appLocation = document.querySelector('.js-location');
const appTemp = document.querySelector('.js-temp');
const appRain = document.querySelector('.js-rain');
const appClouds = document.querySelector('.js-clouds');
let test;
fetch('./data/london.json', {method: 'get'})
.then((response) => response.json())
.then((w) => {

  const rain = (w.rain) ? w.rain : 'no rain'
  const temp = w.main.temp
  const clouds = w.clouds.all
  const location = w.name

  appTemp.textContent = kelvToCels(temp);
  appLocation.textContent = location;
  appClouds.textContent = clouds;
  appRain.textContent = rain;

  })
.catch((err) => console.log(`Error: ${err}`))
