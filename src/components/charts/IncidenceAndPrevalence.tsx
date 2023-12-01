import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import logo from '../../assets/motifIcon.svg'

function Index() {
    const [state, setState] = useState<any>({

        series: [{
            name: 'Servings',
            data: [6, 6, 10, 4, 8, 10, 12]
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
            },
            plotOptions: {
                bar: {
                    borderRadius: 7,
                    columnWidth: '20%',
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 0.2
            },

            grid: {
                row: {
                    colors: ['#fff', '#f2f2f2']
                }
            },
            xaxis: {
                labels: {
                    rotate: -25
                },
                categories: ['Rhinite allergique', 'Hypertension Artérielle', 'Asthme', 'Trouble Anxieux', 'Diabète', 'CIM23', 'CIM15'],
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
        <>


         
                <Chart options={state.options} series={state.series} type="bar" min-width={200} width={550} height={170} />
            

        </>)
}

export default Index