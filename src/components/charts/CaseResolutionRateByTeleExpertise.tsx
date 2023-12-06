import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import logo from '../../assets/motifIcon.svg'

function Index() {
    const [state, setState] = useState<any>({

        series: [{
            name: 'Incidence',
            data: [ 10, 4, 8, 10, 12]
        }],
        options: {
            colors: ['#08A5AB'],
            annotations: {
                points: [{
                    x: '',
                    seriesIndex: 0,
                    label: {
                    show:false
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
                    columnWidth: '16%',
                    color: '#fff',
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
                    show:false,
                    // colors: ['#ffffff', '#ffffff']
                }
            },
            xaxis: {
                labels: {
                    rotate: -25
                },
                categories: ['Juin', 'Juillet', 'Août', 'Septembre', 'Novembre'],
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
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [chartWidth, setchartWidth] = useState(window.innerWidth);
    
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize(window.innerWidth );
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      useEffect(()=>{
        windowSize > 700 ? setchartWidth(550) : setchartWidth(420) 
      },[windowSize])

    return (
        <>


         
                <Chart options={state.options} series={state.series} type="bar"  width={chartWidth} height={170} />
            

        </>)
}

export default Index