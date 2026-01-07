import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import toast from 'react-hot-toast';

export const pasteSlice = createSlice({
    name: "paste",
    initialState:
        localStorage.getItem("paste") ? JSON.parse(localStorage.getItem("paste")) : [],
    reducers: {
        addPaste: (state, action) => {
            state.push(action.payload);
            toast.success("Paste Created Successfuly");
            localStorage.setItem("paste", JSON.stringify(state));
        },
        updatePaste: (state, action) => {
            // console.log(action.payload);
            const newPaste = action.payload;
            const index = state.findIndex((paste) => paste.id == newPaste.id);
            if (index >= 0) {
                state[index] = newPaste;
                toast.success("Paste Updated Successfuly");
                localStorage.setItem("paste", JSON.stringify(state));
            }

        },
        viewPaste: (state, action) => {
            const viewId = action.payload;

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