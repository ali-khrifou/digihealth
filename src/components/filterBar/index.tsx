import React from 'react'

import { DatePicker, Select } from 'antd';
const { RangePicker } = DatePicker;
function index() {
    const handleChange = (value: string | string[]) => {
        console.log(`Selected: ${value}`);
    };
    return (<>
        <div>
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


        </div>
    </>)
}

export default index