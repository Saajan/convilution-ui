import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import useMeasure from 'react-use-measure';
import http from '../http';
import GridLayout from '../Components/GridLayout';

const Dashboard = () => {
    const [currentDashboard, setCurrentDashboard] = useState({});
    let params = useParams();
    const dashboards = useSelector(state => state.dashboards.dashboards);
    const [ref, bounds] = useMeasure()
    useEffect(() => {
        if (dashboards && params.dashboardId) {
            setCurrentDashboard(dashboards.find(dashboard => dashboard.id === params.dashboardId));
        }
    }, [dashboards, params]);

    const saveDashboard = async () => {
        const response = await http.patch('/dashboards');
        console.log(response);
    };

    if (dashboards.length <= 0) {
        return <div>Loading</div>
    } else {
        return <div className="container mx-auto m-8">
            <div className="flex justify-between items-center">
                <h2 className="text-l font-bold">{currentDashboard ? currentDashboard.name : ''}</h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={saveDashboard}>Save Dashboard</button>
            </div>
            <div className="flex w-full h-screen" ref={ref}>
                {currentDashboard ?
                    <GridLayout data={currentDashboard} bounds={bounds} />
                    : <div>
                        Loading
                    </div>
                }
            </div>
        </div>
    }
}

export default Dashboard;