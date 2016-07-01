const weatherBgs = (() => {
  const bgLoc = './img/weather-bg'
  const bgs = {
    'clear-day': `${bgLoc}/clear-day.jpeg`,
    'clear-night': `${bgLoc}/clear-night.jpeg`,
    rain: `${bgLoc}/rain.jpeg`,
    snow: `${bgLoc}/snow.jpeg`,
    sleet: `${bgLoc}/sleet.jpeg`,
    wind: `${bgLoc}/wind.jpeg`,
    fog: `${bgLoc}/fog.jpeg`,
    cloudy: `${bgLoc}/cloudy.jpeg`,
    'partly-cloudy-day': `${bgLoc}/partly-cloudy-day.jpeg`,
    'partly-cloudy-night': `${bgLoc}/partly-cloudy-night.jpeg`,
  }
  return bgs;
})()

const skycons = new Skycons({"color":"white"});
