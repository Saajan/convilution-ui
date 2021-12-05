export const getChartOptions_1 = (options, chartType) => {
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
        series: [{
                name: "Live",
                type: chartType == 'stacked-bar' || chartType == 'category-stacked' ? 'bar' : 'line',
                stack: chartType == 'category-stacked' ? 'total' : 'Live',
                data: [0.67, 0.78, 0.87, 1.5, 0.92, 1.5],
                areaStyle: chartType == 'multiline-area' ? {} : null,
                label: {
                    show: true,
                    position: 'top'
                },
            },
            {
                name: "VoD",
                type: chartType == 'stacked-bar' || chartType == 'category-stacked' ? 'bar' : 'line',
                stack: chartType == 'category-stacked' ? 'total' : 'VoD',
                data: [2, 2.78, 3.87, 0.76, 1.2, 0.9],
                areaStyle: chartType == 'multiline-area' ? {} : null,
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