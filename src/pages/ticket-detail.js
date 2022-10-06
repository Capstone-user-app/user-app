import * as React from 'react'
import { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import { Button, Box, Typography, Grid, Avatar} from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const DetalleTicket = () => {
    const [ticket, setTicket] = useState([])
    useEffect(() => {
        fetch('api/ticket')
            .then((res) => res.json())
            .then((resJson) => {
                setTicket(resJson)
            })
    }, [])
    const [purchases, setPurchase] = useState([])
    useEffect(() => {
        fetch('api/purchases')
            .then((res) => res.json())
            .then((resJson) => {
                setPurchase(resJson)
            })
    }, [])
    return (
        <Container className="flex-col sm:flex-row">
        <Typography variant="h4" component="h1" gutterBottom>
        <h1>Detalle Ticket</h1>
        </Typography>
        <Container className="m-4 flex rounded bg-white shadow-md">
                    <Typography variant="h10" component="h1" gutterBottom >
                        <h1>Mi compra es: {purchases[0]?.saleOrder}</h1>
                    </Typography>
            <Typography variant="h10" component="h1" gutterBottom>
            {purchases[0]?.products.map((product) => (
              <Grid container direction="row" alignItems="center">
              <Grid item margin={1}>
                  <Avatar
                      alt="Remy Sharp"
                      src={product.photoUrl[0]}
                      sx={{ width: 25, height: 25 }}/>
              </Grid>
              <Grid item>
                  {product.productName}
              </Grid>
            </Grid>
            ))}
            </Typography>
            </Container>
            <Container className=" m-4"/>
                <Grid containernclassName='w-full'>
                <Container className="m-4 flex rounded bg-white shadow-md">
                <h1>Mi ticket es: {ticket[0]?.ticketId}</h1>
                <h1>El estado del ticket es: {ticket[0]?.ticketStatus}</h1>
                <h1>El tipo de ticket es: {ticket[0]?.ticketTipe}</h1>
                </Container>
                </Grid>
            <Container className="m-4 flex rounded bg-white shadow-md">
            <h1>Ticket creado {ticket[0]?.fecha1}</h1>
            <h1>Ticket asignado {ticket[0]?.fecha2}</h1>
            <h1>Ticket resuelto {ticket[0]?.fecha3}</h1>
            <h1>Ticket cerrado {ticket[0]?.fecha4}</h1>
            </Container>

            <Container className="m-4 flex rounded bg-white shadow-md">
            <Typography variant="h6" component="h1" gutterBottom>
                <ListItemButton>
                <ListItemText primary="Archivos adjuntos" />
                <ArrowForwardIosIcon/>
                </ListItemButton>
            </Typography>
            </Container>
            <Container className="m-4 flex rounded bg-white shadow-md">
            <Typography variant="h6" component="h1" gutterBottom>
                <ListItemButton>
                <ListItemText primary="Google maps" />
                <ArrowForwardIosIcon/>
                </ListItemButton>
            </Typography>
            </Container>
            <Box sx={{ width: '100%' }}padding={1} textAlign='center'>
            <Button  variant="contained" >Editar Ticket</Button>
            </Box>
            <Box sx={{ width: '100%' }}padding={1} textAlign='center'>
            <Button  variant="contained" >Cerrar Ticket</Button>
            </Box>
        </Container>
    )
}
export default DetalleTicket
