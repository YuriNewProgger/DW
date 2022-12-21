import { createSlice } from '@reduxjs/toolkit';
import economList from '../MockData/EconomCarsMock';
import businessList from '../MockData/BussinessCarsMock';

const initialState = {
    // allCars: [economList, businessList],
    // currentTypeCar: 'econom',
    // currentListCar: this.allCars.find(item => item.title = this.currentTypeCar)[0]
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

export const getCurrentTypeCar = (state) => state.currentTypeCar;

export const { setCurrentTypeCar } = carSlice.actions;
export default carSlice.reducer;