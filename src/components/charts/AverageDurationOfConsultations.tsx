import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'
import patientIcon from '../../assets/headIcon.svg'
import clockIcon from '../../assets/clockIcon.svg'
import clockIcon2 from '../../assets/clockIcon2.svg'
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
                    height: 160,
                    sparkline: {
                        enabled: true
                    },

                },
                // chart: {
                //     maxWidth: 1200,
                //     height: 250,
                //     type: 'area',
                //     toolbar: {
                //         show: false
                //       },
                //       legend:{
                //         show: false
                //       },
                //       label:{
                //         show:false
                //       }
                // },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                colors: ['#8fc689'],

                // xaxis: {
                //     type: 'datetime',
                //     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                // },

            },
            responsive: [{
                breakpoint: 1151,
                options: {
                    width: '100%',
                }
            }
            ]
        }
    )
    return (<>
        {/* <div className='flex w-auto flex-col justify-between bg-white rounded-lg p-3 m-1 max-h-auto h-auto'>
            <div className='col-span-3 flex items-start  justify-between w-auto'>
                <p className="text-[#25265E] text-xs font-semibold">Total de patients pris en charge</p>

                <img src={clockIcon} alt="" className="w-30 h-12 mt-0 m-2 self-end" />

            </div>
            <div className="flex justify-end  self-end items-end">
                <div>
                    <div className='flex gap-5'>
                        <img src={clockIcon2} alt='' />
                        <h3 className='text-[#0DA8AE] text-3xl font-bold mt-5 flex gap-2 items-center w-auto'>27 min</h3>
                    </div> */}
                    <Chart options={state.options} series={state.series} type="area" height={'50%'} width={220} />
                {/* </div>
                <div className="flex  items-start flex-col justify-between my-4 mx-3">
                    <div className='flex'>

                        <FaLongArrowAltDown color="#ff0000" size={45} />
                        <p className="font-bold text-2xl text-[#ff0000]">7.3%</p>
                    </div>

                    <p className="text-[#707070] font-bold text-xs">Comparaison avec <br /> la semaine dernier</p>

                </div>


            </div>
        </div> */}

    </>

    )
}

export default Index