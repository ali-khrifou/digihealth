import React, { useEffect, useState } from 'react'
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
                colors: ['#1AA10B'],
                responsive: [{
                    breakpoint: 1151,
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
    useEffect(() => {
        const handleResize = () => {
            // Adjust chart options based on screen width
            const screenWidth = window.innerWidth;

            if (screenWidth < 480) {
                setState((prevState: { options: { chart: any; }; }) => ({
                    ...prevState,
                    options: {
                        ...prevState.options,
                        chart: {
                            ...prevState.options.chart,
                            width: '100%',
                        },
                    },
                }));
            } else {
                // Adjust options for larger screens
                // ...
            }
        };

        // Initial setup
        handleResize();

        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="flex justify-start flex-wrap items-start m-0" style={{ width: '100%', height: '100px' }}>
            <Chart options={state.options} series={state.series} type="area" height={'100%'} width={'190%'} />
        </div>
    )
}

export default Index