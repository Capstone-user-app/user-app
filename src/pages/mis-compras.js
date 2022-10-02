import * as React from 'react'
import { useEffect, useState } from 'react'
import {Button} from '@mui/material'
/*
import InfoState from '../components/infoState'

 const State = ({ packageHistory, stateActual }) => {
    for( let i = 0; i < packageHistory.length; i +=1){
      const {packageStatus, date} = packageHistory[i]
      let text = ''
      let color = 'blue'
      if (packageStatus === 1 && stateActual === 1) {
        text = 'Comprado'
        color = 'green'
        return <InfoState text={text} date={date} color={color}/>
      }
      if (packageStatus === 2 && stateActual === 2) {
        text = 'Procesado'
        return <InfoState text={text} date={date} color={color}/>
      }
      if (packageStatus === 3 && stateActual === 3) {
        text = 'En tránsito'
        return <InfoState text={text} date={date} color={color}/>
      }
      if (packageStatus === 4 && stateActual === 4) {
        text = 'Recepcionado por el punto'
        return <InfoState text={text} date={date} color={color}/>
      }
      if (packageStatus === 7 && stateActual === 7) {
        text = 'Entregado al cliente'
        return <InfoState text={text} date={date} color={color}/>
      }
    }
      return null
} */

const MisCompras = () => {
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
    <div className='bg-azul p-3'>
      <div className='rounded-2xl p-3'>
        <div className='text-center text-2xl text-white mb-8 md:text-3xl'>Mis Compras</div>
        <div className='flex flex-row mb-4'>
          <Button className='basis-1/2' >Fecha</Button>
          <Button className='basis-1/2' >Ecommerce</Button>
        </div>
        <div className='flex flex-col justify-center md:text-xl' >
            {purchases.map((purchase) => (
              <div className="m-3 rounded-md bg-white flex flex-row justify-around text-[10px]">
                <div className="my-16 ml-6  md:my-24">
                  <p>ACA VAN LAS IMAGENES</p>
                </div>
                <div className="flex flex-col m-6 md:p-8">
                  <div>
                    <b>Estado:</b>
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
                  <p>ACA VA LA FLECHA</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MisCompras
