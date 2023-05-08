import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:"App",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        togglemenu: (state)=>{
            state.isMenuOpen=!state.isMenuOpen

        },
    },
})
export const{ togglemenu }=appSlice.actions; 
export  default appSlice.reducer