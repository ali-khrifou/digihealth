import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import womanIcon from '../../assets/womanIcon.svg'
import manIcon from '../../assets/hommeIcon.svg'

function Index() {
    const [state, setState] = useState<any>(
        {

            series: [62, 18],
            options: {
                chart: {
                    minWidth: 380,
                    maxWidth: 1200,
                    type: 'pie',
                },
                labels: [],
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


        <div className='flex flex-col bg-white rounded-lg p-3 m-5 h-[15rem] '>
            <div>
                <p className="text-[#25265E] text-xs font-semibold w-max">Répartition par sexe</p>
            </div>
            <div className='grid grid-cols-2 grid-flow-row mt-5'>
                <div>
                    <Chart options={state.options} series={state.series} type="pie" height={170} width={280} className='ml-[-5rem]' />
                </div>
                <div className="flex flex-col align-top items-end gap-2 justify-center mr-5">

                    <div className='flex'>
                        <img src={womanIcon} alt='' className='h-10 w-5' />
                        <p className='flex gap-7 px-5 items-center bg-gradient-to-r from-[#FFEBEB] to-[#BE6363] rounded-tr-lg rounded-br-lg p-2'>
                            <span className='text-[#AF5050] font-bold text-xl'>63%</span>Femme</p>
                    </div>



                    <div className='flex '>
                        <img src={manIcon} alt='' className='h-10 w-5' />
                        <p className='flex gap-7 px-5 items-center bg-gradient-to-r from-[#E3F4FF] to-[#2C8CCA] rounded-tr-lg rounded-br-lg p-2'>
                            <span className='text-[#3F7CA2] font-bold text-xl'>22%</span>  Homme</p>
                    </div>
                </div>
            </div>
        </div >



    )
}

export default Index