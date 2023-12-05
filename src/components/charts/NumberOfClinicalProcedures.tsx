import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function Index() {
  const [state, setState] = useState<any>({

    series: [{
      name: 'Servings',
      data: [44, 55, 41, 67, 22, 43, 21]
    }],
    options: {
      colors: ['#0B2349'],
      annotations: {
        points: [{
          x: '',
          seriesIndex: 0,
          label: {
            borderColor: '#775DD0',
            offsetY: 0,
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            // text: 'Bananas are good',
          }
        }]
      },
      chart: {
        width: '100%',
        height: 450,
        type: 'bar',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '20%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0.2
      },
      sparkline: {
        show:true
      },

      grid: {
        showe:false
      
      },
      xaxis: {
        labels: {
          rotate: -25
        },
        categories: ['l', 'M', 'M', 'J', 'V', 'S', 'D'],
        tickPlacement: 'on'
      },
      yaxis: {

      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        },
      }
    },
   
    responsive: [
      {
        breakpoint: '22rem',
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  })


  return (
    <div style={{ minWidth:'12rem',maxWidth:'22rem' }}>
      <Chart options={state.options} series={state.series} type="bar" min-width={200} max-width={1200} height={140} />
    </div>
  )
}

export default Index