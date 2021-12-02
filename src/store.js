import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from './Reducer/dashboardSlice';

export const store = configureStore({
  reducer: {
    dashboards: dashboardSlice.reducer
  },
});
