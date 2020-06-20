class Ui{
  draw(data, unit) {
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
  drawForecast(data) {
    const tab = data.list;
    for (let i = 1; i < tab.length; i++){
      let div = document.querySelector(`.forecast-${i}`);
      let hour = document.createElement('h1');
      let icon = tab[i].weather[0].icon;
      let day = new Date(tab[i].dt_txt.substring(5, 16)).getDay();
      console.log(day);
      const days = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 4: 'Friday', 5: 'Saturday' };
      for (let x in days) {
        if (day == x) {
         
          div.innerHTML = `<h1>${days[x]}</h1>`;
        }
      }
      div.innerHTML += `<h1>${tab[i].dt_txt.substring(5,16)}</h1>`;
      div.innerHTML += `<img src= 'http://openweathermap.org/img/wn/${icon}@2x.png'>`;
      div.innerHTML += `<h1>${Math.round(tab[i].main.temp)}&#8451;</h1>`
    }
  }
}