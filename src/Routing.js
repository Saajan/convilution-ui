import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import {
  Dashboards,
  DashboardCreate,
  WidgetCreate,
  Dashboard,
  Widget,
} from './Routes';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route path="dashboard" element={<Dashboards />} />
            <Route path="dashboard/create" element={<DashboardCreate />} />
            <Route path="dashboard/:dashboardId" element={<Dashboard/>} />
            <Route path="widget/create" element={<WidgetCreate />} />
            <Route path="widget/:widgetId" element={<Widget />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;



