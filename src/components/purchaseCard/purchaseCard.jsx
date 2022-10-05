import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import InfoState from './infoState'
import InfoOrder from './infoOrder'
import InfoProducts from './infoProducts'



const purchaseCard = (props) => {
  const { saleOrder, ecommerce, imageEcommerce, packageStatus, products, packageHistory } = props

  console.log(saleOrder)
  console.log(ecommerce)
  console.log(imageEcommerce)
  console.log(packageStatus)
  console.log(products)
  console.log(packageHistory)

  return (
    <div className="mb-3 grid grid-cols-12 grid-rows-6 rounded-md bg-white py-3 pr-2 shadow-lg md:py-8">
      <div className="col-start-1 col-end-4 row-start-1 row-end-7 place-self-center">
        <div className="flex flex-col -space-y-2 -space-x-0 lg:flex-row lg:-space-x-2 lg:-space-y-0">
          <img className="h-14 w-14 rounded-full border-2 border-blue md:h-20 md:w-20" src="https://hmchile.vtexassets.com/arquivos/ids/3513702/Polera-de-cuello-redondo-Regular-Fit---Verde---H-M-CL.jpg?v=637796835510300000" alt="" />
          <img className="h-14 w-14 rounded-full border-2 border-blue  md:h-20 md:w-20" src="https://hmchile.vtexassets.com/arquivos/ids/3513702/Polera-de-cuello-redondo-Regular-Fit---Verde---H-M-CL.jpg?v=637796835510300000" alt="" />
          <img className="h-14 w-14 rounded-full border-2 border-blue  md:h-20 md:w-20" src="https://hmchile.vtexassets.com/arquivos/ids/3513702/Polera-de-cuello-redondo-Regular-Fit---Verde---H-M-CL.jpg?v=637796835510300000" alt="" />
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
        <IconButton aria-label="detalle" size="large">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default purchaseCard
