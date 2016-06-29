// return ask + query + apikey
const query = 'http://api.openweathermap.org/data/2.5/weather?'
const apikey = '3946023bac4a4be22f711eeaa43667cc';

http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=3946023bac4a4be22f711eeaa43667cc
// const getWeather = (() => {
//   function promisedWeather(url){
    const getWeather = new Promise((resolve, reject) => {
      // First, get the local position
      getPosition.then((position) => {
        // Once position is retrieved, get local weather
        // TODO: add possibility of using default data
      const url = `${query}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apikey}`;
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
        // possibly break this out into 'fillweather'
        getWeather
          .then((result) => {
            pos = position.coords;
            console.log(pos.latitude, pos.longitude);
            weather = result; //cache results
            appTemp.textContent = weather.tempC;
            appLocation.textContent = `${weather.location}, ${weather.country}`;
            appClouds.textContent = weather.clouds;
            appRain.textContent = weather.rain;

            // event listeners for radio buttom
            appTempC.addEventListener('click', ((event) =>
            (appTemp.textContent = weather.tempC)))
            appTempF.addEventListener('click', ((event) =>
            (appTemp.textContent = weather.tempF)))
        })
      })
    })
  // }
//   return promisedWeather;
// })()
