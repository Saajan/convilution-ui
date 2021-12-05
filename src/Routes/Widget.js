import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Select } from 'antd';
import MainWidget from '../Components/MainWidget';


const { Option } = Select;

function Widget() {
    const { widgetId } = useParams();

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div className="w-full h-full border border-grey-500 m-2">
            <header>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="multiline">MultiLine</Option>
                    <Option value="multiline-area">Multiline Area</Option>
                    <Option value="stacked-bar">Stacked Bar</Option>
                </Select>
            </header>
            <MainWidget widgetId={widgetId} url={true} />
        </div>
    );
}

export default Widget;