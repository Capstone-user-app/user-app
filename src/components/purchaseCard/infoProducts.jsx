import * as React from 'react'
/* eslint-disable eol-last */

const InfoProducts = (props) => {
  const { products } = props
  const nProducts = products.length
  let textProducts = ''
  if (nProducts === 1){
    textProducts += products[0].productName
  }
  if (nProducts === 2){
    textProducts += products[0].productName
    textProducts += ', '
    textProducts += products[1].productName
  }
  if (nProducts === 3){
    textProducts += products[0].productName
    textProducts += ', '
    textProducts += products[1].productName
    textProducts += ', '
    textProducts += products[2].productName
  }
  if (nProducts > 3){
    textProducts += products[0].productName
    textProducts += ', '
    textProducts += products[1].productName
    textProducts += ', '
    textProducts += products[2].productName
    textProducts += ` y ${nProducts - 3} más ...`
  }
  return (
    <div>
        <p>{textProducts}</p>
    </div>
  )
}

export default InfoProducts