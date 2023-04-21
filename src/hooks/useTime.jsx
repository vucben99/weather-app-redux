import { useState, useEffect } from "react"

function useTime(weather) {
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(Date.now())
    }, 5 * 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const timeInCity = new Date(time + (weather ? weather.timezone : 0) * 1000)
  return {
    hour: timeInCity.toISOString().split("T")[1].split(":")[0],
    minute: timeInCity.toISOString().split("T")[1].split(":")[1]
  }
}

export default useTime
