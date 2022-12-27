import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentUser: '',
    typeAuth: 'signin',
    status: 'idle'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setTypeAuth: (state, action) => {
            state.typeAuth = action.payload.typeAuth
        }
    },
    extraReducers(builder){
        builder
            .addCase(loginQuery.pending, (state, action)=> {
                state.status = 'loading';
            })
            .addCase(loginQuery.fulfilled, (state, action)=> {
                state.status = 'succeeded';
                state.currentUser = action.payload;
            })
            .addCase(loginQuery.rejected, (state, action)=> {
                state.status = 'failed';
            })
    }
})

export const loginQuery = createAsyncThunk('user/loginPost', async(value) => {
    const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(value)
    });
    return  response.json();
})

export const registrationQuery = createAsyncThunk('user/registrationPost', async(value) => {
    const response = await fetch('http://127.0.0.1:5000/api/reg', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(value)
    });

    return response;
})

export const getUser = (state) => state.user.currentUser;
export const getTypeAuth = (state) => state.user.typeAuth;

export const { setUser, setTypeAuth } = userSlice.actions;
export default userSlice.reducer;
