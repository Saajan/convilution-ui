import {
    createSlice
} from '@reduxjs/toolkit'

const widgetSlice = createSlice({
    name: 'widget',
    initialState: {
        loading: 'idle',
        widgets: [],
    },
    reducers: {
        widgetsLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            console.log("loads");
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        widgetsReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.widgets = action.payload.results;
            }
        }
    }
});

export default widgetSlice;