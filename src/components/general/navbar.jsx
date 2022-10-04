import React from 'react'
import { Link  } from 'react-router-dom'
import Box from '@mui/material/Box'
import logo from '../../assets/logo_pinflag_vertical.png'


const Navbar = ({OpenClose}) => (
        <nav className="relative flex h-16 items-center justify-between bg-white text-black shadow-lg">

            <div className="ml-6 flex h-12 w-12 flex-wrap place-content-center">
                <Link to="/" className="">
                    <img src={logo} className="object-scale-down" alt="logo" />
                </Link>
            </div>

            <Box className="cursor-pointer px-4 md:hidden" onClick={OpenClose}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

            </Box>
            <div className="hidden pr-6 md:block ">
                <Link to='/' className='p-4'>Quiénes somos</Link>
                <Link to='/' className='p-4'>Servicios</Link>
                <Link to='/' className='p-4'>FAQ</Link>
            </div>


        </nav>
    )

export default Navbar
