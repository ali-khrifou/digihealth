import React, { useState } from 'react'
import HeaderLayout from '../components/contentLayout'
import FilterBar from '../components/filterBar'
import Evolution from '../components/charts/Evolution'
import facturationIcon from '../assets/facturationIcon.svg'
import facturactionBg1 from '../assets/facturationBg1.png'
import facturactionBg2 from '../assets/facturationBg2.png'

function Billing() {

  const [firstTable, setFirstTable] = useState([
    { title: 'Consultations', value: 'XXX Dhs' },
    { title: 'Examens Médicaux', value: 'XXX Dhs' },
    { title: 'Actes Chirurgicaux', value: 'XXX Dhs' },
    { title: 'Soins Infirmiers', value: 'XXX Dhs' },
    { title: 'Autres', value: 'XXX Dhs' },
  ])
  const [secondeTable, setSecondeTable] = useState([
    { title: 'Rhinite allergique', value: 'XXX Dhs' },
    { title: 'Hypertension Artérielle', value: 'XXX Dhs' },
    { title: 'Asthme', value: 'XXX Dhs' },
    { title: 'Trouble Anxieux', value: 'XXX Dhs' },
    { title: 'Diabète', value: 'XXX Dhs' },
  ])


  return (
    <div className='bg-[#E2F2F3] gap-3'>
      <div>
        <HeaderLayout title={'Télémédecine'} subTitle={'Télémédecine'} logo={facturationIcon} />
        <FilterBar />
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 m-3 gap-5 bg-[#E2F2F3]'>


        <div className='block  flex-col gap-4 p-2 rounded-lg w-auto h-[260px] bg-white' style={{ backgroundImage: `url(${facturactionBg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Valeur moyenne des factures internes selon la NGAP</p>

          {firstTable?.map((item) => (<>
            <div className='grid grid-cols-2 p-1 w-full'>
              <p className='text-[#0DA8AE] font-semibold text-xl'>{item?.title}</p>
              <p className='text-[#25265E] font-semibold text-xl flex justify-end self-end'>{item?.value}</p>
            </div>
            <hr className='border-gray' />
          </>
          ))}


        </div>

        {/* seconde card */}
        <div className='block  flex-col gap-4 p-2 rounded-lg w-auto h-[260px] bg-white' style={{ backgroundImage: `url(${facturactionBg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Ventilation des coûts par type de pathologie</p>
          <div className="grid grid-cols-1">

            {secondeTable?.map((item) => (<>
              <div className='grid grid-cols-2 w-full p-1'>
                <p className='text-[#0DA8AE] font-semibold text-xl'>{item?.title}</p>
                <p className='text-[#25265E] font-semibold text-xl flex justify-end self-end'>{item?.value}</p>
              </div>
              <hr className='border-gray' />
            </>
            ))}

          </div>

        </div>
      </div>



      <div className="grid grid-cols-1 m-3 gap-4">
        <div className='block h-full  mb-5 flex-col gap-4 p-2 rounded-lg  bg-white'>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Evolution XXX</p>

          <Evolution />
        </div>




      </div>

    </div>
  )
}

export default Billing