import React, { useEffect, useState } from 'react'
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
                xaxis: {
                    type: "category",
                    labels: {
                        fontSize: '15rem',
                    }
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 5,
                    columnWidth: '10%',
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 0.5
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
                categories: [['Rhinite', ' allergique'], ['Hypertension', ' Artérielle'], 'Asthme', 'Trouble Anxieux', 'Diabète', 'CIM23', 'CIM15'],
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
                breakpoint: 500,
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
    const [chartWidth, setChartWidth] = useState<any>();

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, []);

    useEffect(() => windowSize < 718 ? setChartWidth(290) : setChartWidth(700), [windowSize]);
    return (
        <>


            <div className='flex flex-col flex-wrap bg-white rounded-lg p-4 w-auto h-[100%]'>
                <div className='flex items-start justify-between'>
                    <p className="text-[#25265E] text-xs font-semibold">Motifs de référencement vers d'autres structures selon la CIM-11</p>

                    <img src={logo} alt="" className="w-17 h-12 " />
                </div>
                <div className='flex '>
                    <Chart options={state.options} series={state.series} type="bar" width={chartWidth} height={120} />
                </div>

            </div >

        </>)
}

export default Index