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
              labels: ['25 à 64 ans', '15 à 24 ans', '00 à 14 ans', '65 ans et plus'],
              colors: ['#0B2349', '#18B6C0', '#546E7A', '#E29500', '#4482BE'],
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
      <>
      
     <div className='flex w-auto flex-col justify-between bg-white rounded-lg p-3 m-1 max-h-auto h-auto'>
            <div className='col-span-3 flex items-start  justify-between w-auto'>
                <p className="text-[#25265E] text-xs font-semibold">Total de patients pris en charge</p>
            </div> 
         
                  
                    <Chart options={state.options} series={state.series} type="pie" height={250} width={320}  />
            
       </div>
      </>
      
    )
}

export default Index