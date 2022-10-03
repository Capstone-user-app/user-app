import React from 'react'

const DateDisplay = ({ date }) => {
    const parsedDate = new Date(date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = parsedDate.toLocaleDateString('es-ES', options)

    return (
        <div>{formattedDate}</div>
    )
}

export default DateDisplay
