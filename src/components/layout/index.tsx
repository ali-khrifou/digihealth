import { useState } from 'react'
import Sidebar from '../sidebar'
import Header from '../header'
import MainContent from '../mainContent'


function Index() {


    return (
        <>
            <div className="grid grid-cols-5">

                <div>
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
