import axios from "axios"

async function getCurrentWeather(capital) {
  try {
    const city = capital.split("-")[0]
    const country = capital.split("-")[1]
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=a1533fbd4b9bce5cd4d92ac37617727d&units=metric`)
    return response.data
  } catch {
    return {}
  }
}

export default getCurrentWeather