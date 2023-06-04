// Hooks
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// API
import getCurrentWeather from '../api/getCurrentWeather'

// Components
import Clock from '../components/Clock'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Timestamp from '../components/Timestamp'
import { ReactComponent as ThermometerIcon } from '../svg/wi-thermometer.svg'
import { ReactComponent as SunriseIcon } from '../svg/wi-sunrise.svg'
import { ReactComponent as SunsetIcon } from '../svg/wi-sunset.svg'

function Weather() {
  const { capital } = useParams()
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    async function getAndSetWeatherData() {
      const weatherData = await getCurrentWeather(capital)
      setWeather(weatherData)
    }
    getAndSetWeatherData()
  }, [capital])

  return (
    <div className='page weather'>
      <div className='page_inner'>
        <Link to='/' className='backArrow'>
          <MdKeyboardArrowLeft />
        </Link>
        <Clock weather={weather} />
        <h1 className='cityName'>{weather ? weather.name : '--'}</h1>
        <div className='weatherDetails'>
          {weather && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt='weather icon'
              className='weatherIcon'
            />
          )}
          <p className='weather-desc'>{weather ? weather.weather[0].description : '--'}</p>
          <div className='icon-and-data'>
            <ThermometerIcon className='temperature_icon' />
            <p className='weather-data'>{weather ? Math.floor(weather.main.temp) : '--'} &deg;C</p>
          </div>
          <div className='icon-and-data'>
            <SunriseIcon className='suntime_icon' />
            <p className='weather-data'>
              {weather ? (
                <Timestamp time={weather.sys.sunrise} timezone={weather.timezone} />
              ) : (
                '--'
              )}
            </p>
          </div>
          <div className='icon-and-data'>
            <SunsetIcon className='suntime_icon' />
            <p className='weather-data'>
              {weather ? <Timestamp time={weather.sys.sunset} timezone={weather.timezone} /> : '--'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Weather
