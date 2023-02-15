import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tourInfo: {}
}

const tourSlice = createSlice({
    name : "tour",
    initialState,
    reducers : {
        tourInfo: (state, action) => {
            state.tourInfo = action.payload
        }
    }
})

export default tourSlice.reducer;       // Imported in store.js
export const { tourInfo } = tourSlice.actions       // Imported everywhere to access.