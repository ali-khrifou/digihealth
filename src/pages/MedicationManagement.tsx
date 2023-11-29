import React from 'react'
import FilterBar from '../components/filterBar'
import HeaderLayout from '../components/contentLayout'
import medicationIcon from '../assets/medicationIcon.svg'
import medicationBg1 from '../assets/medicationBg.png'
import medicationBg2 from '../assets/medicationBg2.png'
import medicationBg3 from '../assets/medicationBg3.png'
import medicationBg4 from '../assets/medicationBg4.png'
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { Select } from 'antd';
import MedicationChart from '../components/charts/MedicationChart'
import chartBg from '../assets/chartBh.svg'
function MedicationManagement() {



  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    (
      <div className='bg-[#E2F2F3]'>
        <div>
          <HeaderLayout title={'Gestion Médicale et Pharmaceutique'} subTitle={'Gestion Médicale et Pharmaceutique'} logo={medicationIcon} />
          <FilterBar />
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 self-stretch gap-2 m-2 p-2 bg-[#E2F2F3]'>

          <div className='block  flex-col rounded-lg w-[548px] h-[250px] bg-white ' style={{ backgroundImage: `url(${medicationBg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>
            <div className='flex flex-col  gap-4 ml-6'>
              <p className='text-[#25265E] font-semibold text-md my-2'>Nombre de prescriptions émises</p>
              <p className='text-[#0DA8AE] text-[80px] font-bold '> 4 068</p>
              <p className='flex gap-4 items-center text-[#1E8F12] text-2xl font-bold self-end  mx-3 z-10'>
                <FaLongArrowAltUp color='#1E8F12' className='z-100' size={40} /> 12 %</p>


            </div>
          </div>


          {/* seconde card with chart */}
          <div className='block  flex-col rounded-lg w-[548px] h-[250px] bg-white ' style={{ backgroundImage: `url(${medicationBg4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>
            <div className='flex  justify-around p-3'>
              <p className='text-[#25265E] font-semibold text-sm my-2'>Classement des médicaments les plus prescrits par DCI.</p>
              <Select
                defaultValue="10"
                style={{ width: 60 }}
                onChange={handleChange}
                options={[
                  { value: '5', label: '5' },
                  { value: '10', label: '10' },
                  { value: '20', label: '20' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />

            </div>
            <div className='w-full'>
              <MedicationChart/>
            </div>
          </div>



          <div className='block  flex-col rounded-lg w-[548px] h-[250px] bg-white' style={{ backgroundImage: `url(${medicationBg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>
            <div className='flex flex-col  gap-4 ml-6'>
              <p className='text-[#25265E] font-semibold text-md my-2'>Quantité de médicaments distribués.</p>
              <p className='text-[#0DA8AE] text-[80px] font-bold '> 10 654</p>
              <p className='flex gap-4 items-center text-red-600 text-2xl font-bold self-end  mx-3 z-10'>
                <FaLongArrowAltDown color='red' className='z-100' size={40} /> 3 %</p>


            </div>
          </div>




          <div className='block  flex-col rounded-lg w-[548px] h-[250px] bg-white ' style={{ backgroundImage: `url(${medicationBg3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>
            <div className='flex flex-col  gap-4 ml-6'>
              <p className='text-[#25265E] font-semibold text-md my-2'>Poucentage des prescriptions avec antibiothérapie.</p>
              <p className='text-[#0DA8AE] text-[80px] font-bold '> 307</p>
              <p className='flex gap-4 items-center text-[#1E8F12] text-2xl font-bold self-end  mx-3 z-10'>
                <FaLongArrowAltUp color='#1E8F12' className='z-100' size={40} /> 62 %</p>


            </div>
          </div>

        </div>
      </div>)
  )
}

export default MedicationManagement