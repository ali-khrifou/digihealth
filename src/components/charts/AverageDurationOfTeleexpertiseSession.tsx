import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

function Index() {
    const [state, setState] = useState<any>(
        {

            series: [{
                name: 'series1',
                data: [ 100,109,31, 40, 28, 51, 42]
            }],
            legend: {
                show: false
            },

            options: {
                zoom: false,
                chart: {
                    type: 'area',
                    height: 10,
                    width: '100%',
                    sparkline: {
                        enabled: true
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                colors: ['#8fc689'],
                responsive: [{
                    breakpoint: 605,
                    options: {
                        chart: {
                            width: '100%' // Adjust the width for smaller screens
                        }
                    }
                }]
                // xaxis: {
                //     type: 'datetime',
                //     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                // },

            },
        }
    )
  
    return (
       
            <Chart options={state.options} series={state.series} type="area" height={'70%'} width={'190%'} />
       
    )
}

export default Index