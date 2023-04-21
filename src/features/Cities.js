import { createSlice } from "@reduxjs/toolkit"

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    value: []
  },
  reducers: {
    addCities: (state, action) => {
      state.value = action.payload
    },
    markSelected: (state, action) => {
      const { capital, country } = action.payload

      state.value = state.value.map((city) => {
        if (city.capital === capital && city.country === country) {
          return { ...city, selected: true }
        }
        return city
      })
    }
  }
})

export const { addCities, markSelected } = citiesSlice.actions
export default citiesSlice.reducer