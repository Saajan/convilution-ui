import React, { useState } from 'react';
import { Select } from 'antd';
import MainWidget from './MainWidget';

const { Option } = Select;

const GridWidget = (props) => {
    const { widgetId, item } = props;
    const [chartType, setChartType] = useState('multiline');

    function handleChange(value) {
        setChartType(value);
    }

    console.log({ item });

    return (
        <div className="grid-widget w-full h-full">
            <header>
                {item.name == "VSF vs VPF" ?
                    <Select defaultValue="multiline" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="multiline">MultiLine</Option>
                        <Option value="multiline-area">Multiline Area</Option>
                        <Option value="stacked-bar">Stacked Bar</Option>
                        <Option value="category-stacked">Category Stacked Bar</Option>
                    </Select> : null}
                {item.name == "Top Devices" ?
                    <Select defaultValue="table" style={{ width: 120 }} onChange={handleChange}> 
                        <Option value="bar">Bar</Option>
                        <Option value="pie">Pie</Option>
                        <Option value="table">Table</Option>
                        <Option value="line">Line</Option>
                    </Select> : null}
            </header>
            <MainWidget widgetId={widgetId} chartType={chartType} />
        </div>
    )
}

export default GridWidget;