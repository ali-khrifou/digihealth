import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function Index() {
    const [state, setState] = useState<any>(
        {

            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }],
            legend: {
                show: false
            },
          
            options: {
                zoom: false,
                chart: {
                    maxWidth: 1200,
                    height: 250,
                    type: 'area',
                    toolbar: {
                        show: false
                      },
                      legend:{
                        show: false
                      },
                      label:{
                        show:false
                      }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
              
                    // xaxis: {
                    //     type: 'datetime',
                    //     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                    // },
               
            },
        }
    )
    return (
        <div className="flex justify-start items-start m-0">
            <Chart options={state.options} series={state.series} type="area" height={150} width={200} />
        </div>
    )
}

export default Index