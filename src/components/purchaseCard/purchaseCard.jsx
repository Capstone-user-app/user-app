import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useNavigate } from 'react-router-dom'
import InfoState from './infoState'
import InfoOrder from './infoOrder'
import InfoProducts from './infoProducts'

/* Muestra la información de cada compra en forma de una tarjeta (card).
Recibe como props los múltiples datos de la compra.
Cada dato es mostrado en un componente diferente, y estos son:
- InfoState: muestra el estado actual de la compra.
- InfoOrder: muestra el número de orden y la fecha de compra.
- InfoProducts: muestra los productos comprados. */

const PurchaseCard = (props) => {
  const { saleOrder, imageEcommerce, packageStatus, products, packageHistory } = props

  const history = useNavigate()

  return (
    <div className="mb-3 grid grid-cols-12 grid-rows-6 rounded-md bg-white py-3 pr-2 shadow-lg md:py-8">
      <div className="col-start-1 col-end-4 row-start-1 row-end-7 place-self-center">
        <div className="mx-1 flex  flex-col space-y-2 -space-x-0 lg:flex-row lg:space-x-2 lg:-space-y-0">
          {products.slice(0, 3).map((prod) => (
              <img className="h-10 w-10 grow rounded-md object-fill sm:h-14 sm:w-14 md:h-16 md:w-16" src={prod.photoUrl[0].URLIMAGEN} alt="" />
          ))}
        </div>
      </div>
      <div className="col-start-4 col-end-11 row-start-1 row-end-3 hidden pr-2 text-base md:col-start-8 md:col-end-12 md:row-start-1 md:row-end-4 md:block md:self-center">
        <InfoState states={packageHistory} stateActual={packageStatus} />
      </div>
      <div className="col-start-4 col-end-11 row-start-3 row-end-5 hidden pr-2 text-base md:col-start-4 md:col-end-8 md:row-start-4 md:row-end-7 md:block">
        <InfoProducts products={products} />
      </div>
      <div className="col-start-4 col-end-11 row-start-5 row-end-7 hidden pr-2 text-base md:col-start-8 md:col-end-12 md:row-start-4 md:row-end-7 md:block">
        <InfoOrder saleOrder={saleOrder} packageHistory={packageHistory} />
      </div>
      <div className='col-start-4 col-end-11 row-start-1 row-end-7 self-center pr-2 text-sm md:hidden'>
        <InfoState states={packageHistory} stateActual={packageStatus} />
        <InfoProducts products={products} />
        <InfoOrder saleOrder={saleOrder} packageHistory={packageHistory} />
      </div>
      <div className="col-start-11 col-end-13 row-start-1 row-end-3 self-center justify-self-center md:col-start-4 md:col-end-8 md:row-start-1 md:row-end-4 md:self-end md:justify-self-start">
        <img src={imageEcommerce} alt="logo" className='h-10 w-16 object-contain' />
      </div>
      <div className="col-start-11 col-end-13 row-start-3 row-end-5 place-self-center md:col-start-12 md:col-end-13 md:row-start-1 md:row-end-7">
        <IconButton onClick={() => history(`/pedidos/${saleOrder}`)} aria-label="detalle" size="large">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default PurchaseCard
