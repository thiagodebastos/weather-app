// Request and return location coords
const getPosition = (() => {
  function promisedPosition(settings) {

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(

        // On Success
        (position) => {console.log("Fetching location"); resolve(position)},
        // On Error
        (error) => reject(error),
        settings
      )
    })
  }
  return promisedPosition;
})()
