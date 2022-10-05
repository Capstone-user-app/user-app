import * as React from 'react'
import { useEffect, useState } from 'react'
import {Button} from '@mui/material'
import InfoState from '../components/infoState'

const DetalleCompra = () => {
  const [purchases, setPurchase] = useState([])
  // petición a la api de compras para el usuario actual
  useEffect(() => {
    fetch('api/purchases')
      .then((res) => res.json())
      .then((resJson) => {
        setPurchase(resJson)
      })
  }, [])
  // rendererizar la lista de compras
  return (
    <div className='p-3'>
      <div className='rounded-2xl p-3'>
        <div className='mb-8 text-center text-2xl text-white md:text-3xl'>Mis Compras</div>
        <div className='mb-4 flex flex-row'>
          <Button className='basis-1/2' >Fecha</Button>
          <Button className='basis-1/2' >Ecommerce</Button>
        </div>
        <div className='flex flex-col justify-center md:text-xl' >
            {purchases.map((purchase) => (
              <div className="m-3 flex flex-row justify-around rounded-md bg-white text-[10px]">
                <div className="my-16 ml-6  md:my-24">
                  <p>ACA VAN LAS IMAGENES</p>
                </div>
                <div className="m-6 flex flex-col md:p-8">
                  <div>
                    <InfoState states={purchase.packageHistory} stateActual={purchase.packageStatus}/>
                  </div>
                  <div>
                    <b>Productos:</b>
                      {purchase.products.map((p) => (
                        <p>{p.productName}</p>
                      ))}
                  </div>
                  <div>
                    <b>Orden de compra:</b>
                    <p>{purchase.saleOrder}</p>
                    <b>Fecha de compra:</b>
                  </div>
                </div>
                <div className="my-16 ml-6  md:my-24">
                  <p>ACA VA LA FLECHcdA</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default DetalleCompra
