import * as React from 'react'
import { useEffect, useState } from 'react'

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
    <div className='bg-blue-500 p-5'>
      <div className='rounded-2xl bg-white p-5 sm:bg-blue-500'>
        <div className='rounded-lg text-center text-2xl
        text-blue-500 sm:text-left sm:text-white'>Mis Compras</div>
          <div  >
            {purchases.map((purchase) => (
            <div key={purchase.orden_venta} className="m-2 rounded-md bg-white flex flex-row ">
              <div>
                <img className="rounded-md w-40 md:w-20 lg:w-20 " src = {purchase.imagen} alt = 'hola'/>
              </div>
              <div className="">
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
