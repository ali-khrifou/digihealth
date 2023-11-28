import React from 'react'



interface ILayoutContent {
    title: string,
    logo: any,
    subTitle: string,
}

function index({ title, logo, subTitle }: ILayoutContent) {

   
    
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
      
    </>
    )
}

export default index