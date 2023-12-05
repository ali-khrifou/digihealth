
import TotalPatientsChart from "../charts/TotalPatientsTreated";
import NumberOfNewPatientsChart from "../charts/NumberOfNewPatients";
import TotalBenefitsChart from "../charts/TotalBenefits";
import AverageDurationChart from "../charts/AverageDurationOfConsultations";
import DistributionByAgeChart from "../charts/DistributionByAge";
import DistributionBySexChart from "../charts/DistributionBySex";
import NumberOfTeleExpertisesChart from "../charts/NumberOfTeleExpertisesCarriedOut";
import SEOReasonsChart from "../charts/SEOReasons";

import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";



interface IDynamicCardProps {
    title: string;
    count?: number | string,
    logo?: any,
    typeChart: any
    percent?: any;
    progress?: boolean,
    secondeIcon?: any
    unité?: any
}


export const DynamicCard = ({ title, count, logo, typeChart, percent, progress, secondeIcon, unité }: IDynamicCardProps) => {
    return (

        <div className='flex w-auto bg-white rounded-lg p-3 m-1 max-h-auto h-auto'>
            <div className='col-span-3 flex flex-col items-start justify-start w-auto'>
                <p className="text-[#25265E] text-xs font-semibold">{title}</p>
                <h3 className='text-[#0DA8AE] text-2xl font-bold mt-5 flex gap-2 items-center w-auto'>
                    <img className="h-15 w-7" src={secondeIcon} alt='' />{count}{unité}</h3>
                {typeChart === '1' ? <TotalPatientsChart /> :
                    typeChart === '2' ? <NumberOfNewPatientsChart /> :
                        typeChart === '3' ? <TotalBenefitsChart /> :
                            typeChart === '4' ? <AverageDurationChart /> :
                                typeChart === '5' ? <DistributionByAgeChart /> :
                                    typeChart === '6' ? <DistributionBySexChart /> :
                                        typeChart === '7' ? <NumberOfTeleExpertisesChart /> :
                                            typeChart === '8' ? <SEOReasonsChart /> : null}
            </div>
            <div className="flex flex-col align-top items-end">
                <img src={logo} alt="" className="w-20 h-10 mt-0 m-2 self-end" />
                {percent !== undefined && progress !== undefined ? (<>
                    <div className="flex items-start justify-between my-4 mx-3">

                        {progress ? <FaLongArrowAltUp color="#1E8F12" size={50} /> : <FaLongArrowAltDown color="#ff0000" size={50} />}

                        <p className={`font-bold text-2xl ${progress ? 'text-[#1E8F12]' : 'text-red-600'}`}>{percent}%</p>
                    </div>

                    <p className="text-[#707070] font-bold text-xs">Comparaison avec <br /> la semaine dernier</p></>)
                    : null}
            </div>
        </div >


    )
}

export default DynamicCard