// Hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

// Redux
import { markSelected } from "../features/Cities"

// Components
import { Link } from "react-router-dom"
import { MdKeyboardArrowLeft } from "react-icons/md"
import Search from "../components/Search"
import Dropdown from "../components/Dropdown"

function AddCity() {
  const nav = useNavigate()
  const dispatch = useDispatch()

  const [search, setSearch] = useState("")
  const [selectedCapital, setSelectedCapital] = useState(null)

  function handleSaveCity(selected) {
    dispatch(
      markSelected({
        capital: selected.capital,
        country: selected.country
      })
    )
    nav("/")
  }

  return (
    <div className='page addCity'>
      <div className='page_inner'>
        <Link to='/' className='backArrow'>
          <MdKeyboardArrowLeft />
        </Link>

        <Search search={search} setSearch={setSearch} />

        <Dropdown {...{ search, setSearch, selectedCapital, setSelectedCapital }} />

        {selectedCapital && (
          <button onClick={() => handleSaveCity(selectedCapital)} className='saveBtn'>
            SAVE
          </button>
        )}
      </div>
    </div>
  )
}
export default AddCity
