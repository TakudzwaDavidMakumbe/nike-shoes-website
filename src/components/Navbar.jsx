import React from 'react'
import logo from "../assets/logo.png"
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'

const NavbarMenu =[
    {
        id: 1,
        link: "/",
        title: "New Release",
        delay: "0.2"
    },
    {
        id: 2,
        link: "#",
        title: "Man Collection",
        delay: "0.4"
    },
    {
        id: 3,
        link: "#",
        title: "Woman Collection",
        delay: "0.6"
    },
    {
        id: 4,
        link: "#",
        title: "Kids Collection",
        delay: "0.8"
    },
    {
        id: 5,
        link: "#",
        title: "Customize",
        delay: "1"
    }
]
const Navbar = () => {
  return (
    <nav className=" bg-primary text-white">
        <div className="container items-center py-6 flex justify-between items-center">
            {/* logo */}
            <div>
                <a href="/">
                    <img src={logo} alt="logo" className="w-[100px]"/>
                </a>
            </div>
            {/* menu */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-4'>
                    {
                        NavbarMenu.map((item) => (
                            <li key={item.id}>
                                <a href={item.link}className='inline-block py-2 px-4 
                                uppercase font-barlow font-semibold hover:scale-105 duration-300'>
                                    {item.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* icons */}
            <div className='flex items-center gap-4'>
                <div className='flex-2xl cursor-pointer relative'>
                    <FaRegUserCircle/>
                </div>
                <div>
                    <MdOutlineShoppingBag/>
                </div>
            </div>
            
            {/* Mobile Humburger section */}
            <div className='md:hidden'>

            </div>

        </div>
    </nav>
  )
}

export default Navbar