import React, { useState } from 'react'
import FilterBar from '../components/filterBar'
import administrationIcon from '../assets/administrationIcon2.svg'
import MyCard from '../components/common/DynamicCard'
import HeaderLayout from '../components/contentLayout'
import patientIcon from '../assets/totalPatientIcon.svg'
import headIcon from '../assets/headIcon.svg'
import clockIcon from '../assets/clockIcon.svg'
import clockIcon2 from '../assets/clockIcon2.svg'
import repartitionIcon from '../assets/repartitinIcon.svg'
import SEOReasons from '../components/charts/SEOReasons'
import DistrubutionBySex from '../components/charts/DistributionBySex'

import TotalPatientTreat from '../components/charts/TotalPatientsTreated'
import NumberOfNewPatientsChart from '../components/charts/NumberOfNewPatients'
import TotalBenefitsChart from '../components/charts/TotalBenefits'
import AverageDurationChart from '../components/charts/AverageDurationOfConsultations'
import DistributionByAgeChart from "../components/charts/DistributionByAge";
import NumberOfTeleExpertisesCarriedOut from "../components/charts/NumberOfTeleExpertisesCarriedOut";
import teleexpertiseIcon from '../assets/teleexpertiseIcon.svg'

import { Grid } from 'antd'

interface IPatientsStatisticsProps { }


// eslint-disable-next-line no-empty-pattern
function PatientsStatistics({ }: IPatientsStatisticsProps) {





    return (
        <div className='bg-[#E2F2F3]'>
            <div>
                <HeaderLayout title={'Administration des Patients et Services'} subTitle={'Administration des Patients et Services'} logo={administrationIcon} />
                <FilterBar />
            </div>
            <div className=' bg-[#E2F2F3] m-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,25rem)' }}>
                
                <MyCard title={'Total de patients pris en charge'} logo={patientIcon} typeChart={'1'} count={1256} percent={6} progress={true}/>
                <MyCard title={'Nombre de nouveaux patients'} logo={patientIcon} typeChart={'2'} count={1056} percent={15} progress={true}/>
                
                <MyCard title={'Total de prestations'} logo={headIcon} typeChart={'3'} count={307} percent={8} progress={true}/>
                <MyCard title={'Total de patients pris en charge'} unité={'minutes'} secondeIcon={clockIcon2} logo={clockIcon} typeChart={'4'} count={307} percent={8} progress={false}/>
                <MyCard title={'Total de patients pris en charge'} typeChart={'5'}/>
                
                {/* <AverageDurationChart /> */}
                {/* <DistributionByAgeChart /> */}

                <DistrubutionBySex />
                <MyCard title={'Total de patients pris en charge'} logo={teleexpertiseIcon} typeChart={'7'} count={1256} percent={6} progress={true}/>
                <div className='lg:col-span-2 md:col-span-2 ms:col-span-3 xs:col-span-3'>
                    <SEOReasons />
                </div>
            </div>
        </div>)
}

export default PatientsStatistics