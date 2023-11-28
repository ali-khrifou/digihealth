import React from 'react'
import { Avatar } from "@material-tailwind/react";
function index() {
    return (<>
        <div className='flex items-center justify-end self-end mr-3'>
            <div className='flex flex-col my-2 mr-3 p-2'>
            <div className='uppercase text-[#6E7074] font-semibold'>User Name</div>
            <div className='font-thin text-[#85B7B9] self-end'>Role</div>
            </div>
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        </div>
        <hr className='border-black'/>
    </>)
}

export default index