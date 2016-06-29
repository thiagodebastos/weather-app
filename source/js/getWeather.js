// return ask + query + apikey
const ask = 'http://api.openweathermap.org/data/2.5/weather?q='
const apikey = '&appid=3946023bac4a4be22f711eeaa43667cc';
const query = 'London'; // will later be replaced with location long/lat

const getWeather = (() => {
  function promisedWeather(url){
    return new Promise((resolve, reject) => {
      fetch(url)
      .then((response) => response.json())
      .then((w) => {

        // cache results in object
        const weather = {
          rain: (w.rain) ? w.rain : 'no rain',
          tempC: kelvinToCelsius(w.main.temp),
          tempF: kelvinToFahrenheit(w.main.temp),
          clouds: w.clouds.all,
          location: w.name,
          country: w.sys.country,
        }
        resolve(weather);
        })
    })
  }
  return promisedWeather;
})()
