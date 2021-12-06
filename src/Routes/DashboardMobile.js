import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import useMeasure from 'react-use-measure';
import http from '../http';
import { Space, Spin } from 'antd';
import GridLayoutMobile from '../Components/GridLayoutMobile';

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

    if (dashboards.length <= 0) {
        return <Space size="middle">
            <Spin size="large" />
        </Space>
    } else {
        return <div className="container mx-auto m-8">
            <div className="flex justify-between items-center">
                <h2 className="text-l font-bold">{currentDashboard ? currentDashboard.name : ''}</h2>
            </div>
            <div className="flex w-full h-full" ref={ref}>
                {currentDashboard ?
                    <GridLayoutMobile data={currentDashboard} bounds={bounds} mode={mode} />
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