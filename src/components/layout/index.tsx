import { useState } from 'react'
import Sidebar from '../sidebar'
import Header from '../header'
import MainContent from '../mainContent'


function Index() {


    return (
        <>
            <div className="grid grid-cols-5">

                <div className='bg-gradient-to-r from-blue-500 to-cyan-500 '>
                    <Sidebar />
                </div>
                <div className="col-span-4">
                    <Header />
                    <MainContent />
                </div>

            </div>

        </>
    )
}

export default Index
