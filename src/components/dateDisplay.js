import React from 'react'

/* DateDisplay: recibe como prop una fecha en formato ISO y la muestra
en formato legible por seres humanos (ej: 1 de enero de 2020) */

const DateDisplay = ({ date }) => {
    const parsedDate = new Date(date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = parsedDate.toLocaleDateString('es-ES', options)

    return (
        <div>{formattedDate}</div>
    )
}

export default DateDisplay
