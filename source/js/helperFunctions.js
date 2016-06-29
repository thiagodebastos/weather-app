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

function celsiusToFahrenheit(C){
  return Math.round((C * 9/5) + 32)
}

function fahrenheitToCelsius(F){
  return Math.round((F - 32) * 5/9)
}
// Round down a number and truncate to integer
// round(2.56445) => 3
function roundNum(num){
  return Math.trunc(Math.round(num))
}
