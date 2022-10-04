import * as React from 'react'
import { useEffect, useState } from 'react'
import {Button, Box, Typography, Grid, Stack, Avatar, TextField, Divider} from '@mui/material'
import InfoState from '../components/infoState'
import { Container } from '@mui/system'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ErrorIcon from '@mui/icons-material/Error';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const DetalleCompra = () => {
  const [purchases, setPurchase] = useState([])
  // petición a la api de compras para el usuario actual
  useEffect(() => {
    fetch('api/purchases')
      .then((res) => res.json())
      .then((resJson) => {
        setPurchase(resJson)
      })
  }, [])

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const steps = [
    '1',
    '2',
    '3',
    "4",
    "5"
  ];
  
  return (
    <>
    <Container
    className="flex-col sm:flex-row"
    >

      <Container 
      className=" m-4"
      >
        <Typography variant="h6" component="h1" gutterBottom>
          Compras > Estado de mi compra
          
        
        </Typography>
      </Container>

        <Grid 
        container
        className='w-full'
        >

          <Container
          className="flex shadow-md bg-white m-4 rounded"
          
          >
            <Typography variant="h10" component="h1" gutterBottom>
              bicicleta dedewdejded \n
              cdcdcdcdcdcdcdcd
            {purchases[0].products.map((product) => (
              <Grid container direction="row" alignItems="center">
              <Grid item margin={1}>
                  <Avatar
                      alt="Remy Sharp"
                      src={product.photoUrl[0]}
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
          className="flex shadow-md bg-white m-4 rounded"
          >
            
            <Typography variant="h6" component="h1" gutterBottom>
                
                {/* <InfoState states={purchases[0]?.packageHistory} stateActual={purchases[0]?.packageStatus}/> */}
                {purchases[0]?.packageStatus}
            </Typography>
          </Container>

          <Container className="flex shadow-md bg-white m-4 rounded">
            <Typography variant="h6" component="h1" gutterBottom>
                tercer container, link googlemaps estados paquete
            </Typography>
          </Container>

          <Container className="flex shadow-md bg-white m-4 rounded">
            <Typography variant="h6" component="h1" gutterBottom>
                <Box sx={{ width: '100%'}} padding={1} textAlign='center'>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    
                </Box>
            </Typography>
            <Box sx={{ width: '100%'}} padding={1} textAlign='center'>
                <Button variant="contained" disabled>Genera QR para el retiro del pedido</Button>
            </Box>
          </Container>

        
          <Container className="flex shadow-md bg-white m-4 rounded sm:bg-red-200">
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
          className="flex shadow-md bg-white m-4 rounded">
            
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
                            <ListItemText secondary= "Fecha de compra:"/>
                            {/* {purchases[0].products.map((product) => (
                              
                              <ListItemText secondary= {product.productName}/>
                            ))} */}
                            <ListItemText secondary= "Producto 2"/>
                            <Grid container direction="row" className="flex justify-between ...">
                                <Grid item sx={{textAlign:"left", alignItems:"left"}}>
                                    Fecha de venta
                                </Grid>
                                <Grid item sx={{textAlign:"right", alignItems:"right"}}>
                                    12 de Septiembre de 2022
                                </Grid>                    
                            </Grid>
                            <Divider variant="middle" />

                                <Grid container direction="row" className="flex justify-between ...">
                                    <Grid item sx={{textAlign:"left", alignItems:"left"}}>
                                        Producto 1
                                    </Grid>
                                    <Grid item sx={{textAlign:"right", alignItems:"right"}}>
                                        $12.000
                                    </Grid>                    
                                </Grid>

                                <Grid container direction="row" className="flex justify-between ...">
                                    <Grid item sx={{textAlign:"left", alignItems:"left"}}>
                                        Producto 2
                                    </Grid>
                                    <Grid item sx={{textAlign:"right", alignItems:"right"}}>
                                        $10.000
                                    </Grid>                    
                                </Grid>

                                <Grid container direction="row" className="flex justify-between ...">
                                    <Grid item sx={{textAlign:"left", alignItems:"left"}}>
                                        Producto 3
                                    </Grid>
                                    <Grid item sx={{textAlign:"right", alignItems:"right"}}>
                                        $14.000
                                    </Grid>                    
                                </Grid>
                            <Divider variant="middle" />
                                <Grid container direction="row" className="flex justify-between ...">
                                    <Grid item sx={{textAlign:"left", alignItems:"left"}}>
                                        Envío:
                                    </Grid>
                                    <Grid item sx={{textAlign:"right", alignItems:"right"}}>
                                        $2.000
                                    </Grid>                    
                                </Grid>
                        </List>
                        <Divider variant="middle" />
                        <Grid container direction="row" className="flex justify-between ... font-bold">
                            <Grid item sx={{textAlign:"left", alignItems:"left"}}>
                                Total
                            </Grid>
                            <Grid item sx={{textAlign:"right", alignItems:"right"}} >
                                $38.000
                            </Grid>                    
                        </Grid>
                    </Collapse>
                </List>
            </Typography>
          </Container>

      </Grid>
    </Container>
    </>




  )
}

export default DetalleCompra;

