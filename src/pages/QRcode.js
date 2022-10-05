import * as React from 'react'
import { useEffect, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { Container } from '@mui/system'
import {Button, Box, Typography} from '@mui/material'

const CodigoQR = () => {
    const [purchases, setPurchase] = useState()

    useEffect(() => {
        fetch('api/purchases')
        .then((res) => res.json())
        .then((resJson) => {
            setPurchase(resJson)
        })
    }, [])

    const pinflagId = purchases?.pinflagId

    return (
    <>
    <Container >
        <Box className = 'flex justify-center'>
            <Typography variant='h6' component='h1' gutterBottom>
                Muestra tu código QR para retirar tu pedido
                <Box className = 'flex justify-center '>
                    <QRCodeCanvas value={pinflagId} />
                </Box>
            </Typography>
        </Box>
    </Container>

    <Container>
        <Box textAlign='center' className = "flex justify-center inset-x-0">
            <Button variant="contained" href = "/purchase-details" >Volver</Button>
        </Box>
    </Container>
    </>
  )
    }

export default CodigoQR
