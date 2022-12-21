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
            state.user = action.payload;
        },
        setTypeAuth: (state, action) => {
            state.typeAuth = action.payload.typeAuth
        }
    },
    extraReducers(builder){
        builder
            .addCase(loginPost.pending, (state, action)=> {
                state.status = 'loading';
            })
            .addCase(loginPost.fulfilled, (state, action)=> {
                state.status = 'succeeded';
                state.currentUser = action.payload;
            })
            .addCase(loginPost.rejected, (state, action)=> {
                state.status = 'failed';
            })
    }
})

export const loginPost = createAsyncThunk('user/loginPost', async(value) => {
    console.log(JSON.stringify(value));
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

export const getUser = (state) => state.user.currentUser;
export const getTypeAuth = (state) => state.user.typeAuth;

export const { setUser, setTypeAuth } = userSlice.actions;
export default userSlice.reducer;
