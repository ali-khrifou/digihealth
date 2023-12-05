import React from 'react'
import loginIcon from '../assets/loginIcon.png'
import atIcon from '../assets/atIcon.svg'
import lockIcon from '../assets/lockIcon.svg'
import loginBg from '../assets/loginBg.png'
import loginBg1 from '../assets/loginBg1.png'
import loginBg2 from '../assets/loginBg2.png'
import { useNavigate } from 'react-router-dom'


function Login() {

    const nav = useNavigate()
    const handleLogin = () => {
        nav('/patient')
    }


    return (
        <div className='bg-gradient-to-t from-[#2BD1D8] to-[#154692] w-full h-[100vh] grid grid-cols-3 items-center justify-center self-center'>

            <div className='w-full h-[100vh] '>
                <img src={loginBg1} alt="" className='ml-[-8rem] mt-[-8rem]' />
            </div>
            <div className="min-h-full flex  items-center justify-center ">
                <div className="flex-1 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 rounded-lg bg-[#e6e6fa3b] p-10" style={{ backgroundImage: `url(${loginBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top left' }}>
                    <div className="mx-auto w-full max-w-sm lg:w-96 items-center justify-center">
                        <div className='flex justify-center'>
                            <img
                                className="h-17 w-auto"
                                src={loginIcon}
                                alt="Workflow"
                            />

                        </div>

                        <div className="mt-8">
                            <div className="mt-6">
                                <form className="flex flex-col justify-center items-center space-y-6 ">
                                    <div className='justify-center items-center'>

                                        <div className="mt-1 w-64 flex justify-center items-center bg-white rounded-lg px-3">
                                            <img src={atIcon} alt='' className='z-20' />
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="appearance-none block w-full px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1 w-64">

                                        <div className="mt-1 flex justify-center items-center bg-white rounded-lg px-3">
                                            <img src={lockIcon} className=' z-20' alt='' />
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 rounded-rt-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type='button' onClick={handleLogin}
                                            className="w-64 flex justify-center py-2 px-4  border border-transparent rounded-md shadow-sm text-sm uppercase font-medium text-white bg-gradient-to-b from-[#0A536F] to-[#000B33] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            SE CONNECTER
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[100vh] grid-flow-row'>
                <img src={loginBg2} alt="" className='relative top-[22rem] w-[20rem] h-96 left-40' />

            </div>




        </div>
    )
}

export default Login