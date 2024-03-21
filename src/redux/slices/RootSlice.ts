import React from 'react'
import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand : "Brand",
        sneaker_name: "Sneaker Name",
        athletic_style: "Athletic Style",
        lining_material : "Lining Material",
        season : "Season"

    },

    reducers: {
        //action is ubmitted elswhere - writtine to state.name
        chooseBrand: (state, action) => { state.brand = action.payload }, //Setting the nput to the state.name
        chooseName: (state, action) => { state.sneaker_name = action.payload },
        chooseStyle: (state, action) => { state.athletic_style = action.payload },
        chooseLining: (state, action) => { state.lining_material = action.payload },
        chooseSeason: (state, action) => { state.season = action.payload},
        
    }
})

export const reducer = rootSlice.reducer;
export const {chooseBrand, chooseName, chooseStyle, chooseLining, chooseSeason} = rootSlice.actions
