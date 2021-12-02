import { createSlice } from '@reduxjs/toolkit'
import { grid } from './grid';

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        dashboards: {
            1: grid
        },
        activeDashboard: 1
    },
    reducers: {
        
    }
});

export default dashboardSlice;