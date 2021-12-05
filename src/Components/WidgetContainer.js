import React, { useState, useEffect } from 'react';
import {
  useNavigate,
} from "react-router-dom";
import { getSortedWidget } from '../utils/widget';

const WidgetContainer = ({ widgets, setIsOpen }) => {
    let navigate = useNavigate();
    const [sortedWidgets, setSortedWidgets] = useState({
        custom: [],
        shared: [],
        conviva: [],
    });

    useEffect(() => {
        const data = getSortedWidget(widgets);
        setSortedWidgets(data);
    }, [widgets]);

    const onWidgetClick = (widgetId) => {
        setIsOpen(false);
        navigate(`/widget/${widgetId}`);
    };

    const onCreateWidgetClick = () => {
        setIsOpen(false);
        navigate('/widget/create');
    }
    return (
        <div className="widget-container mx-10 h-full">
            <div className="h-full">
                <div>
                    <div className="text-lg font-bold">Custom  Widgets</div>
                    <div>
                        {sortedWidgets.custom.map(widget => {
                            return (
                                <div key={widget.id} onClick={()=>onWidgetClick(widget.id)} className="cursor-pointer drawer-widget w-full border-2 my-5 border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
                                    <div className="text-md font-bold">{widget.name}</div>
                                    <div>{widget.description}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className="text-lg font-bold">Shared  Widgets</div>
                    <div>
                        {sortedWidgets.shared.map(widget => {
                            return (
                                <div key={widget.id} onClick={()=>onWidgetClick(widget.id)} className="cursor-pointer drawer-widget w-full border-2 my-5 border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
                                    <div className="text-md font-bold">{widget.name}</div>
                                    <div>{widget.description}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className="text-lg font-bold">Conviva  Widgets</div>
                    <div>
                        {sortedWidgets.conviva.map(widget => {
                            return (
                                <div key={widget.id} onClick={()=>onWidgetClick(widget.id)}  className="cursor-pointer drawer-widget w-full border-2 my-5 border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
                                    <div className="text-md font-bold">{widget.name}</div>
                                    <div>{widget.description}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => onCreateWidgetClick()}>Create Widget</button>
            </div>
        </div>
    );
}

export default WidgetContainer;
