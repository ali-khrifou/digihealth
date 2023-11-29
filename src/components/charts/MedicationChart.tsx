import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function Index() {
    const [state, setState] = useState<any>(
        {

            series: [44, 55, 41, 17, 15,70,45,36],
            options: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270
                    }
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter: function (val: string, opts: { w: { globals: { series: { [x: string]: string } } }; seriesIndex: string | number }) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    },
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'right',
                    horizontalAlign: 'center', 
                    floating: false,
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial',
                    fontWeight: 400,
                    inverseOrder: false,
                    width: 0,
                    height: 0,
                    tooltipHoverFormatter: undefined,
                    customLegendItems: [],
                    offsetX: 0,
                    offsetY: 0,
                },
                
                // title: {
                //     text: 'Gradient Donut with custom Start-angle'
                // },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 300
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        }
    )
    return (
       
            <Chart options={state.options} series={state.series} type="donut" height={170} width={450} />
      
    )
}

export default Index