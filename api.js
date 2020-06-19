class Weather{
  constructor() {
    this.apiKey = 'ec6394176af51bfdeaa167c2534ab9c7';
  }
  async apiByGeo(lat, long,units = 'metric') {
    const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${this.apiKey}`)
    const res = await req.json()
    return res
  }
  async apiForecast(lat, long,units = 'metric') {
    const req = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=${units}&appid=${this.apiKey}`)
    const res = await req.json()
    return res
  }
  async apiByCityName(name, units = 'metric') {
    const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units${units}&appid=${this.apiKey}`)
    const res = await req.json()
    return res
  }
}