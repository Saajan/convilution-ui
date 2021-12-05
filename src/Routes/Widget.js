import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MainWidget from '../Components/MainWidget';

function Widget() {
    const { widgetId } = useParams();
    return (
        <div className="w-full border border-grey-500 m-2">
            <div>
                <MainWidget widgetId={widgetId} />
            </div>
        </div>
    );
}

export default Widget;