import {createSlice} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'


const initialState = {
    successModal : false,
    sodiumData : {
        meal : "",
        location : "",
        foodEntry: ""
    },
    mealData : [],
    mealFiltered : []

}


export const generalSlice = createSlice({
    name : "general",
    initialState,
    reducers : {
        setSuccessModal : (state, action) => {
            state.successModal = action.payload
        },
        setSodiumData : (state, action) => {
            state.sodiumData = {...action.payload}
        },
        setMealData : (state, action) => {
            state.mealData = [...action.payload]
        },
        setMealFiltered : (state, action) => {
            state.mealFiltered = [...action.payload]
        },
    }
})


export const {
   setSuccessModal, setSodiumData, setMealData, setMealFiltered
} = generalSlice.actions;


const persistConfig = {
    key: 'example',
    storage,
    timeout : 1000,
    blacklist : ["successModal", "sodiumData"]
};

export const exampleReducer = persistReducer(persistConfig, generalSlice.reducer);
