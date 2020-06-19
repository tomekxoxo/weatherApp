class Ui{
  draw(data, unit) {
    console.log(data);
    const city = document.querySelector('.city');
    const country = document.querySelector('.country-name');
    const icon = document.querySelector('.temp-icon');
    const temp = document.querySelector('.temp-current');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const pressure = document.querySelector('.pressure');
    city.innerText = data.name;
    country.innerText = data.sys.country;
    icon.style.backgroundImage = `url('http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png')`
    temp.innerHTML = `${Math.round(data.main.temp)} &#8451;`;
    humidity.innerText = `${ data.main.humidity }%`;
    wind.innerText = `${data.wind.speed} m/s`;
    pressure.innerText = `${data.main.pressure} Hpa`;

    if (unit === 'f') {
      temp.innerHTML = `${Math.round(data.main.temp)} &#8457;`;
      wind.innerText = `${data.wind.speed} mph`;
    }
    
  }
}