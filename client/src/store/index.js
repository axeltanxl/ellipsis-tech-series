import { exampleReducer } from "./ExampleSlice"
import { userReducer } from "./ExampleSlice2"
import {combineReducers} from "redux"; 
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({example : exampleReducer, user : userReducer})
export const store = configureStore({
    reducer : rootReducer,
    middleware: [thunk]
})