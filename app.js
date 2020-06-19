const weather = new Weather()
document.addEventListener('DOMContentLoaded', () => {
  function error() {
    
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition,error,{enableHighAccuracy:true});
    } else {
      console.log('Geolocation is not supported by this browser');
    }
  }
  
  function showPosition(position) {
    const lat = position.coords.latitude ;
    const long = position.coords.longitude ;
    weather.apiByGeo(lat, long).
      then(data => {
        console.log(data)
      })
  }
  getLocation()
})