import {createSlice} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const initialState = {
    userData : {
        name :"",
        email :"@gmail.com",
        password :"2b$10$IM8DJPJbw55L9.qvCuxFkuddRwGQmhfR7GuMG3DPHjkdJxaqUF/bm",
        age : "",
        height : "",
        weight : "",
        activityLevel :" (1-2 days of exercise per week)",
        isCKD : "",
        recommendedSodiumIntake :"",
        id :"",
    }
}


export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUserData : (state, action) => {
            state.userData = {...action.payload}
        },
        // setEpsilon : (state, action) => {
        //     state.beta = [...action.payload]
        // },
        // setZeta: (state, action) => {
        //     state.zeta = [...action.payload]
        // },
    }
})


export const {
    setUserData
} = userSlice.actions;


const persistConfig = {
    key: 'user',
    storage,
    timeout : 1000,
    // blacklist : ["delta", "epsilon"]
};

export const userReducer = persistReducer(persistConfig, userSlice.reducer);

