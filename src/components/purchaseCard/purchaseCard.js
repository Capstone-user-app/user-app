import * as React from 'react'

  const purchaseCard = (props) => {
    const {saleOrder, ecommerce, imageEcommerce, packageStatus, products, packageHistory} = props

    console.log(saleOrder)
    console.log(ecommerce)
    console.log(imageEcommerce)
    console.log(packageStatus)
    console.log(products)
    console.log(packageHistory)

    return (
      <div className="mb-2 grid grid-cols-12 grid-rows-6 rounded-sm bg-white p-2 shadow-lg">
        <div className="col-start-1 col-end-4 row-start-1 row-end-7 bg-green-300">Imagenes</div>
        <div className="col-start-4 col-end-11 row-start-1 row-end-3 bg-cyan-300 md:col-start-8 md:col-end-12 md:row-start-1 md:row-end-4">Info estado</div>
        <div className="col-start-4 col-end-11 row-start-3 row-end-5 bg-rose-300 md:col-start-4 md:col-end-8 md:row-start-4 md:row-end-7">Productos</div>
        <div className="col-start-4 col-end-11 row-start-5 row-end-7 bg-yellow-300 md:col-start-8 md:col-end-12 md:row-start-4 md:row-end-7">Orden y Fecha</div>
        <div className="col-start-11 col-end-13 row-start-1 row-end-3 bg-yellow-100 md:col-start-4 md:col-end-8 md:row-start-1 md:row-end-4">logo</div>
        <div className="col-start-11 col-end-13 row-start-3 row-end-5 bg-green-100 md:col-start-12 md:col-end-13 md:row-start-1 md:row-end-7">más</div>
      </div>
    )
  }

  export default purchaseCard
