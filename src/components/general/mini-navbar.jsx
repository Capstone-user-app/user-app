import React from 'react'
import Box from '@mui/material/Box'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import Login from '../authentication/login'
import Logout from '../authentication/logout'
import Loading from '../ui/loading'

const MiniNavbar = ({ OpenClose }) => {
    const { isAuthenticated, isLoading } = useAuth0()
    if (isLoading) return (<Loading />)

    return (
        <Box className="absolute top-16 right-0 grid w-40 items-center rounded-b-md bg-white p-2 text-center text-lg shadow-xl shadow-blue/40 " onClick={OpenClose}>
            {!isAuthenticated && <Login />}
            {isAuthenticated &&  <>
                <Link to="/pedidos" className='hover:bg-gray'>Mis Pedidos</Link>
                <Logout className="p-2 hover:bg-gray"/>
            </>}
        </Box>
    )
}
export default MiniNavbar
