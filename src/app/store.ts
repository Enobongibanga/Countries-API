import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import countriesReducer from '../redux/country/countryslice'
import favouriteReducer from '../redux/favouriteSlice'

export const store = configureStore({
  reducer: {
   
    countriesR: countriesReducer,
    favourite:favouriteReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
