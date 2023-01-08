import { createSlice } from '@reduxjs/toolkit';
import economList from '../MockData/EconomCarsMock';
import businessList from '../MockData/BussinessCarsMock';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { allCarsGetQuery } from '../Api/api';

const initialState = {
    allCars: '',
    currentTypeCar: 'econom',
    currentListCar: ''
}

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setCurrentTypeCar: (state, action) => {
            state.currentTypeCar = action.currentTypeCar;
        },
        setAllCars: (state, action) => {
            state.allCars = action.payload;
        }
    }
})

// export const getAllCars = createAsyncThunk('car/GetAllCars', async() => {
//     const resp = await fetch(allCarsGetQuery);
//     return resp.json();
// })


//Начальная инициализация
export async function fetchTodos(dispatch, getState) {
    const response = await fetch(allCarsGetQuery);
    const objs = await response.json();
    dispatch(setAllCars(objs));
}

export const getCurrentTypeCar = (state) => state.currentTypeCar;
export const getCars = (state) => state.car.allCars;

export const { setCurrentTypeCar, setAllCars } = carSlice.actions;
export default carSlice.reducer;