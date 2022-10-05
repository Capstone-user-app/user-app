import * as React from 'react'
import { useEffect, useState } from 'react'
import {Button, Box, Typography, Grid, Avatar, Divider} from '@mui/material'
import { Container } from '@mui/system'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { useNavigate } from 'react-router-dom'

const DetalleCompra = () => {
  const [purchases, setPurchase] = useState()
  // petición a la api de compras para el usuario actual
  useEffect(() => {
    fetch('api/purchases/:id')
      .then((res) => res.json())
      .then((resJson) => {
        setPurchase(resJson)
      })
  }, [])

  const [open, setOpen] = React.useState(true)
  const handleClick = () => {
    setOpen(!open)
  }

  const history = useNavigate()
  const status =  purchases?.packageStatus

  const steps = [
    'Comprado',
    'Procesado',
    'En camino',
    'Recepcionado por punto',
    'Entregado al cliente'
  ]

  let textStatus = ''
  let textStatus2 = ''
  let textStatus3 = ''
  let textStatus4 = ''
  let statuscolor = true

  if (status === 1){
    textStatus = 'Comprado'
    textStatus2 =  `Fecha de compra: ${purchases?.packageHistory[0]?.date.substring(0,10)}`

  } else if (status === 2){
    textStatus = 'Procesado'
    textStatus2 =  `Fecha proceso validado: ${purchases?.packageHistory[1]?.date.substring(0,10)}`
    textStatus3 = `Tiempo de Despacho estimado: ${ purchases?.shippingCost?.delivery_time} desde la fecha de compra`

  }else if (status === 3){
    textStatus = 'En camino'
    textStatus2 =  `Delivery realizado por: ${purchases?.shippingCost?.courier}`
    textStatus3 = `Direccion Entrega: ${purchases?.deliveryAddress}`

  }else if (status === 4){
    textStatus = 'Recepcionado por punto Click & Connect'
    textStatus2 =  `Despachado por: ${ purchases?.shippingCost?.courier}`
    textStatus3 =  `Día de recepción: ${ purchases?.packageHistory[3]?.date.substring(0,10)}`
    textStatus4 = `Dirección entrega: ${ purchases?.deliveryAddress}.`

  }else if (status === 7){
    textStatus = 'Entregado al cliente'
    textStatus2 =  `Retirado el día: ${ purchases?.packageHistory[4]?.date.substring(0,10)}`
    statuscolor = false
  }

  return (

    <Container
    className="flex"
    >
      <Container
      className=" m-4"
       />
        <Grid
        container
        className='w-full'
        >
          <Container
          className="m-4 flex rounded bg-white shadow-md sm:inset-y-0 sm:left-0"
          >
            <Typography variant="h10" component="h1" gutterBottom>
            {purchases?.products?.map((product) => (
              <Grid container direction="row" alignItems="center">
              <Grid item margin={1}>
                  <Avatar
                      alt="Remy Sharp"
                      src={product?.photoUrl[0]}
                      sx={{ width: 25, height: 25 }}
                  />
              </Grid>
              <Grid item>
                  {product.productName}
              </Grid>
            </Grid>
            ))}
            </Typography>
          </Container>

          <Container
          className="m-4 flex rounded bg-white shadow-md"
          >
          <Grid container direction="row" className="flex justify-between text-lg font-bold">
            {statuscolor? (
               <Grid item className="text-left">{textStatus}</Grid>
            ): <Grid item className="text-left text-lblue">{textStatus}</Grid>}
              <Grid item className="text-right">
              Pedido N°{purchases?.saleOrder}
              </Grid>
          </Grid>
          <p className='my-4 text-sm'>
            {textStatus2}
          </p>
          <p className='my-4 text-sm'>
            {textStatus3}
          </p>
          <p className='my-4 text-sm'>
            {textStatus4}
          </p>
          </Container>

          <Container className="m-4 flex rounded bg-white shadow-md">
            <Typography variant="h6" component="h1" gutterBottom>
                <Box sx={{ width: '100%'}} padding={1} textAlign='center'>
                    <Stepper activeStep={status} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </Box>
            </Typography>
            {status >= 5? (
               <Box sx={{ width: '100%'}} padding={1} textAlign='center'>
                <Button  variant="contained" href="/QR">Genera QR para el retiro del pedido</Button>
              </Box>
            ): null}
          </Container>
          <Container className="m-4 flex rounded bg-white shadow-md">
            <Typography variant="h6" component="h1" gutterBottom>
                <ListItemButton onClick={() => history(`/create_ticket/:${purchases?.saleOrder}`)}>
                    <ListItemIcon>
                        <AnnouncementIcon />
                    </ListItemIcon>
                <ListItemText primary="Ayuda con la compra" />
                <KeyboardArrowRightIcon
                />
                </ListItemButton>
            </Typography>
          </Container>
          <Container
          className="m-4 flex rounded bg-white shadow-md">
            <Typography variant="h10" component="h1" gutterBottom>
                <List
                className='w-full'
                    component="nav">
                    <ListItemButton onClick={handleClick}>
                      <ListItemIcon>
                        <ShoppingCartIcon />
                      </ListItemIcon>
                        <ListItemText primary="Detalle de la compra" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Grid container direction="row" className="flex justify-between">
                                <Grid item sx={{textAlign:'left', alignItems:'left'}}>
                                    Fecha compra
                                </Grid>
                                <Grid item sx={{textAlign:'right', alignItems:'right'}}>
                                      {purchases?.packageHistory[0]?.date.substring(0,10)}
                                </Grid>
                            </Grid>
                            <Divider variant="middle" />
                            {purchases?.products?.map((product)=> (
                                <Grid container direction="row" className="flex justify-between">
                                <Grid item sx={{textAlign:'left', alignItems:'left'}}>
                                    {product.productName}
                                </Grid>
                                <Grid item sx={{textAlign:'right', alignItems:'right'}}>
                                    {product.price}
                                </Grid>
                                </Grid>
                                    ))}
                            <Divider variant="middle" />
                                <Grid container direction="row" className="flex justify-between">
                                    <Grid item sx={{textAlign:'left', alignItems:'left'}}>
                                        Envío
                                    </Grid>
                                    <Grid item sx={{textAlign:'right', alignItems:'right'}}>
                                        {purchases?.shippingCost?.price}
                                    </Grid>
                                </Grid>
                        </List>
                        <Divider variant="middle" />
                        <Grid container direction="row" className="flex justify-between font-bold">
                            <Grid item sx={{textAlign:'left', alignItems:'left'}}>
                                Total
                            </Grid>
                            <Grid item sx={{textAlign:'right', alignItems:'right'}} >
                            {purchases?.cost}
                            </Grid>
                        </Grid>
                    </Collapse>
                </List>
            </Typography>
          </Container>
      </Grid>
    </Container>

  )
}

export default DetalleCompra

