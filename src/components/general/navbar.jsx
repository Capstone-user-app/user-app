import {React, useEffect, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import logo from '../../assets/logo_pinflag_vertical.png'
import Loading from '../ui/loading'
import Login from '../authentication/login'
import Logout from '../authentication/logout'

function getWindowSize() {
    const {innerWidth, innerHeight} = window
    return {innerWidth, innerHeight}
}

const Navbar = ({ OpenClose }) => {

    const { isAuthenticated, isLoading } = useAuth0()
    const navigate = useNavigate()
    const location = useLocation()
    const [windowSize, setWindowSize] = useState(getWindowSize())

    let TamañoMenu = 'h-8'

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
        TamañoMenu = 'h-10'
    }

    if (isLoading) return (<Loading />)

    let mostrar = 'visible'
    if (location.pathname === '/' || location.pathname.includes('/crear_ticket')){
        mostrar = 'invisible'
    }


    return (
        <nav className="relative flex h-16 items-center justify-between bg-white px-2 py-2.5 text-black shadow-lg sm:px-4">
            <div className='container mx-auto flex flex-wrap items-center justify-between'>
                <div className="flex items-center ">
                    <ArrowBackIcon className={mostrar} onClick={() => navigate(-1)} />
                </div>
                <div className="flex items-center">
                    <Link to="/" className="">
                        <img src={logo} className="h-12 " alt="logo" />
                    </Link>
                </div>
                <Box className="cursor-pointer px-4 md:hidden" onClick={OpenClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={TamañoMenu} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </Box>
                <div className="hidden space-x-6 md:block">
                    {!isAuthenticated && <Login />}
                    {isAuthenticated && <>
                        <Link to="/pedidos">Mis Pedidos</Link>
                        <Logout className="p-4" />
                    </>}
                </div>

            </div>
        </nav>
    )
}


export default Navbar
