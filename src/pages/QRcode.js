import * as React from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { Container } from '@mui/system'
import {Button, Box, Typography} from '@mui/material'

const CodigoQR = () => (
    <>
    <Container >
        <Box className = 'flex justify-center'>
            <Typography variant='h6' component='h1' gutterBottom>
                Muestra tu código QR para retirar tu pedido
                <Box className = 'flex justify-center '>
                    <QRCodeCanvas value='https://pinflag.cl/' />
                </Box>
            </Typography>
        </Box>
    </Container>

    <Container>
        <Box textAlign='center' className = "flex justify-center absolute inset-x-0 bottom-4">
            <Button variant="contained" href = "/" >Volver</Button>
        </Box>
    </Container>
    </>
  )

export default CodigoQR
