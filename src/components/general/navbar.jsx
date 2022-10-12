import {React, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
// import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import logo from '../../assets/logo_pinflag_vertical.png'
import menu from '../../assets/icono_opciones.png'

function getWindowSize() {
    const {innerWidth, innerHeight} = window
    return {innerWidth, innerHeight}
  }

const Navbar = () => {

    const navigate = useNavigate()
    const location = useLocation()

    let mostrar = 'visible'

    if (location.pathname === '/pedidos' || location.pathname.includes('/crear_ticket')){
        mostrar = 'invisible'
    }

    let TamañoMenu = 'h-6'

    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
        window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    if(windowSize.innerWidth <= 420){
        TamañoMenu = 'h-8'
    }

    return(
        <nav className="relative flex h-16 items-center justify-between bg-white px-2 py-2.5 text-black shadow-lg sm:px-4">
            <div className='container mx-auto flex flex-wrap items-center justify-between h-12'>
                <div className="flex items-center ">
                    <ArrowBackIcon className={mostrar} onClick={() => navigate(-1)} />
                </div>
                <div className=" space-x-6 md:block">
                    <Link to="/" className="">
                        <img src={logo} className="h-12" alt="logo" />
                    </Link>
                </div>
                <div className="">
                    <Link to="/" className="">
                        <img src={menu} className={TamañoMenu} alt= "Logo" />
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
