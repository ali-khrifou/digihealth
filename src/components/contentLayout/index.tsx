import React from 'react'
import { DatePicker, Select } from 'antd';
const { RangePicker } = DatePicker;

interface ILayoutContent {
    title: string,
    logo: any,
    subTitle: string,
    children: React.ReactNode
}

function index({ title, logo, subTitle, children }: ILayoutContent) {

    const handleChange = (value: string | string[]) => {
        console.log(`Selected: ${value}`);
    };
    
    return (<>
        <div className='flex flex-col'>
            <div className='flex flex-col my-2 mx-5'>
                <div className='flex gap-5'>
                    <img src={logo} alt="" />
                    <p className='text-[#25265E] font-semibold text-3xl'>{title}</p>
                </div>
                <div className='flex ml-12'>
                    <p className='text-[#828282] font-thin'>{subTitle}</p>
                </div>
            </div>
        </div>
        {/* searchsection */}
        <div className='bg-[#E2F2F3]'>
            <div className='grid grid-cols-5 m-3 p-2 gap-4'>
                <Select size={'middle'}
                    defaultValue="Région:Tous"
                    onChange={handleChange}
                    style={{ width: 200 }}
                    options={[]} />
                <Select size={'middle'}
                    defaultValue="Province:Tous"
                    onChange={handleChange}
                    style={{ width: 200 }}
                    options={[]} />
                <Select size={'middle'}
                     defaultValue="Commun:Tous"
                    onChange={handleChange}
                    style={{ width: 200 }}
                    options={[]} />
                <DatePicker />
                <RangePicker size='middle' />

            </div>
            <div>

            {children}
            </div>

        </div>
    </>
    )
}

export default index