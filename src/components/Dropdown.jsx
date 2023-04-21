import { useSelector } from "react-redux"
import Highlighter from "react-highlight-words"

function Dropdown({ search, setSearch, selectedCapital, setSelectedCapital }) {
  const capitals = useSelector((state) => state.cities.value)

  const filteredCapitals = capitals
    .filter(
      (capital) =>
        capital.capital?.toLowerCase().includes(search.toLowerCase()) && !capital.selected
    )
    .slice(0, 8)

  function handleSelect(capital) {
    setSelectedCapital(capital)
    setSearch(capital.capital)
  }

  return (
    <ul className='dropdown'>
      {search.length > 0 &&
        filteredCapitals.map((capital) => (
          <li className='dropdown_item' onClick={() => handleSelect(capital)} key={capital.country}>
            <Highlighter
              highlightClassName='highlighter'
              searchWords={search.split()}
              textToHighlight={capital.capital}
            />
          </li>
        ))}
    </ul>
  )
}
export default Dropdown
