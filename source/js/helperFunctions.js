// Open Weather API returns Kelvin by default so convert to C
function fromKelvin(t) {
  return Math.round(t - 273.15)
}

function kelvinToCelsius(K) {
  return Math.round(K - 273.15)
}

function kelvinToFahrenheit(K) {
  return Math.round((K * 9/5) - 459.67)
}

// Round down a number and truncate to integer
// round(2.56445) => 3
function roundNum(num){
  return Math.trunc(Math.round(num))
}
