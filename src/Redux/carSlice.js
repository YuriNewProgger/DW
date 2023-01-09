import { createSlice } from '@reduxjs/toolkit';
import economList from '../MockData/EconomCarsMock';
import businessList from '../MockData/BussinessCarsMock';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { allCarsGetQuery } from '../Api/api';
import { addCarQuery } from './../Api/api';

const initialState = {
    allCars: '',
    currentTypeCar: 'Эконом',
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
        },
        setCurrentTypeCar: (state, action) => {
            state.currentTypeCar = action.payload;
        }
    }
})


export const addCar = createAsyncThunk('car/addCarPost', async(value) => {
    const response = await fetch(addCarQuery, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(value)
    });
    return  response.json();
})

export const deleteCar = createAsyncThunk()

//Обновление списка автомобилей
export async function refreshCarList(dispatch, getState) {
    const response = await fetch(allCarsGetQuery);
    const objs = await response.json();
    dispatch(setAllCars(objs));
}

export const getCurrentTypeCar = (state) => state.car.currentTypeCar;
export const getCars = (state) => state.car.allCars;

export const { setCurrentTypeCar, setAllCars } = carSlice.actions;
export default carSlice.reducer;