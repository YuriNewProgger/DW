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
        }
    }
})

export const getAllCars = createAsyncThunk('car/GetAllCars', async() => {
    const resp = await fetch(allCarsGetQuery);
    return resp.json();
})


export const getCurrentTypeCar = (state) => state.currentTypeCar;

export const { setCurrentTypeCar } = carSlice.actions;
export default carSlice.reducer;