import React from "react";
import {Link} from "react-router-dom"

function MiniNavbar({OpenClose}){
    return (
        <div className="grid grid-rows  text-center items-center bg-white shadow-xl shadow-blue/40 absolute inset-y-auto right-0 w-40" onClick={OpenClose}>
            <Link to='/' className='p-4'>Quiénes somos</Link>
            <Link to='/' className='p-4'>Servicios</Link>
            <Link to='/' className='p-4'>FAQ</Link>
        </div>
    )
}
export default MiniNavbar;