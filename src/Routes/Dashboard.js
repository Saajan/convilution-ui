import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import GridLayout from '../Components/GridLayout';

const Dashboard = () => {
    const [currentDashbord, setCurrentDashboard] = useState({});
    let params = useParams();
    const dashboards = useSelector(state => state.dashboards.dashboards);
    useEffect(() => {
        if (dashboards && params.dashboardId) {
            setCurrentDashboard(dashboards[params.dashboardId]);
        }
    }, [dashboards, params]);
    return <div className="container mx-auto m-8">
        <h2 className="text-l font-bold">Dashboard {params.dashboardId}</h2>
        <div className="flex w-full">
            {currentDashbord.lg ?
                <GridLayout data={currentDashbord} />
                : <div>
                    Loading
                </div>
            }
        </div>
    </div>
}

export default Dashboard;