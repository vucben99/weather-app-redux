function Timestamp({ time, timezone }) {
  return new Date(time * 1000 + timezone * 1000).toISOString().slice(11, 16)
}
export default Timestamp
