import React from 'react'
import DateDisplay from '../dateDisplay'

/* InfoOrder: muestra el número de orden y la fecha de compra. */

const InfoOrder = (props) => {
    const { saleOrder, packageHistory } = props

    return (
        <div className='text-xs font-extralight text-gray-500 md:text-base md:font-normal'>
            <div className='flex flex-row'>
                <div className='mr-1  '>Orden: </div>
                <div className=''>{saleOrder}</div>
            </div>
            <div className='flex flex-row'>
                <div className='mr-1 flex-initial  '>Fecha de compra:</div>
                <div className='flex-initial  '><DateDisplay date={packageHistory[0].date} /></div>
            </div>
        </div>
    )
}

export default InfoOrder
