import axios from "axios"
// import { API_KEY } from "./secrets"
const API_KEY = import.meta.env.VITE_API_KEY

async function getCurrentWeather(capital) {
  try {
    const city = capital.split("-")[0]
    const country = capital.split("-")[1]
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return response.data
  } catch {
    return {}
  }
}

export default getCurrentWeather