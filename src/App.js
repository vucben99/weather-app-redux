// CSS
import "./App.css"

// React Router
import { Routes, Route } from 'react-router-dom'

// Pages
import MainPage from "./pages/MainPage"
import AddCity from "./pages/AddCity"
import Weather from "./pages/Weather"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add_city" element={<AddCity />} />
        <Route path="/weather/:capital" element={<Weather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App