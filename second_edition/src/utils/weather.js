import axios from 'axios'
const weatherRequest = axios.create()
export const getWeather = () => {
    return weatherRequest({
        method:'GET',
        url:'https://api.seniverse.com/v3/weather/daily.json?key=SABafy87PElX3uOHN&location=fuzhou&language=zh-Hans&unit=c&start=0&days=5'
    })
}
export const getWeatherNow = () => {
    return weatherRequest({
        method:'GET',
      url:'https://api.seniverse.com/v3/weather/now.json?key=SABafy87PElX3uOHN&location=fuzhou&language=zh-Hans&unit=c'
    })
}