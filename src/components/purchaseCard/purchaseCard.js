import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import InfoState from './infoState'




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
        <div className="col-start-1 col-end-4 row-start-1 row-end-7 bg-green-300">
        <AvatarGroup max={3} sx={{ writingMode: 'vertical-rl' }}>
          <Avatar alt="Remy Sharp" src="" sx={{ width: 56, height: 56 }} />
          <Avatar alt="Travis Howard" src="" sx={{ width: 56, height: 56 }}/>
          <Avatar alt="Cindy Baker" src="" sx={{ width: 56, height: 56 }}/>
        </AvatarGroup>
        </div>
        <div className="col-start-4 col-end-11 row-start-1 row-end-3 pr-2 md:col-start-8 md:col-end-12 md:row-start-1 md:row-end-4">
          <InfoState states={packageHistory} stateActual={packageStatus}/>
        </div>
        <div className="col-start-4 col-end-11 row-start-3 row-end-5 pr-2 md:col-start-4 md:col-end-8 md:row-start-4 md:row-end-7">Productos</div>
        <div className="col-start-4 col-end-11 row-start-5 row-end-7 pr-2 md:col-start-8 md:col-end-12 md:row-start-4 md:row-end-7">Orden y Fecha</div>
        <div className="col-start-11 col-end-13 row-start-1 row-end-3 self-center justify-self-center md:col-start-4 md:col-end-8 md:row-start-1 md:row-end-4 md:self-end md:justify-self-start">
          <img src={imageEcommerce} alt="logo" className='w-18 h-10 object-contain'/>
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
