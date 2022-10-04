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
import { QRCodeCanvas } from "qrcode.react";


const CodigoQR = () => {
  
  return (
    <>
    <Container >
        <Box className = " flex justify-center snap-center md:place-content-center">
            <Typography variant="h6" component="h1" gutterBottom> 
                Muestra tu código QR para retirar tu pedido
                <Box className = "flex justify-center">
                    <QRCodeCanvas value="https://pinflag.cl/" />
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
}

export default CodigoQR;