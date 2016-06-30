// Cache DOM elemFeelents
// Cache DapparentTM elements
const appLocation = document.querySelector('.js-location');
const appTemp = document.querySelector('.js-temp');
const appTempFeel = document.querySelector('.js-temp-feel');
const appTempC = document.querySelector('.js-tempC');
const appTempF = document.querySelector('.js-tempF');
const appTempUnit = document.querySelector('.js-temp-unit');
const appRain = document.querySelector('.js-rain');
const appSummary = document.querySelector('.js-summary');
const appWeatherIcon = document.querySelector('.js-weatherIcon');
const appBg = document.querySelector(".js-bg-image");
let weather;
let pos;

// NOTE: switched from openweathermap as free version doesnt work due to HTTPS issues
// http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=3946023bac4a4be22f711eeaa43667cc

// Now using forecase.io
// https://api.forecast.Fo/forecast/68ea1efc5c50ce10dc6410934a9d0983/37.8267,-122.423

const getWeather = new Promise((resolve, reject) => {
  // return ask + query + apikey
  const query = 'https://api.forecast.io/forecast/'
  const apikey = '68ea1efc5c50ce10dc6410934a9d0983';
  const testUrl = 'data/london.json';

  // First, get the local position
  getPosition.then((position) => {
    // Once position is retrieved, get local weather
    const forecastioUrl = `${query}${apikey}/${position.coords.latitude},${position.coords.longitude}`;
    console.log(position);
    // NOTE: ended up using zepto to access JSONP for cross-domain support
    const fetchWeatherData = new Promise((resolve) => {
      const config = {
        url: testUrl,
        dataType: "json",
        success: (data) => {
          resolve(data)
        },
      }
      $.ajax(config)
    })
    .catch((err) => console.error(err))

    fetchWeatherData
      .then((w) => {

        // cache results in object
        const weather = {
          rain: (w.currently.precipProbability) ? w.currently.precipProbability : 'no rain',
          tempC: `${convertTemp('fc', w.currently.temperature)}`,
          tempCFeel: `${convertTemp('fc', w.currently.apparentTemperature)}`,
          tempF: `${roundNum(w.currently.temperature)}`,
          tempFFeel: `${roundNum(w.currently.apparentTemperature)}`,
          clouds: w.currently.cloudCover,
          location: w.timezone,
          summary: w.currently.summary,
          icon: w.currently.icon,
        }
        resolve(weather);
      })
      .catch((err) => console.error(err))


    getWeather
      .then((result) => {

        pos = position.coords;
        weather = result; //cache results

        appLocation.textContent = weather.location;
        appTemp.textContent = weather.tempC;
        appTempFeel.textContent = `feels like ${weather.tempCFeel}`;
        appSummary.textContent = weather.summary;
        appRain.textContent = `Chance of rain: ${weather.rain}`;
        // appWeatherIcon.src = weatherIcons.lightRain.icon;
        appBg.style.backgroundImage = `url(${weatherIcons.lightRain.bg})`;
        skycons.set(document.querySelector(".js-weatherIcon"), weather.icon);
        skycons.play();

        // event listeners for radio button here
        appTempC.addEventListener('click', ((event) => (
          appTemp.textContent = weather.tempC,
          appTempFeel.textContent = `feels like ${weather.tempCFeel}`
        )))
        appTempF.addEventListener('click', ((event) => (
          appTemp.textContent = weather.tempF,
          appTempFeel.textContent = `feels like ${weather.tempFFeel}`
        )))

      })
  })
})
