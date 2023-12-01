import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function Index() {
    const [state, setState] = useState<any>(
        {
          
            series: [62, 18, 11, 9],
            options: {
              chart: {
                minWidth: 380,
                maxWidth:1200,
                type: 'pie',
              },
              labels: ['Pneumologues', 'Dermatologues', 'Cardiologues', 'Pediatres','Gynécologues'],
              colors: ['#94D13D', '#3EAE74', '#2DDAC1', '#2D99FE', '#6F58E9'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200,
                    toolbar: {
                      show: false
                    },
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
        <div className="flex justify-start items-start m-0">
            <Chart options={state.options} series={state.series} type="pie" height={200} width={480}  />
        </div>
    )
}

export default Index