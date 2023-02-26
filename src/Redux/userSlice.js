import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistoryQuery, getUserById, loginPostQuery, regPostQuery } from './../Api/api';

const initialState = {
    currentUser: '',
    typeAuth: 'signin',
    history: [],
    status: 'idle'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setHistory: (state, action) => {
            state.history = action.payload;
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
                state.currentUser = action.payload.value;
                //state.history = action.payload.history;
            })
            .addCase(loginQuery.rejected, (state, action)=> {
                state.status = 'failed';
            })
    }
})

export const loginQuery = createAsyncThunk('user/loginPost', async(value) => {
    const response = await fetch(loginPostQuery, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(value)
    });
    const result = await response.json();
    localStorage.setItem('token', result.token);
    delete result.token;
    return  result;
})

export const registrationQuery = createAsyncThunk('user/registrationPost', async(value) => {
    const response = await fetch(regPostQuery, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(value)
    });

    return await response.json();
})

export const getAuthUser = createAsyncThunk('user/getAuthUser', async (value) => {
    const response = await fetch(getUserById, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${value}`
          },
        body: JSON.stringify()
    });

    return await response.json();
})

export const getUserHistory = createAsyncThunk('user/getUserHistory', async(idUser) => {
    const response = await fetch(getHistoryQuery, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({id: idUser})
    });

    const result = await response.json();
    return result;
})

export const getUser = (state) => state.user.currentUser;
export const getHistory = (state) => state.user.history;
export const getTypeAuth = (state) => state.user.typeAuth;

export const { setUser, setTypeAuth, setHistory } = userSlice.actions;
export default userSlice.reducer;
