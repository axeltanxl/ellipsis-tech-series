import {createSlice} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'


const initialState = {
    alpha : [],
    beta : [],
    gamma : [],
}


export const exampleSlice = createSlice({
    name : "post",
    initialState,
    reducers : {
        setAlpha : (state, action) => {
            state.alpha = [...action.payload]
        },
        setBeta : (state, action) => {
            state.beta = [...action.payload]
        },
        setGamma : (state, action) => {
            state.gamma = [...action.payload]
        },
    }
})


export const {
    setAlpha, setBeta, setGamma
} = exampleSlice.actions;


const persistConfig = {
    key: 'example',
    storage,
    timeout : 1000,
};

export const exampleReducer = persistReducer(persistConfig, exampleSlice.reducer);
