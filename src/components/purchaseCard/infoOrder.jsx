import React from 'react'
import DateDisplay from '../dateDisplay'

/* InfoOrder: muestra el número de orden y la fecha de compra. */

const InfoOrder = (props) => {
    const { saleOrder, packageHistory } = props

    return (
        <div>
            <div className='flex flex-row'>
                <div className='mr-1 font-bold text-gray-500 '>Orden: </div>
                <div className='text-gray-500'>{saleOrder}</div>
            </div>
            <div className='flex flex-row'>
                <div className='mr-1 flex-initial font-bold text-gray-500 '>Fecha de compra:</div>
                <div className='flex-initial text-gray-500 '><DateDisplay date={packageHistory[0].date} /></div>
            </div>
        </div>
    )
}

export default InfoOrder
