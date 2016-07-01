// Round down a number and truncate to integer
// round(2.56445) => 3
function roundNum(num){
  return Math.trunc(Math.round(num))
}

// Unit Conversion functions [k: kelvin, f: fahrenheit, c:celsius]
// convertTemp('fc', 50) => 10
function convertTemp(fromTo, temp){
  switch(fromTo) {
    case('kc') :
      return roundNum(temp - 273.15);
      break;
    case('kf') :
      return roundNum((temp * 9/5) - 459.67)
      break;
    case('cf'):
      return roundNum((temp * 9/5) + 32)
      break;
    case('fc'):
      return roundNum((temp - 32) * 5/9)
      break;
    default:
      console.error('[convertTemp]: Enter a legal value for "fromTo"');
      return '[Error: Check log for details]'
  }
}
