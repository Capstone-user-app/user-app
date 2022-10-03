import * as React from 'react'
import { useEffect, useState } from 'react'
import {Button, Box, Typography} from '@mui/material'
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
    <Container 
    className="bg-gray-100"
    >
      <Container 
      className="my-4"
      >
        <Typography variant="h6" component="h1" gutterBottom>
          Compras > Estado de mi compra
        </Typography>
        
      </Container>

        

      <Container>
        
        <Typography variant="h6" component="h1" gutterBottom>
            primer container
                
        </Typography>
      </Container>

      <Container>
        
        <Typography variant="h6" component="h1" gutterBottom>
            segundo container
        </Typography>
      </Container>

      <Container>
        
        <Typography variant="h2" component="h1" gutterBottom>
            tercer container, link googlemaps estados paquete
        </Typography>
      </Container>

    </Container>




  )
}

export default DetalleCompra;

