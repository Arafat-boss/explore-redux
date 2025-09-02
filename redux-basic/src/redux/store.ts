import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

export const sotre = configureStore({
     reducer: {
        counter: counterReducer,
     },
})
