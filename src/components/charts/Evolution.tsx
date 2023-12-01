import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import logo from '../../assets/motifIcon.svg'

function Index() {
  const [state, setState] = useState<any>({

    series: [{
      name: 'ITEM A',
      data: [44, 35, 41, 67, 22, 43, 21, 49, 15, 20, 36, 33, 12]
    }, {
      name: 'ITEM B',
      data: [23, 20, 8, 13, 11, 49, 15, 20, 56, 36, 27, 33, 12]
    }, {
      name: 'ITEM C',
      data: [11,22 , 49, 15, 20, 36, 26, 17, 15, 15, 21, 14, 15]
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
      plotOptions: {
        bar: {
          borderRadius: 1,
          columnWidth: '40%',
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
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 7', 'Category 8',
         'Category 9','Category 10','Category 11','Category 12','Category 13','Category 14'],
      },
      fill: {
        opacity: 1
      },
      colors: ['#94D13D', '#F56161', '#19AEC3'],
      legend: {
        position: 'top',
        offsetX: 900,
        offsetY: 0
      },
    },


  })


  return (
    <>



      <Chart options={state.options} series={state.series} type="bar" min-width={200} height={250} />


    </>)
}

export default Index