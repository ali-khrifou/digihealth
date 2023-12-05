import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import patientIcon from '../../assets/totalPatientIcon.svg'
import { FaLongArrowAltUp } from 'react-icons/fa'

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
        },
        // categories:{
        //   show:true
        // }
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
          columnWidth: '15%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 9
      },

      grid: {
        showe: false

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


  return (<>

    <div className='flex w-auto flex-col justify-between bg-white rounded-lg p-3 m-1 max-h-auto h-auto'>
      <div className='col-span-3 flex items-start  justify-between w-auto'>
        <p className="text-[#25265E] text-xs font-semibold">Total de patients pris en charge</p>
        <img src={patientIcon} alt="" className="w-25 h-12 mt-0 m-2 self-end" />

      </div>
      <div className="flex justify-end  self-end items-end">
        <div >
          <h3 className='text-[#0DA8AE] text-3xl font-bold mt-5 flex gap-2 items-center w-auto'>1023</h3>
          <Chart options={state.options} series={state.series} type="bar" min-width={500} max-width={700} height={100} />
        </div>
        <div className="flex  items-start flex-col justify-between my-4 mx-3">
          <div className='flex'>
            <FaLongArrowAltUp color="#1E8F12" size={35} />
            <p className="font-bold text-3xl text-[#1E8F12]">6%</p>
          </div>
          <p className="text-[#707070] font-bold text-xs w-max">Comparaison avec <br /> la semaine dernier</p>

        </div>


      </div>
    </div>
  </>

  )
}

export default Index