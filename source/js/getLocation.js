// Request and return location coords
const getLocation = function () {
  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  }
  function success(pos) {
    const crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    appLocation.textContent += `${crd.latitude}, ${crd.longitude}`;
    return crd;
  }
  function error(err){
    console.log(`ERROR ${err.code}: ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}
