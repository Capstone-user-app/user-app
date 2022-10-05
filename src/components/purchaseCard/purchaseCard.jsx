import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import InfoState from './infoState'
import InfoOrder from './infoOrder'
import InfoProducts from './infoProducts'



  const purchaseCard = (props) => {
    const {saleOrder, ecommerce, imageEcommerce, packageStatus, products, packageHistory} = props

    console.log(saleOrder)
    console.log(ecommerce)
    console.log(imageEcommerce)
    console.log(packageStatus)
    console.log(products)
    console.log(packageHistory)

    return (
      <div className="mb-2 grid grid-cols-12 grid-rows-6 rounded-sm bg-white px-4 py-6 shadow-lg">
        <div className="col-start-1 col-end-4 row-start-1 row-end-7 m-0 place-self-center pt-2">
          <div className="m-0 mb-5 flex flex-col -space-y-2 -space-x-0 md:flex-row md:-space-x-2 md:-space-y-0">
              <img className="h-16 w-16 rounded-full border-2 border-white dark:border-gray-800 md:h-20 md:w-20" src="/docs/images/people/profile-picture-5.jpg" alt="" />
              <img className="h-16 w-16 rounded-full border-2 border-white dark:border-gray-800  md:h-20 md:w-20" src="/docs/images/people/profile-picture-2.jpg" alt="" />
              <img className="h-16 w-16 rounded-full border-2 border-white dark:border-gray-800  md:h-20 md:w-20" src="/docs/images/people/profile-picture-3.jpg" alt="" />
          </div>
        </div>
        <div className="col-start-4 col-end-11 row-start-1 row-end-3 pr-2 md:col-start-8 md:col-end-12 md:row-start-1 md:row-end-4">
          <InfoState states={packageHistory} stateActual={packageStatus}/>
        </div>
        <div className="col-start-4 col-end-11 row-start-3 row-end-5 pr-2 md:col-start-4 md:col-end-8 md:row-start-4 md:row-end-7">
          <InfoProducts products={products}/>
        </div>
        <div className="col-start-4 col-end-11 row-start-5 row-end-7 pr-2 md:col-start-8 md:col-end-12 md:row-start-4 md:row-end-7">
          <InfoOrder saleOrder={saleOrder} packageHistory={packageHistory} />
        </div>
        <div className="col-start-11 col-end-13 row-start-1 row-end-3 self-center justify-self-center md:col-start-4 md:col-end-8 md:row-start-1 md:row-end-4 md:self-end md:justify-self-start">
          <img src={imageEcommerce} alt="logo" className='h-10 w-16 object-contain'/>
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
