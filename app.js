const weather = new Weather()
const ui = new Ui();
const button = document.querySelector('.units');

document.addEventListener('DOMContentLoaded', () => {
  function error() {
    console.log(new Error('some issue'));
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition,error,{enableHighAccuracy:true});
    } else {
      console.log('Geolocation is not supported by this browser');
    }
  }
  
  button.innerText = 'F';
  function showPosition(position) {
    const lat = position.coords.latitude ;
    const long = position.coords.longitude ;
    weather.apiByGeo(lat, long).
      then(data => {
        ui.draw(data)
      })
    weather.apiForecast(lat, long).
      then(data=> ui.drawForecast(data))
  }
  getLocation()
  
})

button.addEventListener('click', changeUnits);
function changeUnits() {
  if (button.innerText == 'F') {
    
    function error() {
      console.log(new Error('some issue'));
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
      weather.apiByGeo(lat, long, 'imperial').
        then(data => {
          ui.draw(data,'f')
        })
      
    }
    getLocation();
    button.innerText = 'C'
  }
  else {
    function error() {
      console.log(new Error('some issue'));
    }
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,error,{enableHighAccuracy:true});
      } else {
        console.log('Geolocation is not supported by this browser');
      }
    }
    
    button.innerText = 'C'
    function showPosition(position) {
      const lat = position.coords.latitude ;
      const long = position.coords.longitude ;
      weather.apiByGeo(lat, long, 'metric').
        then(data => {
          ui.draw(data)
        })
      
    }
    getLocation();
    button.innerText = 'F';
  }
}
var slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 'page',
  mode: 'carousel',
  autoWidth: true,
  controls: false,
  mouseDrag: true,
  loop: false,
  rewind: true,
  autoplay: true,
  autoplayHoverPause: true,
  nav: false,
  autoplayButtonOutput: false,
  autoplayTimeout:5000
});