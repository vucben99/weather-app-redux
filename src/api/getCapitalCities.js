import axios from "axios"

async function getCapitalCities() {
  try {
    const response = await axios.get(
      "https://gist.githubusercontent.com/amitjambusaria/b9adebcb4f256eae3dfa64dc9f1cc2ef/raw/6431d72439c8399b05d2b8e9d51153e5dee7ad3b/countries.json"
    )
    const countries = response.data
    const capitalCities = countries.map((country) => ({
      capital: country.capital,
      country: country.code,
    }))

    return capitalCities

  } catch (err) {
    console.error(err.message)
    return []
  }
}

export default getCapitalCities