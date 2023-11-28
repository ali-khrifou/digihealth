
import MyChart from "../chart";
import patientIcon from '../../assets/totalPatientIcon.svg'
import { FaLongArrowAltUp,FaLongArrowAltDown } from "react-icons/fa";



interface IDynamicCardProps {
    title: string;
    count: number | string
    // chart?: any;
    // state: any
}


export const DynamicCard = ({ title, count }: IDynamicCardProps) => {
    return (

        <div className='grid grid-cols-5 bg-white rounded-lg p-3 m-5 h-[15rem]'>
            <div className='col-span-3 flex flex-col items-start justify-start gap-3'>
                <p className="text-[#25265E] font-semibold">{title}</p>
                <h3 className='text-[#0DA8AE] text-4xl font-bold'>{count}</h3>
                <MyChart />
            </div>
            <div className="col-span-2 flex flex-col align-top items-end my-5">
                <img src={patientIcon} alt="" className="w-20 h-14 mt-0" />
                <div className="flex items-start justify-between align-top gap-2 m-4">
                    <FaLongArrowAltUp color="#1E8F12" size={50}/>
                    {/* <FaLongArrowAltDown color="#ff0000"/> */}
                    <p className="font-bold text-4xl text-[#1E8F12]">26</p>
                </div>
                <p className="text-[#707070] font-bold text-sm">Comparaison avec <br/> la semaine dernier</p>


            </div>




        </div>


    )
}

export default DynamicCard