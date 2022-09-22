import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import MiniNavbar from "./mini-navbar";
import { Input } from "postcss";

function Layout({children}){

    const[isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            };
        };
        window.addEventListener("resize", hideMenu)

        return () => {
            window.removeEventListener("resize", hideMenu)
        };
    });

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className="h-screen">
            <Navbar OpenClose={toggleOpen}/>
            {isOpen && <MiniNavbar OpenClose={toggleOpen}/>}
            {children}
        </div>
    )

}

export default Layout;