import * as React from 'react'
import DateDisplay from './dateDisplay'
/* eslint-disable eol-last */

const InfoState = (props) => {
  const { states, stateActual } = props
  let text = ''
  let stateDate = ''
  let azul = true
  for (let i = 0; i < states.length; i += 1) {
    const { packageStatus, date } = states[i]
    stateDate = date
    if (packageStatus === 1 && stateActual === 1) {
      text = 'Comprado'
      break
    }
    if (packageStatus === 2 && stateActual === 2) {
      text = 'Procesado'
      break
    }
    if (packageStatus === 3 && stateActual === 3) {
      text = 'En tránsito'
      break
    }
    if (packageStatus === 4 && stateActual === 4) {
      text = 'Recepcionado por el punto'
      break
    }
    if (packageStatus === 7 && stateActual === 7) {
      text = 'Entregado al cliente'
      azul = false
      break
    }
  }

  return (
    !azul ? (
      <div>
        <div className='font-bold text-[#008000]'>{text}</div>
        <div className='text-[#173554]'>
          <DateDisplay date={stateDate} />
        </div>
      </div>
    ) : <div className='text-[#182ACB]'>{text}</div>
  )
}

export default InfoState