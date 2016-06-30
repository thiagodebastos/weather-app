const weatherIcons = {
  lightRain: {
    icon: './img/weather-icons/light-rain.svg',
    bg: './img/weather-bg/light-rain.jpg',
  },
}

const weatherBgs = (() => {
  const bgLoc = './img/weather-bg'
  const bgs = {
    clearDay: `${bgLoc}/thisbg.jpg`,
    clearNight: `${bgLoc}/thisbg.jpg`,
    rain: `${bgLoc}/thisbg.jpg`,
    snow: `${bgLoc}/thisbg.jpg`,
    sleet: `${bgLoc}/thisbg.jpg`,
    wind: `${bgLoc}/thisbg.jpg`,
    fog: `${bgLoc}/thisbg.jpg`,
    cloudy: `${bgLoc}/thisbg.jpg`,
    partlyCloudyDay: `${bgLoc}/thisbg.jpg`,
    partlyCloudyNight: `${bgLoc}/thisbg.jpg`,
  }
  return bgs;
})()

const skycons = new Skycons({"color":"white"});
