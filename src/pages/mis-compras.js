import * as React from 'react'
import { useEffect, useState } from 'react'
import {Button} from '@mui/material'

const MisCompras = () => {
  const [purchases, setPurchase] = useState([])

  // petición a la api de compras para el usuario actual
  useEffect(() => {
    fetch('api/purchases')
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson)
        setPurchase(resJson)
      })
  }, [])

  // rendererizar la lista de compras
  return (
    <div className='bg-azul p-3'>
      <div className='rounded-2xl p-3'>
        <div className='text-center text-2xl text-white mb-8 md:text-3xl'>Mis Compras</div>
        <div className="flex flex-row mb-4 ">
          <Button className='basis-1/2' >Fecha</Button>
          <Button className='basis-1/2' >Ecommerce</Button>
        </div>
        <div className="flex flex-col justify-center md:text-xl" >
            {purchases.map((purchase) => (
            <div className="m-6 rounded-md bg-white flex flex-row">
              <div className="my-16 ml-6  md:my-24">
                <img className="rounded-md w-32 h-24 md:w-40 md:h-32 md:ml-8" src = {purchase.imagen} alt = 'hola'/>
              </div>
              <div className="m-6 md:p-8">
              <b>Productos:</b>
                {purchase.products.map((product) => (
                  <div >
                    <p>{product.name}</p>
                  </div>
                ))}
                <b>Orden de compra:</b>
                <p>{purchase.orden_venta}</p>
                <b>Fecha de compra:</b>
                <p>{purchase.fecha_venta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MisCompras
