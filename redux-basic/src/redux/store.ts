import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

export const sotre = configureStore({
     reducer: {
        counter: counterReducer,
     },
})

export type RootSate = ReturnType<typeof sotre.getState>;
export type AppDispatch = typeof sotre.dispatch;