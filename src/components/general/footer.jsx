import React from 'react'

const Footer = () => (
  <footer className="mt-auto bg-white p-4 md:flex md:items-center md:justify-between md:p-6">
    <span className="text-sm sm:text-center"><a href="https://pinflag.cl/" className="hover:underline">Pinflag</a>© 2022
    </span>
    <ul className="mt-3 flex flex-wrap items-center text-xs sm:mt-0 md:text-sm">
        <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">Quiénes somos</a>
        </li>
        <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">Servicios</a>
        </li>
        <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">Política de privacidad</a>
        </li>
        <li>
            <a href="/" className="hover:underline">Contacto</a>
        </li>
    </ul>
  </footer>
  )

export default Footer
