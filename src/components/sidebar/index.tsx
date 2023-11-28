import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import administrationIcon from '../../assets/administrationIcon.svg'
import pharmacieIcon from '../../assets/pharmacieIcon.svg'
import performanceIcon from '../../assets/performanceIcon.svg'
import telemedecineIcon from '../../assets/telemedecineIcon.svg'
import facturationIcon from '../../assets/facturationIcon.svg'
import logoutIcon from '../../assets/logoutIcon.svg'
import { Link } from 'react-router-dom'

const menuItems = [
    { path: "/patient", title: 'Administration des Patients et Services', icon: administrationIcon },
    { path: "/", title: 'Gestion Médicale et Pharmaceutique', icon: pharmacieIcon },
    { path: "/", title: 'Performance Clinique et Épidémiologie', icon: performanceIcon },
    { path: "/", title: 'Télémédecine', icon: telemedecineIcon },
    { path: "/", title: 'Facturation et Cotation', icon: facturationIcon },
    { path: "/", title: 'Déconnexion', icon: logoutIcon },
]

function Index() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    return (
        <div className="flex flex-col bg-gradient-to-r from-blue-500 to-cyan-500 text-white h-screen">
            <div className='flex items-center justify-center py-6'>
                <img src={logo} alt="" />
            </div>
            {menuItems.map((item, index) => (<>
                <Link to={item.path} className='flex items-start h-20' key={index}  >
                    <button
                        className={` ${selectedIndex === index ? 'bg-red-600 rounded-tr-3xl rounded-br-lg w-[3rem] h-[4rem]' : 'text-left bg-transparent text-white rounded-tr-3xl rounded-br-lg w-[3rem] h-[4rem]'}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <img src={item.icon} alt='' />
                    </button>
                    <button
                        className={`${selectedIndex === index ? 'text-left bg-[#0a376c] rounded-tl-3xl rounded-bl-lg  h-[4rem] w-[100%] text-lg ml-[-7px] pl-9' : 'text-left bg-transparent text-white rounded-tl-3xl rounded-bl-lg  h-[4rem] w-[100%] text-lg ml-[-7px] pl-9'}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item.title}
                    </button>
                </Link>
                <div className=''></div>
                <div className='flex items-end justify-end'>
                    <hr className='w-[80%]  h-0.5'></hr>
                </div>
            </>))}
        </div>

    )
}

export default Index