import * as React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import PurchaseCard from '../components/purchaseCard/purchaseCard'

/* Muestra la lista de compras del usuario.
Hace un fetch a la API de compras en cuanto se carga la ruta.
También hace solicitudes hace cuando se filtra por fecha. */

const MyPurchases = () => {

  const { getAccessTokenSilently } = useAuth0()

  const [purchases, setPurchase] = useState([])
  const [open, setOpen] = React.useState(false)
  const [date1, setDate1] = React.useState('')
  const [date2, setDate2] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    // TODO: agregar funcionalidad de filtro de fechas al hacer click a "filtrar"
    // useEffect(() => {
    //   fetch('api/sales')
    //     .then((res) => res.json())
    //     .then((resJson) => {
    //       setPurchase(resJson)
    //     })
    // }, [])
    setOpen(false)
  }

  const handleDate1 = (event) => {
    setDate1(event.target.value)
  }

  const handleDate2 = (event) => {
    setDate2(event.target.value)
  }
  // petición a la api de compras para el usuario actual
  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently()
      fetch('https://9shjd4c13a.execute-api.sa-east-1.amazonaws.com/dev/sales', {
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => res.json())
        .then((resJson) => {
          setPurchase(resJson)
        })
    }
    getToken()
  }, [getAccessTokenSilently])
  // rendererizar la lista de compras
  return (
    <div className='bg-white p-3'>
      <div className='rounded-2xl p-3'>
        <div className='mb-4 text-center text-2xl md:text-3xl'>Mis pedidos</div>
        <div className='mb-4 flex flex-row justify-evenly'>
          <button type='button' onClick={handleClickOpen} className='rounded-full bg-lblue py-2 px-4 text-sm font-medium text-white hover:bg-blue  md:text-lg'>Fecha</button>
          <button type='button' className='rounded-full bg-lblue py-2 px-4 text-sm font-medium text-white hover:bg-blue md:text-lg' >Ecommerce</button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Define un rango de fecha a filtrar</DialogTitle>
            <DialogContent className='flex justify-between'>
              <input type='date' onChange={handleDate1} value={date1} />
              <input type='date' onChange={handleDate2} value={date2} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} className='bg-blue' variant="contained">Filtrar</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className='flex flex-col justify-center md:text-xl' >
          {purchases.map((purchase) => (
            <PurchaseCard saleOrder={purchase.saleOrder} ecommerce={purchase.Ecommerce} imageEcommerce={purchase.imageEcommerce} packageStatus={purchase.packageStatus} products={purchase.products} packageHistory={purchase.packageHistory} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyPurchases
