import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import tourReducer from "./tour-slice.js"

const store = configureStore({
    reducer: {
        tour : tourReducer
    }
})

export default store
