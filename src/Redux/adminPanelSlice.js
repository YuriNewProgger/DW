
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rents: [],
    blackList: [],
    users: []
}

const adminPanelSlice = createSlice({
    name: 'amdinPanel',
    initialState,
    reducers: {}
})

export default adminPanelSlice.reducer;