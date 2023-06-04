import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import citiesReducer from './features/Cities'

const store = configureStore({
  reducer: {
    cities: citiesReducer
  }
})

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </BrowserRouter>
)
