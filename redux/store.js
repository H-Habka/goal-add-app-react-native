import {combineReducers,configureStore}  from "@reduxjs/toolkit"
import goalSlice from "./goalSlice"


const combinedReducers  = combineReducers({
    goalSlice
})

export const store = configureStore({
    reducer : combinedReducers
})