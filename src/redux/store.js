import { configureStore } from '@reduxjs/toolkit'
import countries from './countriesSlice'

export default configureStore({
  reducer: {
    countries
  }
})