import {
    createSlice
} from '@reduxjs/toolkit'

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        loading: 'idle',
        dashboards: [],
        activeDashboard: 0
    },
    reducers: {
        dashboardsLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            console.log("loads");
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        dashboardsReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                console.log(action.payload);
                state.dashboards = action.payload.results;
            }
        }
    }
});

export default dashboardSlice;