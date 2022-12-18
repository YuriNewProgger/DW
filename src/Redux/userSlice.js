import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: '',
    typeAuth: 'signin'
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
    }
})

export const getUser = (state) => state.user.currentUser;
export const getTypeAuth = (state) => state.user.typeAuth;

export const { setUser, setTypeAuth } = userSlice.actions;
export default userSlice.reducer;