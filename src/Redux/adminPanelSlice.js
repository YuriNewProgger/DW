
import { createSlice } from '@reduxjs/toolkit';
import { allUsersGetQuery } from './../Api/api';

const initialState = {
    rents: [],
    blackList: [],
    users: []
}

const adminPanelSlice = createSlice({
    name: 'amdinPanel',
    initialState,
    reducers: {
        setAllUsers: (state, action) => {
            console.log(action.payload);
            state.users = action.payload;
        },
        // setCurrentTypeCar: (state, action) => {
        //     state.currentTypeCar = action.currentTypeCar;
        // }
    }
})

//#region Обновление списка пользователей в состоянии
export async function refreshUsers(dispatch, getState){
    const response = await fetch(allUsersGetQuery);
    const result = await response.json();
    dispatch(setAllUsers(result.values));
}
//#endregion


export const { setAllUsers } = adminPanelSlice.actions;
export default adminPanelSlice.reducer;