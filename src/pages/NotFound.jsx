import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="page notFound">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
      <Link to="/">Take me back to the home page</Link>
    </div>
  )
}
export default NotFound
