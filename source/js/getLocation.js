const getPosition =  new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    // On Success
    (position) => {resolve(position)},
    // On Error
    (error) => reject(error)
  )
})
