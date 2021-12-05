import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from './Reducer/dashboardSlice';
import widgetSlice from './Reducer/widgetSlice';

export const store = configureStore({
  reducer: {
    dashboards: dashboardSlice.reducer,
    widgets: widgetSlice.reducer,
  },
});
