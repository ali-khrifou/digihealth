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
                labels: ['Femme','Homme'],
                dataLabels: {
                    enabled: true,
                },
                legend: {
                    show: false
                },
                colors: ['#983333', '#59AFE6'],
                responsive: [{
                    breakpoint: 500,
                    options: {
                      chart: {
                        width: 300,
                        toolbar: {
                          show: false
                        },
                      },
                      legend: {
                        show:false,
                        position: 'right'
                      }
                    }
                  }]
            },
        }
    )
    return (


        <div className='flex flex-col bg-white rounded-lg py-2 px-3 m-1 h-auto '>
            <div>
                <p className="text-[#25265E] text-xs font-semibold w-max">Répartition par sexe</p>
            </div>
            <div className='grid grid-cols-2 mt-5'>
                <div>
                    <Chart options={state.options} series={state.series} type="pie" height={170} width={280} className='ml-[-5rem]' />
                </div>
                <div className="flex flex-col align-top items-end gap-2 justify-center mr-5">

                    <div className='flex'>
                        <img src={womanIcon} alt='' className='h-10 w-5' />
                        <p className='flex gap-7 px-5 items-center bg-gradient-to-r from-[#ffebeb00] to-[#FFEBEB] rounded-tr-lg rounded-br-lg p-2'>
                            <span className='text-[#AF5050] font-bold text-xl'>63%</span>Femme</p>
                    </div>



                    <div className='flex '>
                        <img src={manIcon} alt='' className='h-10 w-5' />
                        <p className='flex gap-7 px-5 items-center bg-gradient-to-r from-[#e3f4ff00] to-[#E3F4FF] rounded-tr-lg rounded-br-lg p-2'>
                            <span className='text-[#3F7CA2] font-bold text-xl'>22%</span>  Homme</p>
                    </div>
                </div>
            </div>
        </div >



    )
}

export default Index