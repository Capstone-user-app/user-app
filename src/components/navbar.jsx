import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function Navbar({OpenClose}) {

    const history = useNavigate();

    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-lg">

            <Link to="/" className="pl-8">
            <div className="w-12 h-12 flex flex-wrap justify-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIyfzyeZpP2YI10gDUPyQtRYxAwtMfWrZ88Uqs8OJSYahOUBBHTU2DdzUhxCJ8fNKHz0&usqp=CAU"/>
                </div>
            </Link>

            <div className="px-4 cursor-pointer md:hidden" onClick={OpenClose}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

            </div>
            <div className="pr-6 hidden md:block ">
                <Link to='/' className='p-4'>Quiénes somos</Link>
                <Link to='/' className='p-4'>Servicios</Link>
                <Link to='/' className='p-4'>FAQ</Link>
            </div>
            

        </nav>
    )
    
}

export default Navbar;