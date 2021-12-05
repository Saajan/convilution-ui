import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import http from '../http';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';


// const http = require('http')
const axios = require('axios')

const getChartOptions = (widgetData) => {
    const options = {};

    options.title = {
        text: widgetData.name
    };
    options.xAxis = {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed']    
    }
    options.yAxis = {
        type: 'value'
    };

    options.series = [
        {
            name: "Live",
            type: 'line',
            data: [0.67, 0.78, 0.87]
        },
        {
            name: "VoD",
            type: 'line',
            data: [2, 2.78, 3.87]
        }

    ]
}

function Widget() {
    const { widgetId } = useParams();
    const [chartData, setChartData] = useState({a: 1});
    useEffect(() => {
        console.log("Widget Data ", getChartMeta(widgetId));
    });
    const getChartMeta = async () => {
        http.get(`widgets\\${widgetId}`)
         .then((response) => setChartData(response.data))
    }
    // var option =  Promise.resolve();
    //var chartDom = document.getElementById('main');
    //var myChart = echarts.init(chartDom);
    //var option;

    // var option = {
    //   xAxis: {
    //     type: 'category',
    //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //   },
    //   yAxis: {
    //     type: 'value'
    //   },
    //   series: [
    //     {
    //       data: [120, 200, 150, 80, 70, 110, 130],
    //       type: 'bar'
    //     }
    //   ]
    // };

    //option && myChart.setOption(option);
    // sleep(8000);
    // console.log("Option for chart : " + option)
    //return <ReactECharts option={option} />
    return (
        <div>
            <h1>chartData {JSON.stringify(chartData)}</h1>
        </div>
    );
  }


export default Widget;