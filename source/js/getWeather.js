// return ask + query + apikey
const query = 'https://api.forecast.io/forecast/'
const apikey = '68ea1efc5c50ce10dc6410934a9d0983';

// NOTE: switched from openweathermap as free version doesnt work due to HTTPS issues
// http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=3946023bac4a4be22f711eeaa43667cc

// Now using forecase.io
// https://api.forecast.io/forecast/68ea1efc5c50ce10dc6410934a9d0983/37.8267,-122.423

const getWeather = new Promise((resolve, reject) => {
  // First, get the local position
  getPosition.then((position) => {
    // Once position is retrieved, get local weather
    // TODO: add possibility of using default data
  const url = 'data/london.json';
  // const url = `${query}${apikey}/${position.coords.latitude},${position.coords.longitude}`;
  fetch(url)
  .then((response) => response.json())
  .then((w) => {

    // cache results in object
    const weather = {
      rain: (w.currently.precipProbability) ? w.currently.precipProbability : 'no rain',
      tempC: `${fahrenheitToCelsius(w.currently.temperature)} degrees`,
      tempF: `${w.currently.temperature} degrees`,
      clouds: w.currently.cloudCover,
      location: w.timezone,
    }
    resolve(weather);
    })
    // possibly break this out into 'fillweather'
    getWeather
      .then((result) => {
        pos = position.coords;
        console.log(pos.latitude, pos.longitude);
        weather = result; //cache results
        appTemp.textContent = `${weather.tempC}`;
        appLocation.textContent = `Timezone: ${weather.location}`;
        appClouds.textContent = `Cloud cover: ${weather.clouds}`;
        appRain.textContent = `Chance of rain: ${weather.rain}`;

        // event listeners for radio buttom
        appTempC.addEventListener('click', ((event) =>
        (appTemp.textContent = weather.tempC)))
        appTempF.addEventListener('click', ((event) =>
        (appTemp.textContent = weather.tempF)))
    })
  })
})
