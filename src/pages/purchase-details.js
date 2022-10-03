import * as React from 'react'
import { useEffect, useState } from 'react'
import {Button, Box, Typography, Grid} from '@mui/material'
import InfoState from '../components/infoState'
import { Container } from '@mui/system'
import { createTheme, ThemeProvider } from '@mui/material/styles';



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

  // rendererizar la lista de compras
  
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
            
            <Typography variant="h6" component="h1" gutterBottom>
                primer container
            </Typography>
          </Container>

          <Container
          className="flex shadow-2xl bg-white m-4 rounded"
          >
            
            <Typography variant="h6" component="h1" gutterBottom>
                
                <InfoState states={purchases[0]?.packageHistory} stateActual={purchases[0]?.packageStatus}/>
                {purchases[0]?.packageStatus}
            </Typography>
          </Container>

          <Container
          className="flex shadow-2xl bg-white m-4 rounded"
          
          >
            
            <Typography variant="h6" component="h1" gutterBottom>
                tercer container, link googlemaps estados paquete
            </Typography>
          </Container>

      </Grid>
    </Container>
    </>




  )
}

export default DetalleCompra;

