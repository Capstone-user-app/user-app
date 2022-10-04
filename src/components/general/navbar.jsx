import React from 'react'
import { Link  } from 'react-router-dom'
import Box from '@mui/material/Box'
import { useAuth0 } from '@auth0/auth0-react'
import logo from '../../assets/logo_pinflag_vertical.png'
import Loading from '../ui/loading'
import Login from '../authentication/login'
import Logout from '../authentication/logout'

const Navbar = ({OpenClose}) => {

    const { isAuthenticated, isLoading } = useAuth0()

    if (isLoading) return (<Loading/>)

    return (
        <nav className="relative flex h-16 items-center justify-between bg-white px-2 py-2.5 text-black shadow-lg sm:px-4">
            <div className='container mx-auto flex flex-wrap items-center justify-between'>

                <div className="flex items-center">
                    <Link to="/" className="">
                        <img src={logo} className="mr-3 h-8 sm:h-12 " alt="logo" />
                    </Link>
                </div>
                <Box className="cursor-pointer px-4 md:hidden" onClick={OpenClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </Box>
                <div className="hidden pr-6 md:block ">
                    {!isAuthenticated &&  <Login classN="p-4"/>}
                    {isAuthenticated &&  <Logout classN="p-4"/>}
                </div>
            </div>


        </nav>
    )
}


export default Navbar
