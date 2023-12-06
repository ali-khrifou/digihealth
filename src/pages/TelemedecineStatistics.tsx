import React from 'react'
import HeaderLayout from '../components/contentLayout'
import FilterBar from '../components/filterBar'
import teleIcon1 from '../assets/teleIcon1.png'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'
import teleBg1 from '../assets/teleBg1.png'
import teleBg2 from '../assets/teleBg2.png'
import teleBg3 from '../assets/teleBg3.png'
import teleBg4 from '../assets/teleBg4.png'
import TypeOfSpecialities from '../components/charts/TypeOfSpecialties'
import MostRequestedSpecialies from '../components/charts/MostRequestedSpecialties'
import CaseResolutionRateByTeleExpertise from '../components/charts/CaseResolutionRateByTeleExpertise'
import AverageDurationOfTeleexpertiseSession from '../components/charts/AverageDurationOfTeleexpertiseSession'
import clockIcon2 from '../assets/clockIcon2.svg'
import bgChart from '../assets/chartBh.svg'

function TelemedecineStatistics() {
  return (
    <div className='bg-[#E2F2F3]'>
      <div>
        <HeaderLayout title={'Télémédecine'} subTitle={'Télémédecine'} logo={teleIcon1} />
        <FilterBar />
      </div>
      <div className=' mx-3 gap-4 bg-[#E2F2F3]' style={{ display: 'Grid', gridTemplateColumns: 'repeat(auto-fit,minmax(30rem,1fr))' }}>


        <div className='block  flex-col gap-4 p-2 rounded-lg w-auto h-[260px] bg-white' style={{ backgroundImage: `url(${teleBg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Type de spécialités consultées en télé-expertise.</p>

          <TypeOfSpecialities />


        </div>

        {/* seconde card */}
        <div className='block  flex-col gap-4 p-2 rounded-lg w-auto h-[260px] bg-white' style={{ backgroundImage: `url(${teleBg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Spécialités les plus sollicitées en télé-expertise.</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-1">

            <MostRequestedSpecialies />

          </div>

        </div>
      </div>



      <div className=" m-2 gap-4" style={{ display: 'Grid', gridTemplateColumns: 'repeat(auto-fit,minmax(30rem,1fr))' }}>
        <div className='block h-[220px]  mb-5 flex-col gap-4 p-2 rounded-lg  bg-white'
          style={{ backgroundImage: `url(${teleBg3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Incidence et prévalence des pathologies diagnostiquées</p>

          <CaseResolutionRateByTeleExpertise />
        </div>

        <div className='block   h-[220px] flex-col gap-6 rounded-lg  bg-white' style={{ backgroundImage: `url(${teleBg4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>

          <p className='text-[#25265E] px-2 font-semibold text-sm my-2'>Durée moyenne d'une session de télé-expertise.</p>
          <div className='flex gap-5 my-5 px-2'>
            <img src={clockIcon2} alt="" />
            <p className='text-[#0DA8AE] text-2xl font-bold'>27 min</p>
          </div>
          <div className='h-[8.6rem] w-full'>
            {/* <img src={bgChart} alt="" className='h-auto w-auto' /> */}
            <div className='flex'>
              <p className='flex items-center align-bottom gap-4 mr-[-5rem]  text-red-600 text-2xl font-bold z-10'>
                <FaLongArrowAltDown color='red' className='' size={40} /> 3%</p>
              <AverageDurationOfTeleexpertiseSession />
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default TelemedecineStatistics