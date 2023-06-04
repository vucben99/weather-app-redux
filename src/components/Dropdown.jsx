/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'

function Dropdown({ search, setSearch, setSelectedCapital }) {
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

  function highlightText(capital, search) {
    const indexOfCapital = capital.indexOf(search)
    const firstPart = capital.slice(0, indexOfCapital === -1 ? 0 : indexOfCapital)
    const middlePart = search
    const lastPart = capital.slice(firstPart.length + middlePart.length, capital.length)
    return [firstPart, middlePart, lastPart]
  }

  return (
    <ul className='dropdown'>
      {search.length > 0 &&
        filteredCapitals.map((capital) => {
          return (
            <li
              className='dropdown_item'
              onClick={() => handleSelect(capital)}
              key={capital.country}
            >
              {highlightText(capital.capital, search).map((part, index) => {
                return index === 1 ? (
                  <span style={{ color: 'lightblue' }} key={index}>
                    {part}
                  </span>
                ) : (
                  <span key={index}>{part}</span>
                )
              })}
            </li>
          )
        })}
    </ul>
  )
}

export default Dropdown
