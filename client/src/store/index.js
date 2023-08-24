import { exampleReducer } from "./ExampleSlice"
import { example2Reducer } from "./ExampleSlice2"
import {combineReducers} from "redux"; 
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({example : exampleReducer, example2Reducer : example2Reducer})
export const store = configureStore({
    reducer : rootReducer,
    middleware: [thunk]
})