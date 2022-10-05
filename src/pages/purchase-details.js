import * as React from 'react'
import { useEffect, useState } from 'react'
import {Button, Box, Typography, Grid, Avatar, Divider} from '@mui/material'
import { Container } from '@mui/system'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'


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

  const status =  purchases?.packageStatus

  const steps = [
    'Comprado',
    'Procesado',
    'En camino',
    'Recepcionado por punto',
    'Entregado al cliente'
  ]

  let text = ''
  let text2 = ''
  let statuscolor = true

  if (status === 1){
    text = 'Comprado'
    text2 =  `comprado el día ${ purchases?.packageHistory[0]?.date.substring(0,10)}, 
    la dirección de entrega esta fijada a ${ purchases?.deliveryAddress}`
  } else if (status === 2){
    text = 'Procesado'
    text2 =  `comprado el día ${ purchases?.packageHistory[1]?.date.substring(0,10)}`
  }else if (status === 3){
    text = 'En camino'
    text2 =  `Pedido será entregado por 
     ${ purchases?.shippingCost?.courier} con un tiempo de delivery de 
     ${ purchases?.shippingCost?.delivery_time} desde la fecha de compra, a la dirección ${ purchases?.deliveryAddress}`
  }else if (status === 4){
    text = 'Recepcionado por punto'
    text2 =  `Despachado por ${ purchases?.shippingCost?.courier} y recepcionado el día ${ purchases?.packageHistory[3]?.date.substring(0,10)}
    en la dirección ${ purchases?.deliveryAddress}. Esperando a ser retirado por
    ${ purchases?.clientName}`
  }else if (status === 7){
    text = 'Entregado al cliente'
    text2 =  `Retirado el día ${ purchases?.packageHistory[4]?.date.substring(0,10)} por ${ purchases?.clientName}. 
    Pedido despachado por ${ purchases?.shippingCost?.courier}  `
    statuscolor = false
  }

  return (

    <Container
    className="flex-col sm:flex-row"
    >
      <Container
      className=" m-4"
       />
        <Grid
        container
        className='w-full'
        >
          <Container
          className="m-4 flex rounded bg-white shadow-md"
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
          <Grid container direction="row" className="flex justify-between ">
            {statuscolor? (
               <Grid item className="text-left">{text}</Grid>
            ): <Grid item className="text-left text-lblue">{text}</Grid>}
              <Grid item className='text-right'>
              Pedido N°{purchases?.saleOrder}
              </Grid>
          </Grid>
          <p className='my-4 text-lg'>
            {text2}
          </p>
          </Container>


          <Container className="m-4 flex rounded bg-white shadow-md">
            <Typography variant="h6" component="h1" gutterBottom>
              ...
            </Typography>
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
                <Button variant="contained" href="/QR">Genera QR para el retiro del pedido</Button>
              </Box>
            ): null}
          </Container>
          <Container className="m-4 flex rounded bg-white shadow-md">
            <Typography variant="h6" component="h1" gutterBottom>
                <ListItemButton>
                    <ListItemIcon>
                        <AnnouncementIcon />
                    </ListItemIcon>
                <ListItemText primary="Ayuda con la compra" />
                <ArrowForwardIosIcon
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

