import React from 'react'
import HeaderLayout from '../components/contentLayout'
import FilterBar from '../components/filterBar'
import medicationIcon from '../assets/medicationIcon.svg'
import performanceBg1 from '../assets/performanceBg1.png'
import performanceBg2 from '../assets/performanceBg2.png'
import performanceBg3 from '../assets/performanceBg3.png'
import NumberOfClinicalProcedures from '../components/charts/NumberOfClinicalProcedures'
import TypologyOfPathologies from '../components/charts/TypologyOfPathologies'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'
import RateOfManagedCases from '../components/charts/RateOfManagedCases'
import teleIcon1 from '../assets/teleIcon1svg.svg'
import teleIcon2 from '../assets/teleIcon2.svg'
import headIcon from '../assets/headIcon.svg'
import IncidenceAndPrevalence from '../components/charts/IncidenceAndPrevalence'
import IncidenceAndPrevalenceOfPathologies from '../components/charts/IncidenceAndPrevalenceOfPathologies'
import bgChart from '../assets/chartBh.svg'


function ClinicalPerformance() {
  return (
    <div className='bg-[#E2F2F3] gap-3'>
      <div>
        <HeaderLayout title={'Performance Clinique et Épidémiologie'} subTitle={'Performance Clinique et Épidémiologie'} logo={medicationIcon} />
        <FilterBar />
      </div>
      <div className='grid  mx-3  gap-5 bg-[#E2F2F3]' style={{ display: 'Grid', gridTemplateColumns: 'repeat(auto-fit,minmax(24rem,1fr))' }}>


        <div className='block  flex-col gap-2 px-2 rounded-lg w-auto h-auto bg-white' style={{ backgroundImage: `url(${performanceBg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Nombre d'actes cliniques</p>
          <p className='text-[#0DA8AE] text-[40px] font-bold'>1035</p>
          <div className='flex justify-between'>

            <NumberOfClinicalProcedures />
            <div className='flex flex-col items-center justify-center'>
              <div className='flex gap-2'>
                <FaLongArrowAltUp color="#1E8F12" size={50} />
                <p className='font-bold text-3xl text-[#1E8F12]'>25%</p>
              </div>
              <div>
                <p className="text-[#707070] font-bold text-xs">Comparaison avec <br /> la semaine dernier</p>
              </div>
            </div>
          </div>
        </div>

        {/* seconde card */}
        <div className='block  flex-col gap-2 px-2 rounded-lg w-auto h-auto bg-white'>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Taux de cas gérés par le médecin généraliste uniquement versus télé-expertise.</p>
          <div className="grid grid-cols-3">

            <div className='flex h-10 items-center self-center'>
              <p className='flex items-center bg-gradient-to-l from-[#e3f4ff00] to-[#E3F4FF] rounded-tl-lg rounded-bl-lg p-2 text-xs  text-[#25265E] font-semibold'>
                Télé-expertise</p>
              <img src={teleIcon1} alt='' className='h-15 w-10' />
            </div>
            <div className='mr-4'>

              <RateOfManagedCases />
            </div>
            <div className='flex h-10 items-center self-center'>
              <img src={teleIcon2} alt='' className='h-15 w-10' />
              <p className='flex items-center flex-wrap h-12 bg-gradient-to-r from-[#ffebeb00] to-[#FFEBEB] font-semibold text-xs rounded-tr-lg rounded-br-lg p-2'>
                Généraliste</p>
            </div>
          </div>
          <div className='h-10 w-15 flex justify-end items-center'>
            <img src={headIcon} alt='' className='h-[60px] w-[80px]' />
          </div>
        </div>

        {/* third one  */}
        <div className='block  flex-col gap-2 px-2 rounded-lg w-auto h-auto bg-white'>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Typologie des pathologies diagnostiquées selon la CIM-11.</p>
          <TypologyOfPathologies />

        </div>
      </div>



      <div className="m-3 gap-4" style={{ display: 'Grid', gridTemplateColumns: 'repeat(auto-fit,minmax(30rem, 1fr))' }}>
        <div className='block h-auto mb-5 flex-col gap-4 p-2 rounded-lg  bg-white' style={{ backgroundImage: `url(${performanceBg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Incidence et prévalence des pathologies diagnostiquées</p>
     
          <div className='flex justify-between my-2'>

            <IncidenceAndPrevalence />

          </div>
        </div>

        <div className='block h-[237px] flex-col gap-4 p-2  rounded-lg  bg-white' style={{ backgroundImage: `url(${performanceBg3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top right' }}>

          <p className='text-[#25265E] font-semibold text-sm my-2'>Incidence et prévalence des pathologies diagnostiquées</p>
          <p className='text-[#0DA8AE] text-[50px] font-bold'>1035</p>
          <div className='grid grid-cols-2 gap-3' >
           <IncidenceAndPrevalenceOfPathologies/>
            <div className='flex flex-col items-end justify-end' >
              <div className='flex gap-2'>
                <FaLongArrowAltUp color="#1E8F12" size={50} />
                <p className='font-bold text-3xl text-[#1E8F12]'>62 %</p>
              </div>
              <div>
                <p className="text-[#707070] font-bold text-xs">Comparaison avec <br /> la semaine dernier</p>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>)
}

export default ClinicalPerformance