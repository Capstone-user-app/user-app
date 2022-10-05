import * as React from 'react'
import { useEffect, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { Container } from '@mui/system'
import {Button, Box, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CodigoQR = () => {
    const [purchases, setPurchase] = useState()

    useEffect(() => {
        fetch('api/purchases/:id')
        .then((res) => res.json())
        .then((resJson) => {
            setPurchase(resJson)
        })
    }, [])

    const history = useNavigate()

    const pinflagId = purchases?.pinflagId

    return (
    <Container className="grid h-screen place-items-center">
        <Box className = 'm-5 flex justify-center '>
            <Typography variant='h6' component='h1' gutterBottom>
                Muestra tu código QR para retirar tu pedido
                <Box className = 'm-3 flex justify-center'>
                    <QRCodeCanvas value={pinflagId} />
                </Box>
            </Typography>
        </Box>

        <Box textAlign='center' className = "">
            <Button variant="contained" onClick={() => history(`/purchase-details/:${purchases?.saleOrder}`)} >Volver</Button>
        </Box>
    </Container>
  )
    }

export default CodigoQR
