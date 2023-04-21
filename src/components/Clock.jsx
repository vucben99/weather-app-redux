// Hooks
import useTime from "../hooks/useTime"

function Clock({ weather }) {
  const { hour, minute } = useTime(weather)

  return (
    <div className="clock">
      <p>{hour}</p>
      <p>{minute}</p>
    </div>
  )
}

export default Clock
