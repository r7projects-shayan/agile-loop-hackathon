import React, { useState } from 'react'
import Logo from '/images/img_header_logo.png'
import { FaBars, } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

function NavbarTwo() {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    return (
        <header className="landing-bg text-gray-200 mb-3 pb-4">
            <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <a href='/' className="flex flex-row gap-1 text-3xl font-bold text-gray-400">

                    <img
                        src={Logo}
                    />
                </a>
                <nav className='md:block hidden'>
                    <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium">Features</a>
                    <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                    <a href="/signup" className=" px-3 py-2 rounded-md text-sm font-medium">Sign Up</a>
                    <a href="/login" className="  px-3 py-2 rounded-md text-sm font-medium">Login</a>

                </nav>
                <a href="tel:+1(788)888888" className="bg-blue-500 hidden md:block text-white px-3 py-2 rounded-md text-sm 
                    font-medium hover:bg-blue-700">Contact Us
                </a>

                <div className='md:hidden ' onClick={toggleMenu}>
                    <FaBars />
                </div>
                {menu ?
                    <nav className="absolute bg-[#0d0d0d] rounded-b-lg z-30 left-0 top-0 shadow-lg w-[100%]">
                        <div className='flex justify-between px-6 py-3 '>

                            <div className='flex items-start flex-col gap-3'>
                                <a href='/' className="flex flex-row gap-1 text-3xl font-bold text-gray-400">

                                    <img
                                        src={Logo}
                                    />
                                </a>
                                <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium">Features</a>
                                <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                                <a href="/signup" className=" px-3 py-2 rounded-md text-sm font-medium">Sign Up</a>
                                <a href="/login" className="  px-3 py-2 rounded-md text-sm font-medium">Login</a>
                                <a href="tel:+1(788)888888" className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm 
                                font-medium hover:bg-blue-700">Contact Us</a>
                            </div>
                            <FaX className='h-6 bg-blue-500 rounded-full text-white w-6 p-2' onClick={toggleMenu} />
                        </div>
                    </nav>
                    : <div className='hidden'></div>
                }
            </div>


        </header>
    )
}

export default NavbarTwo