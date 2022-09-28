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
        <ul>
          {purchases.map((purchase) => (
            <li key={purchase.id} className="m-2 rounded-md bg-white">
              <h2>{purchase.name}</h2>
              <p>{purchase.warehouseName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MisCompras
