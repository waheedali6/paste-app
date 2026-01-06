import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const pasteSlice = createSlice({
    name: "paste",
    initialState: [],
    reducers: {
        addPaste: (state, action) => {
            state.push(action.payload);
        },
        updatePaste: (state, action) => {

        },
        viewPast: (state, action) => {

        },
        deletePast: (state, action) => {

        },
    }

})

export const { addPaste, updatePast, viewPast, deletePast } = pasteSlice.actions
export default pasteSlice.reducer