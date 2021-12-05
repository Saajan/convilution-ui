import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import http from '../http';
import ReactECharts from 'echarts-for-react';
import { DotsVerticalIcon } from '@heroicons/react/solid'

const getChartOptions_1 = (options) => {
    return {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['ExoPlayer', 'HTML5', 'UWPMediaPlayer', 'AVFoundation', 'Roku Scene Graph', 'DSS-HLS']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: "Live",
                type: 'line',
                data: [0.67, 0.78, 0.87, 1.5, 0.92, 1.1]
            },
            {
                name: "VoD",
                type: 'line',
                data: [2, 2.78, 3.87, 0.76, 1.2, 0.99]
            }
        ],
        legend: {
            data: ['Live', 'VoD']
        },
        tooltip: {
            trigger: 'axis'
        },
        ...options,
    }
}
const getChartOptions = (widgetData) => {
    const options = {};

    options.title = {
        text: widgetData.name
    };

    if (widgetData.name === "My Widget 1") {
        return getChartOptions_1(options);
    }
    return options;
}

function Widget({ widgetId, bounds }) {
    const [chartData, setChartData] = useState({ a: 1 });

    useEffect(() => {
        getChartMeta(widgetId);
    }, [widgetId]);

    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRerender(true);
        }, 3000);
    }, []);

    const getChartMeta = async () => {
        http.get(`widgets\\${widgetId}`)
            .then((response) => setChartData(response.data))
    }

    console.log(bounds);

    if (!rerender) {
        return <div>Loading</div>
    }

    return (
        <div>
            {chartData !== {} && <ReactECharts option={getChartOptions(chartData)} style={{ height: bounds.height, width: bounds.width }} />}
        </div>
    );
}


export default Widget;