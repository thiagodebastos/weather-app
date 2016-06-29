// return ask + query + apikey
const ask = 'http://api.openweathermap.org/data/2.5/weather?q='
const apikey = '&appid=3946023bac4a4be22f711eeaa43667cc';
const query = 'London'; // will later be replaced with location long/lat

const getWeather = function(){
  fetch('./data/london.json')
  .then((response) => response.json())
  .then((w) => {

    // Cache DOM elements for semantics
    // If there is no rain data, the API will not return a rain key
    const rain = (w.rain) ? w.rain : 'no rain'
    const temp = fromKelvin(w.main.temp)
    const clouds = w.clouds.all
    const location = w.name
    const country = w.sys.country

    appTemp.textContent = temp;
    appLocation.textContent = `${location}, ${country}`;
    appClouds.textContent = clouds;
    appRain.textContent = rain;

    })
  .catch((err) => console.log(`Error: ${err}`))
}
