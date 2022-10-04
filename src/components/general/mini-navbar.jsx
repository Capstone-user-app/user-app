import React from 'react'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box'

const MiniNavbar = ({OpenClose}) => (
        <Box className="absolute  inset-y-auto right-0 grid w-40 items-center bg-white text-center shadow-xl shadow-blue/40" onClick={OpenClose}>
            <Link to='/' className='p-4'>Quiénes somos</Link>
            <Link to='/' className='p-4'>Servicios</Link>
            <Link to='/' className='p-4'>FAQ</Link>
        </Box>
    )

export default MiniNavbar
