import React, { useState } from 'react'
import ContentLayout from '../components/contentLayout'
import administrationIcon from '../assets/administrationIcon2.svg'
import MyCard from '../components/common/DynamicCard'

interface IPatientsStatisticsProps { }


function PatientsStatistics({ }: IPatientsStatisticsProps) {





    return (
        <ContentLayout title={'Administration des Patients et Services'} logo={administrationIcon} subTitle={'Administration des Patients et Services'} >
            <div className='grid grid-cols-3'>
                <MyCard count='23 056' title={'Total de patients pris en charge'} />
            </div>
        </ContentLayout>
    )
}

export default PatientsStatistics