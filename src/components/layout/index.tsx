import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import administrationIcon from '../../assets/administrationIcon.svg'
import pharmacieIcon from '../../assets/pharmacieIcon.svg'
import performanceIcon from '../../assets/performanceIcon.svg'
import telemedecineIcon from '../../assets/telemedecineIcon.svg'
import facturationIcon from '../../assets/facturationIcon1.svg'
import logoutIcon from '../../assets/logoutIcon.svg'
import { TbLayoutSidebarRight } from "react-icons/tb";
import FilterComponent from '../filterBar'
import MainContent from '../mainContent'
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
const menuItems = [
    { path: "/patient", title: 'Administration des Patients et Services', icon: administrationIcon },
    { path: "/medication", title: 'Gestion Médicale et Pharmaceutique', icon: pharmacieIcon },
    { path: "/performance", title: 'Performance Clinique et Épidémiologie', icon: performanceIcon },
    { path: "/telemedcine", title: 'Télémédecine', icon: telemedecineIcon },
    { path: "/billing", title: 'Facturation et Cotation', icon: facturationIcon },
    { path: "/", title: 'Déconnexion', icon: logoutIcon },
]
export default function Index() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <>
            <div className="min-h-full">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4  bg-gradient-to-r from-blue-500 to-cyan-500">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                           <AiOutlineClose />
                                            <span className="sr-only">Close sidebar</span>

                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-shrink-0 flex items-center px-4">
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt="Easywire logo"
                                    />
                                </div>
                                <nav
                                    className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                                    aria-label="Sidebar"
                                >
                                    <div>
                                        {menuItems.map((item, index) => (<>
                                            <Link to={item.path} className='flex items-start h-20' key={index}  >
                                                <button
                                                    className={` ${selectedIndex === index ? 'bg-red-600 rounded-tr-3xl rounded-br-lg w-auto h-[4rem]' : 'text-left bg-transparent text-white rounded-tr-3xl rounded-br-lg w-auto h-[4rem]'}`}
                                                    onClick={() => setSelectedIndex(index)}
                                                >
                                                    <img src={item.icon} alt='' />
                                                </button>
                                                <button
                                                    className={`${selectedIndex === index ? 'text-left bg-[#0a376c] rounded-tl-3xl rounded-bl-lg  h-[4rem] w-[100%] text-white text-lg ml-[-7px] pl-9' : 'text-left bg-transparent text-white rounded-tl-3xl rounded-bl-lg  h-[4rem] w-[100%] text-lg ml-[-7px] pl-9'}`}
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

                                </nav>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col flex-grow bg-gradient-to-r from-blue-500 to-cyan-500 pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center justify-center flex-shrink-0 px-4">
                            <img
                                className="h-8 w-auto"
                                src={logo}
                                alt="digihealt logo"
                            />
                        </div>
                        <nav className="mt-5 flex-1 flex flex-col divide-y w-22  overflow-y-auto" aria-label="Sidebar">
                            <div>
                                {menuItems.map((item, index) => (<>
                                    <Link to={item.path} className='flex items-start h-20' key={index}  >
                                        <button
                                            className={` ${selectedIndex === index ? 'bg-red-600 rounded-tr-3xl rounded-br-lg w-[3rem] h-[4rem]' : 'text-left bg-transparent text-white rounded-tr-3xl rounded-br-lg w-[3rem] h-[4rem]'}`}
                                            onClick={() => setSelectedIndex(index)}
                                        >
                                            <img src={item.icon} alt='' />
                                        </button>
                                        <button
                                            className={`${selectedIndex === index ? 'text-left text-white bg-[#0a376c] rounded-tl-3xl rounded-bl-lg  h-[4rem] w-[100%] text-md ml-[-7px] pl-9' : 'text-left bg-transparent text-white rounded-tl-3xl rounded-bl-lg  h-[4rem] w-[100%] text-md ml-[-7px] pl-9'}`}
                                            onClick={() => setSelectedIndex(index)}
                                        >
                                            {item.title}
                                        </button>
                                    </Link>
                                    <div className=''></div>
                                    <div className='flex items-end justify-end'>
                                        <hr className='w-[80%]  h-0.5 '></hr>
                                    </div>
                                </>))}
                            </div>

                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72 flex flex-col flex-1">
                    <div className="relative z-10 flex-shrink-0 flex h-20  bg-white border-b border-gray-200 lg:border-none">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <IoMdMenu />
                            <span className="sr-only">Open sidebar</span>

                        </button>
                        {/* Menu bar */}
                        <div className="flex-1 flex justify-end item-center  sm:px-6  lg:mx-auto lg:px-1">
                            <div className="flex items-center md:ml-6">


                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="max-w-xs gap-3 bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                                            <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                                                <span className="sr-only">Open user menu for </span>USer FullName
                                            </span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />

                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button

                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button

                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button

                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Logout
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className="flex-1 pb-8 bg-[#E2F2F3]">


                        <div>
                            <MainContent />
                            {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
                                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                
                                    {cards.map((card) => (
                                        <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
                                            <div className="p-5">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-5 w-0 flex-1">
                                                        <dl>
                                                            <dt className="text-sm font-medium text-gray-500 truncate">{card.name}</dt>
                                                            <dd>
                                                                <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-5 py-3">
                                                <div className="text-sm">
                                                    <a href={card.href} className="font-medium text-cyan-700 hover:text-cyan-900">
                                                        View all
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
                                Recent activity
                            </h2> */}

                            {/* Activity list (smallest breakpoint only) */}
                            {/* <div className="shadow sm:hidden">
                                <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                                    {transactions.map((transaction) => (
                                        <li key={transaction.id}>
                                            <a href={transaction.href} className="block px-4 py-4 bg-white hover:bg-gray-50">
                                                <span className="flex items-center space-x-4">
                                                    <span className="flex-1 flex space-x-2 truncate">

                                                        <span className="flex flex-col text-gray-500 text-sm truncate">
                                                            <span className="truncate">{transaction.name}</span>
                                                            <span>
                                                                <span className="text-gray-900 font-medium">{transaction.amount}</span>{' '}
                                                                {transaction.currency}
                                                            </span>
                                                            <time dateTime={transaction.datetime}>{transaction.date}</time>
                                                        </span>
                                                    </span>

                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <nav
                                    className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
                                    aria-label="Pagination"
                                >
                                    <div className="flex-1 flex justify-between">
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                                        >
                                            Previous
                                        </a>
                                        <a
                                            href="#"
                                            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                                        >
                                            Next
                                        </a>
                                    </div>
                                </nav>
                            </div> */}

                            {/* Activity table (small breakpoint and up) */}
                            {/* <div className="hidden sm:block">
                                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex flex-col mt-2">
                                        <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Transaction
                                                        </th>
                                                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Amount
                                                        </th>
                                                        <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                                                            Status
                                                        </th>
                                                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            Date
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {transactions.map((transaction) => (
                                                        <tr key={transaction.id} className="bg-white">
                                                            <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                                <div className="flex">
                                                                    <a href={transaction.href} className="group inline-flex space-x-2 truncate text-sm">

                                                                        <p className="text-gray-500 truncate group-hover:text-gray-900">
                                                                            {transaction.name}
                                                                        </p>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                                <span className="text-gray-900 font-medium">{transaction.amount} </span>
                                                                {transaction.currency}
                                                            </td>
                                                            <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                                                <span

                                                                >
                                                                    {transaction.status}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                                <time dateTime={transaction.datetime}>{transaction.date}</time>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                           
                                            <nav
                                                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                                aria-label="Pagination"
                                            >
                                                <div className="hidden sm:block">
                                                    <p className="text-sm text-gray-700">
                                                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                                        <span className="font-medium">20</span> results
                                                    </p>
                                                </div>
                                                <div className="flex-1 flex justify-between sm:justify-end">
                                                    <a
                                                        href="#"
                                                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                    >
                                                        Previous
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                    >
                                                        Next
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}