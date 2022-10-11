import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import logo from '../../assets/logo_pinflag_vertical.png'

const Navbar = () => {

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname)

    let mostrar = 'block'

    if (location.pathname === '/pedidos' || location.pathname.includes('/crear_ticket')){
        mostrar = 'none'
    }

    return(
        <nav className="relative flex h-16 items-center justify-between bg-white px-2 py-2.5 text-black shadow-lg sm:px-4">
            <div className='container mx-auto flex flex-wrap items-center justify-between'>
                <div className="flex items-center ">
                    <ArrowBackIcon sx={{ display: {xs: mostrar, md: mostrar, lg:mostrar, xl: mostrar} }} onClick={() => navigate(-1)} />
                </div>
                <div className=" space-x-6 md:block">
                    <Link to="/" className="">
                        <img src={logo} className="mr-3 h-8 sm:h-12 " alt="logo" />
                    </Link>
                </div>
                <div className="">
                    <Link to="/" className="">
                        <DensityMediumIcon className=""/>
                    </Link>
                </div>

            </div>
        </nav>
    )
}


export default Navbar
