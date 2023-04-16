import { createSlice } from "@reduxjs/toolkit";
import { initFilter } from "./constants";


const filterSlice = createSlice({
    name: "filter",
    initialState:initFilter,
    reducers:{
        changeFilter:{
        reducer(state,action){
            return action.payload
        }
    }}
})



export const {changeFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer