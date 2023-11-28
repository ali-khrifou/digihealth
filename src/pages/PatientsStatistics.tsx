import React, { useState } from 'react'
import FilterBar from '../components/filterBar'
import administrationIcon from '../assets/administrationIcon2.svg'
import MyCard from '../components/common/DynamicCard'
import HeaderLayout from '../components/contentLayout'
import patientIcon from '../assets/totalPatientIcon.svg'
import clockIcon from '../assets/clockIcon.svg'
import clockIcon2 from '../assets/clockIcon2.svg'
import repartitionIcon  from '../assets/repartitinIcon.svg'
import motif  from '../assets/motifIcon.svg'
import teleexpertiseIcon  from '../assets/teleexpertiseIcon.svg'

interface IPatientsStatisticsProps { }


// eslint-disable-next-line no-empty-pattern
function PatientsStatistics({ }: IPatientsStatisticsProps) {





    return (<div className='bg-[#E2F2F3]'>
        <div>
            <HeaderLayout title={'Total de patients pris en charge'} subTitle={'Total de patients pris en charge'} logo={administrationIcon} />
            <FilterBar />
        </div>
        <div className='grid grid-cols-3 bg-[#E2F2F3]'>
            <MyCard count='23 056' title={'Total de patients pris en charge'} logo={patientIcon} typeChart={'1'} percent={26} progress={true} />
            <MyCard count='1035' title={'Nombre de nouveaux patients'} logo={patientIcon} typeChart={'2'} percent={15} progress={true} />
            <MyCard count='23 056' title={'Total de prestations'} logo={patientIcon} typeChart={'3'} percent={8} progress={true} />
            <MyCard count='27' secondeIcon={clockIcon2} unité={'min'} title={'Durée moyenne des consultations'} logo={clockIcon} typeChart={'4'} percent={7.3} progress={false} />
            <MyCard title={'Répartition par age'} typeChart={'5'} logo={repartitionIcon} />
            <MyCard title={'Répartition par sex'} logo={undefined} typeChart={'6'} />
            <MyCard count='1035' title={'Nombre de Télé-expertises réalisées.'} logo={teleexpertiseIcon} typeChart={'7'} percent={15} progress={true} />
            <div className='col-span-2'>
            <MyCard title={'Motifs de référencement vers d autres structures selon la CIM-11'} logo={motif} typeChart={'8'} percent={undefined} progress={undefined} />
            </div>
        </div>
    </div>)
}

export default PatientsStatistics