import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Space, Spin } from 'antd';
import useMeasure from 'react-use-measure';
import http from '../http';
import GridLayout from '../Components/GridLayout';

const Dashboard = () => {
    const [mode, setMode] = useState('save');
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
        setMode('save');
        const response = await http.patch('/dashboards');
        console.log(response);
    };

    const editDashboard = async () => {
        setMode('edit');
    };

    if (dashboards.length <= 0) {
        return <div className="container w-full h-screen flex justify-center item-center">
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    } else {
        return <div className="container mx-auto m-8">
            <div className="flex justify-between items-center">
                <h2 className="text-l font-bold">{currentDashboard ? currentDashboard.name : ''}</h2>
                {mode === 'save' ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={editDashboard}>Edit Dashboard</button> :
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={saveDashboard}>Save Dashboard</button>}
            </div>
            <div className="flex w-full h-full" ref={ref}>
                {currentDashboard ?
                    <GridLayout data={currentDashboard} bounds={bounds} mode={mode} />
                    : <div>
                        <Space size="middle">
                            <Spin size="large" />
                        </Space>
                    </div>
                }
            </div>
        </div>
    }
}

export default Dashboard;