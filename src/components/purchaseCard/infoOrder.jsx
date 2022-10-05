import React from 'react'
import DateDisplay from '../dateDisplay'

const InfoOrder = (props) => {
    const { saleOrder, packageHistory } = props
    // const parsedDate = new Date(date)
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    // const formattedDate = parsedDate.toLocaleDateString('es-ES', options)

    return (
        <div>
            <div className=''>Orden de compra: {saleOrder}</div>
            <div>Fecha de compra: <DateDisplay date={packageHistory[0].date} /> </div>
        </div>
    )
}

export default InfoOrder
