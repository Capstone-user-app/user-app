import * as React from 'react'
import { Container, Grid } from '@mui/system'
/* eslint-disable eol-last */

const InfoState = (props) => {
  const {states, stateActual} = props
  let text = ''
  let stateDate = ''
  let status = 1
  for( let i = 0; i < states.length; i +=1){
    const {packageStatus, date} = states[i]
    stateDate  = date.substring(0,10)
    if (packageStatus === 1 && stateActual === 1) {
      text = 'Comprado'
      break
    }
    if (packageStatus === 2 && stateActual === 2) {
      text = 'Procesado'
      status = 2
      break
    }
    if (packageStatus === 3 && stateActual === 3) {
        text = 'En tránsito'
        status = 3
        break
    }
    if (packageStatus === 4 && stateActual === 4) {
        text = 'Recepcionado por el punto'
        status = 4
        break
    }
    if (packageStatus === 7 && stateActual === 7) {
      text = 'Entregado al cliente'
      status = 7
      break
    }
  }



  return (
        <Container
          className="m-4 flex rounded bg-white shadow-md"
          >
          <Grid container direction="row" className="flex justify-between ">
              <Grid item sx={{textAlign:'left', alignItems:'left'}}>
                {text}
              </Grid>
              <Grid item sx={{textAlign:'right', alignItems:'right'}} >
              Pedido N° 100
              </Grid>
          </Grid>
          <p>
            {stateDate}
          </p>
          </Container>
  )
}

export default InfoState