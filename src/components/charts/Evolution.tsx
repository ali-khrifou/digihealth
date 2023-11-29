import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import logo from '../../assets/motifIcon.svg'

function Index() {
    const [state, setState] = useState<any>({
          
        series: [{
          name: 'ITEM A',
          data: [44, 55, 41, 67, 22, 43, 21, 49]
        }, {
          name: 'ITEM B',
          data: [13, 23, 20, 8, 13, 27, 33, 12]
        }, {
          name: 'ITEM C',
          data: [11, 17, 15, 15, 21, 14, 15, 13]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false
            },
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          xaxis: {
            categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 7','Category 7', 'Category 8'],
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: 'top',
            offsetX: 900,
            offsetY: 0
          },
        },
      
      
      })


    return (
        <>


        
                <Chart options={state.options} series={state.series} type="bar" min-width={200}  height={170} />
   

        </>)
}

export default Index