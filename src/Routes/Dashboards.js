import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Dashboards = () => {
    const dashboards = useSelector(state => state.dashboards.dashboards);
    return <div className="container mx-auto m-8">
        <h2 className="text-l font-bold">Dashboards</h2>
        <div className="flex w-full">
            {dashboards.map((dashboard, index) => {
                return <Link to={`${dashboard.id}`} key={index} className="w-1/4 h-32 m-4 bg-blue-500 flex justify-center items-center hover:bg-blue-400 rounded">
                    <div className="text-indigo-50 font-bold">
                        {dashboard.name}
                    </div>
                </Link>
            })}
        </div>
    </div>
}

export default Dashboards;