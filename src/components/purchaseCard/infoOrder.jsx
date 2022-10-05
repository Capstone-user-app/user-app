import React from 'react'
import DateDisplay from '../dateDisplay'

const InfoOrder = (props) => {
    const { saleOrder, packageHistory } = props
    // const parsedDate = new Date(date)
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    // const formattedDate = parsedDate.toLocaleDateString('es-ES', options)

    return (
        <div>
            <div className='flex flex-row'>
                <div className='mr-2 font-bold text-gray-500 '>Orden de compra: </div>
                <div className='text-gray-500'>{saleOrder}</div>
            </div>
            <div className='flex flex-row '>
                <div className='mr-2 font-bold text-gray-500 '>Fecha de compra:</div>
                <div className='text-gray-500'><DateDisplay date={packageHistory[0].date} /></div>
            </div>
        </div>
    )
}

export default InfoOrder
