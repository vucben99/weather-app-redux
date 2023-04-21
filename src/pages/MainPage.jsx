// Hooks
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

// Components
import { BiPlusMedical } from "react-icons/bi"
import { Link } from "react-router-dom"

// Reducers
import { addCities, markSelected } from "../features/Cities"

// API
import getCapitalCities from "../api/getCapitalCities"

function MainPage() {
  const nav = useNavigate()
  const dispatch = useDispatch()

  const capitals = useSelector((state) => state.cities.value)
  const savedCapitals = capitals
    .filter((capital) => capital.selected === true)
    .sort((a, b) => (a.capital > b.capital ? 1 : -1))

  useEffect(() => {
    async function saveCapitals() {
      const capitalCities = await getCapitalCities()
      dispatch(addCities(capitalCities))

      const defaultCity = { capital: "Budapest", country: "HU" }
      dispatch(markSelected(defaultCity))
    }
    if (!capitals.length) {
      saveCapitals()
    }
  }, [capitals, dispatch])

  function handleShowWeatherPage(capital) {
    nav(`/weather/${capital.capital}-${capital.country}`)
  }

  return (
    <div className='page mainPage'>
      <div className='content'>
        <ul>
          {savedCapitals.map((capital) => (
            <li onClick={() => handleShowWeatherPage(capital)} key={capital.country} className="savedCity">
              {capital.capital}
            </li>
          ))}
        </ul>
        <Link className='addBtn' to='/add_city'>
          <BiPlusMedical />
        </Link>
      </div>
    </div>
  )
}
export default MainPage
