import React, { Fragment, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import http from '../http';
import Widget3 from '../Components/Widget3';
import ReactECharts from 'echarts-for-react';

const getChartOptions_1 = (options) => {
    return {
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['ExoPlayer', 'HTML5', 'UWPMediaPlayer', 'AVFoundation', 'Roku Scene Graph', 'DSS-HLS']
        },
        yAxis: {
            type: 'value',
            name: 'CIRR',
            nameLocation: 'middle',
            nameGap: 50
        },
        series: [
            {
                name: "Live",
                type: 'line',
                data: [0.67, 0.78, 0.87, 1.5, 0.92, 1.5],
                label: {
                    show: true,
                    position: 'top'
                },
            },
            {
                name: "VoD",
                type: 'line',
                data: [2, 2.78, 3.87, 0.76, 1.2, 0.9],
                label: {
                    show: true,
                    position: 'top'
                },
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
const getChartOptions_2 = (options) => {
    return {
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['0', '0-0.2', '0.2-0.4', '0.4-0.6', '0.6-0.8', '0.8-1', '1-2', '2-3', '3-4', '4-5', '5-10', '10-50', '50-100'],
        },
        yAxis: {
            type: 'value',
            name: 'Avg. Duration',
            nameLocation: 'middle',
            nameGap: 50
        },
        series: [
            {
                type: 'bar',
                name: 'CIRR',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [25, 35, 33, 32.5, 31, 30, 30, 28, {
                    value: 22,
                    itemStyle: {
                        color: '#a90000'
                    }
                }, 22, 18, 15, 12, 4]
            }
        ],
        legend: {
            // data: 'CIRR %',
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

    if (widgetData.name && widgetData.name.startsWith("Player-wise")) {
        return getChartOptions_1(options);
    } else if (widgetData.name && widgetData.name.startsWith("CIRR")) {
        return getChartOptions_2(options);
    }
    return options;
}

function Widget({ widgetId, url, chartType }) {
    const [chartData, setChartData] = useState({});
    const [rerender, setRerender] = useState(false);

    const [ref, bounds] = useMeasure()

    useEffect(() => {
        getChartMeta(widgetId);
    }, [widgetId]);

    const getChartMeta = async () => {
        setChartData({});
        http.get(`widgets\\${widgetId}`)
            .then((response) => setChartData(response.data));
    }

    useEffect(() => {
        setTimeout(() => {
            setRerender(true);
        }, 3000);
    }, []);

    console.log(bounds);

    if (!rerender) {
        return <div>Loading</div>
    }

    const actualHeight = url ? '80vh' : bounds.height - 30;

    return (
        <div className="m-2 w-full h-full" ref={ref}>
            <Fragment>
                {chartData !== {} && chartData.chart !== 'table' && <ReactECharts option={getChartOptions(chartData)} style={{ height: actualHeight, width: "100%" }} />}
            </Fragment>
            <Fragment>
                {chartData !== {} && chartData.chart === 'table' && <Widget3 />}
            </Fragment>
        </div>
    );
}


export default Widget;