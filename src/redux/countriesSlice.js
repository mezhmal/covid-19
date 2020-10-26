import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    "Country": "Barbados",
    "Slug": "barbados",
    "ISO2": "BB"
  },
  {
    "Country": "United States of America",
    "Slug": "united-states",
    "ISO2": "US"
  },
  {
    "Country": "Sierra Leone",
    "Slug": "sierra-leone",
    "ISO2": "SL"
  },
  {
    "Country": "Russian Federation",
    "Slug": "russia",
    "ISO2": "RU"
  },
]

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {}
})

export default countriesSlice.reducer
