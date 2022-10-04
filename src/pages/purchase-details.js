import * as React from 'react'
import { useEffect, useState } from 'react'
import {Button, Box, Typography, Grid, Stack, Avatar} from '@mui/material'
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
    className="bg-blue-50"
    >

      <Container 
      className="flex shadow-2xl bg-white m-4 rounded"
      >
        <Typography variant="h6" component="h1" gutterBottom>
          Compras > Estado de mi compra
          
        
        </Typography>
      </Container>

        <Grid 
        container
        className='w-full bg-red-50'
        >

          <Container
          className="flex shadow-2xl bg-white m-4 rounded"
          
          >
            
            <Typography variant="h10" component="h1" gutterBottom>

                <Grid container direction="row" alignItems="center">
                    <Grid item margin={1}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                            sx={{ width: 25, height: 25 }}
                        />
                    </Grid>
                    <Grid item>
                        Texto Producto
                    </Grid>                    
                </Grid>
                
                <Grid container direction="row" alignItems="center">
                    <Grid item margin={1}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                            sx={{ width: 25, height: 25 }}
                        />
                    </Grid>
                    <Grid item>
                        Texto Producto
                    </Grid>  
                </Grid>
                
                
            </Typography>
          </Container>

          <Container
          className="flex shadow-2xl bg-white m-4 rounded"
          >
            
            <Typography variant="h6" component="h1" gutterBottom>
                
                {/* <InfoState states={purchases[0]?.packageHistory} stateActual={purchases[0]?.packageStatus}/>
                {purchases[0]?.packageStatus} */}
            </Typography>
          </Container>

          <Container className="flex shadow-2xl bg-white m-4 rounded">
            <Typography variant="h6" component="h1" gutterBottom>
                tercer container, link googlemaps estados paquete
            </Typography>
          </Container>

          <Container className="flex shadow-2xl bg-white m-4 rounded">
            <Typography variant="h6" component="h1" gutterBottom>
            </Typography>
          </Container>

        
          <Container className="flex shadow-2xl bg-white m-4 rounded">
            <Typography variant="h6" component="h1" gutterBottom>
                <ListItemButton>
                    <ListItemIcon>
                        <AnnouncementIcon />
                    </ListItemIcon>
                <ListItemText primary="Ayuda con la compra" />
                </ListItemButton>
            </Typography>
          </Container>

          <Container
          className="flex shadow-2xl bg-white m-4 rounded">
            
            <Typography variant="h6" component="h1" gutterBottom>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav">
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary="Detalle de la compra" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemText secondary= "Fecha de compra:"/>

                            <ListItemText secondary= "Producto 1"/>
                            <ListItemText secondary= "Producto 2"/>
                            <ListItemText secondary= "Producto 3"/>
                            <ListItemText secondary= "Producto 4"/>
                        </List>
                        Total: $35.000
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

