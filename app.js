const weather = new Weather();
const ui = new Ui();
const button = document.querySelector(".units");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const inputText = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-city");

document.addEventListener("DOMContentLoaded", () => {
  function error() {
    console.log(new Error("some issue"));
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, error, {
        enableHighAccuracy: true,
      });
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }

  button.innerText = "F";
  function showPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    weather.apiByGeo(lat, long).then((data) => {
      ui.draw(data);
    });
    weather.apiForecast(lat, long).then((data) => ui.drawForecast(data));
  }
  getLocation();
});

button.addEventListener("click", changeUnits);
function changeUnits() {
  const city = document.querySelector(".city").innerText;
  if (button.innerText == "F") {
    weather.apiByCityName(city, "imperial").then((data) => ui.draw(data, "f"));
    weather.apiForecastbyCityName(city, 'imperial').then(data=> ui.drawForecast(data,'f'))
    button.innerText = "C";
  } else {
    weather.apiByCityName(city).then((data) => ui.draw(data));
    weather.apiForecastbyCityName(city, 'metric').then(data=> ui.drawForecast(data,'c'))
    button.innerText = "F";
  }
}

burger.addEventListener("click", slideMenu);
function slideMenu() {
  nav.classList.toggle("toggle");
  burger.classList.toggle("toggle");
}

searchBtn.addEventListener("click", changeCity);

function changeCity() {
  weather.apiByCityName(inputText.value).then((data) => ui.draw(data));
  weather
    .apiForecastbyCityName(inputText.value)
    .then((data) => ui.drawForecast(data));
  Ui.clearInput();
}

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  spaceBetween: 20,
  slidesPerView: 8,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      
    },
    480: {
      slidesPerView: 3,
      
    },
    640: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 5,
      
    },
    960: {
      slidesPerView: 6,
      
    },
    1120: {
      slidesPerView: 7,
      
    },
    1280: {
      slidesPerView: 8,
      
    },
    1400: {
      slidesPerView: 9,
      
    }
  }
})