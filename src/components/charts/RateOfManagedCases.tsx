import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import womanIcon from '../../assets/womanIcon.svg'
import manIcon from '../../assets/hommeIcon.svg'

function Index() {
    const [state, setState] = useState<any>(
        {

            series: [62, 38],
            options: {
                chart: {
                    minWidth: 380,
                    maxWidth: 1200,
                    type: 'pie',
                },
                labels: ['Généraliste','Télé-expertise'],
                dataLabels: {
                    enabled: true,
                },
                legend: {
                    show: false
                },
                colors: ['#983333', '#59AFE6'],
                // responsive: [{
                //     breakpoint: 480,
                //     options: {
                //         chart: {
                //             width: 200,
                //             toolbar: {
                //                 show: false
                //             },
                //             labels: {
                //                 show: false
                //             }
                //         },
                //         xaxis: {
                //             enabled: false,
                //         },
                //     }
                // }]
            },
        }
    )
    return (  
           
             
                    <Chart options={state.options} series={state.series} type="pie" height={150} width={120}  />
          



    )
}

export default Index