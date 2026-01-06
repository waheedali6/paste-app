import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const pasteSlice = createSlice({
    name: "paste",
    initialState:
        localStorage.getItem("paste") ? JSON.parse(localStorage.getItem("paste")) : [],
    reducers: {
        addPaste: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("paste", JSON.stringify(state));
        },
        updatePaste: (state, action) => {


        },
        viewPaste: (state, action) => {

        },
        deletePaste: (state, action) => {
            const pasteId = action.payload;
            const newPaste = state.filter((item) => item.id !== pasteId);
            localStorage.setItem("paste", JSON.stringify(newPaste));
            return newPaste;

        },
    }

})

export const { addPaste, updatePaste, viewPaste, deletePaste } = pasteSlice.actions
export default pasteSlice.reducer