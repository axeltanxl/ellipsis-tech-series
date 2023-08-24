import {createSlice} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const initialState = {
    delta : [],
    epsilon : [],
    zeta : [],
}


export const example2Slice = createSlice({
    name : "post",
    initialState,
    reducers : {
        setDelta : (state, action) => {
            state.delta = [...action.payload]
        },
        setEpsilon : (state, action) => {
            state.beta = [...action.payload]
        },
        setZeta: (state, action) => {
            state.zeta = [...action.payload]
        },
    }
})


export const {
    setDelta, setEpsilon, setZeta
} = example2Slice.actions;


const persistConfig = {
    key: 'example2',
    storage,
    timeout : 1000,
    blacklist : ["delta", "epsilon"]
};

export const example2Reducer = persistReducer(persistConfig, example2Slice.reducer);

