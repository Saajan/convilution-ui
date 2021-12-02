import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Dashboards = () => {
    const dashboards = useSelector(state => state.dashboards.dashboards);
    console.log(dashboards);
    return <div className="container mx-auto m-8">
        <h2 className="text-l font-bold">Dashboards</h2>
        <div className="flex w-full">
            {Object.entries(dashboards).map(([key,]) => {
                return <Link to={`${key}`} key={key} className="w-1/4 h-32 m-4 bg-red-500 flex justify-center items-center hover:bg-red-700 rounded">
                    <div className="text-white font-bold">
                        Dashboard {key}
                    </div>
                </Link>
            })}
        </div>
    </div>
}

export default Dashboards;