import { MdKeyboardArrowDown } from "react-icons/md"

function Search({ search, setSearch }) {
  return (
    <div className="searchInput">
      <input
        className="searchInput_inputField"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <MdKeyboardArrowDown />
    </div>
  )
}
export default Search
