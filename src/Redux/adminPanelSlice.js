
import { createSlice } from '@reduxjs/toolkit';
import { allUsersGetQuery, updateUserQuery, deleteUserQuery, loadBlackListQuery } from './../Api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    rents: [],
    blackList: [],
    users: []
}

const adminPanelSlice = createSlice({
    name: 'adminPanel',
    initialState,
    reducers: {
        setAllUsers: (state, action) => {
            state.users = action.payload;
        },
        setBlackList: (state, action) => {
            state.blackList = action.payload;
        }
        // setCurrentTypeCar: (state, action) => {
        //     state.currentTypeCar = action.currentTypeCar;
        // }
    }
})

//#region Обновление информации о пользователе
export const updateInfoUser = createAsyncThunk('updateInfoUser', async (value) => {
    const response = await fetch(updateUserQuery, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(value)
    });
    //const result = await response.json();
    return response;
})
//#endregion

//#region Удаление пользователя
export const deleteInfoUser = createAsyncThunk('deleteUser', async (value) => {
    const response = await fetch(deleteUserQuery, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
    });
    return response;
})
//#endregion

//#region Обновление списка пользователей в состоянии
export async function loadUsers(dispatch, getState){
    const response = await fetch(allUsersGetQuery);
    const result = await response.json();
    dispatch(setAllUsers(result.values));
}
//#endregion

//#region Загрузка чёрного списка
export const loadBlackList = createAsyncThunk('loadBlackList', async() => {
    const response = await fetch(loadBlackListQuery);
    const result = await response.json();
    return result;
})
//#endregion



export const getAllUsers = (state) => state.admin.users;
export const getBlackList = (state) => state.admin.blackList;

export const { setAllUsers, setBlackList } = adminPanelSlice.actions;
export default adminPanelSlice.reducer;