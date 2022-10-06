/* eslint-disable max-statements-per-line */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Divider } from '@mui/material'
import TextField from '@mui/material/TextField'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { useParams, useNavigate } from 'react-router-dom'
import SkuTextFields from '../components/general/skuTextFields'
import CreateTicketLayout from '../components/createTicket/createTicketLayout'

const CreateTicket = () => {
    const { salesOrder } = useParams()
    const navigate = useNavigate()
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const [step4, setStep4] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const reasons = {'money return': 'Devolución de dinero',
    'product exchange': 'Cambio de producto',
    'delivery direction': 'Cambio de dirección de entrega',
     'doubt': 'Duda/Cosulta general'}
    const [reason, setReason] = useState(null)
    const [detail, setDetail] = useState(null)
    const [description, setDescription] = useState(null)
    const [skuArray, setSkuArray] = useState([{type: 'text', id: 1, value: null}])
    const details = {'money return': {
                        'unuseful': 'Es lo que compré pero no me sirve',
                        'incomplete': 'El paquete llegó incompleto',
                        'defect': 'El paquete posee productos dañados',
                        'different': 'Hay productos diferentes a los que pedí'
                                    },
                    'product exchange': {
                        'unuseful': 'Es lo que compré pero no me sirve',
                        'defect': 'El paquete posee productos dañados',
                        'different': 'Hay productos diferentes a los que pedí'
                                    }
                    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
        }

    const submitTicket = () => {
        setStep1(false)
        setStep2(false)
        setStep3(false)
        setStep4(false)
        setSubmitted(true)
        }

    const secondStepInfo = (e, reasonParam, detailsParam) => {
        if (reason === 'money return' || reason === 'product exchange') {
            return (
                <CreateTicketLayout title='¿Qué pasó con tu compra?'>

                {Object.keys(details[reason]).map((key) => (
                    <div className='mt-5 grid w-9/12 grid-cols-10'>
                        <p className='col-span-9'>{details[reason][key]}</p>
                        <div className='col-span-1 justify-self-end'>
                            <ArrowForwardIosIcon onClick={() => {setDetail(key); setStep2(false); setStep3(true)}}/>
                        </div>
                        <div className='col-span-10'>
                            <Divider style={{width:'100%', marginTop:'12px'}}/>
                        </div>
                    </div>
            ))}
            </CreateTicketLayout>
            )

        }
        if (reason === 'delivery direction') {
            return (
                <CreateTicketLayout title='Selecciona la nueva ubicación de despacho'>
                        <div>
                            <img src='https://sbt.blob.core.windows.net/storyboards/es-examples/poster-mapa-del-mundo.png?utc=132755310829600000' alt='Mapa' style={{width:'100%'}}/>
                        </div>
                    <div>
                        <button type='button' className='mt-5 rounded-md bg-blue p-2 text-white' onClick={() => {setStep2(false); setStep4(true)}}>Confirmar ubicación</button>
                    </div>
                </CreateTicketLayout>

            )
        }
        if (reason === 'doubt') {
            return (
                <CreateTicketLayout title='Cuéntanos tu duda'>

                    <div className='mt-5 w-9/12'>
                        <TextField id='outlined-multiline-static' label='Escribe tu duda' variant='outlined' multiline rows={4} style={{width:'100%'}} onChange={handleDescriptionChange}/>
                    </div>

                    <div>
                        <button type='button' className='mt-5 rounded-md bg-blue p-2 text-white' onClick={() => submitTicket()}>Generar ticket</button>
                    </div>
                </CreateTicketLayout>
            )


        }
            return null
    }

    const thirdStepInfo = (reasonParam, detailsParam, skuArrayParam, setSkuArrayParam) => {
        if (reason === 'money return' || reason === 'product exchange') {
            return (
            <CreateTicketLayout title='Ingresa un SKU para cada producto a devolver'>

                <div>
                    <SkuTextFields
                    skuArray={skuArrayParam}
                    setSkuArray={setSkuArrayParam} />
                </div>

                <div>
                    <button type='button' className='mt-5 rounded-md bg-blue p-2 text-white' onClick={() => {setStep3(false); setStep4(true)}}>Siguiente</button>
                </div>
            </CreateTicketLayout>
            )
        }
        return null
    }

    const fourthStepInfo = () => (
                <CreateTicketLayout title='¿Algún otro comentario?'>
                <div className='mt-5 w-9/12'>
                    <TextField id='outlined-multiline-static' label='Comentarios extra' variant='outlined' multiline rows={6} style={{width:'100%'}} onChange={handleDescriptionChange}/>
                </div>

                <div>
                    <button type='button' className='mt-6 rounded-md bg-blue p-2 text-white' onClick={() => submitTicket()}>Generar ticket</button>
                </div>
                </CreateTicketLayout>
        )

    const handleBack = () => {
        if (step1) {
            navigate(-1)
        }
        if (step2) {
            setStep1(true)
            setStep2(false)
            setDescription(null)
        }
        if (step3) {
            setStep2(true)
            setStep3(false)
            if (reason === 'money return' || reason === 'product exchange') {
                setSkuArray([{type: 'text', id: 1, value: null}])
            }
        }
        if (step4) {
            setStep3(true)
            setStep4(false)
            setDescription(null)
        }
        }

   return (
   <div>
        {!submitted && (
        <div className='grid grid-flow-row auto-rows-max items-center justify-items-center'>

        <div className='mt-5 ml-5 justify-self-start'>
            <ArrowBackIcon onClick={() => handleBack()} />
        </div>
        </div>
        )}
        {step1 && (
            <CreateTicketLayout title='¿Qué problema tuviste con esta compra?'>
                {Object.keys(reasons).map((key) => (
                    <div className='mt-5 grid w-9/12 grid-cols-10'>
                        <p className='col-span-9'>{reasons[key]}</p>
                        <div className='col-span-1 justify-self-end'>
                            <ArrowForwardIosIcon onClick={() => {setReason(key); setStep1(false); setStep2(true)}}/>
                        </div>
                        <div className='col-span-10'>
                            <Divider style={{width:'100%', marginTop:'12px'}}/>
                        </div>
                    </div>
                    )
                )}
            </CreateTicketLayout>
        )}
        {step2 && (
            secondStepInfo(reason, details)
        )}
        {step3 && (
            thirdStepInfo(reason, details, skuArray, setSkuArray)
        )}
        {step4 && (
            fourthStepInfo()
        )}
        {submitted && (
            <CreateTicketLayout title='¡Tu ticket ha sido generado!'>
                <div>
                    <TaskAltIcon style={{fontSize: 100, color: '4BB543'}}  />
                </div>
            <div>
                <button type='button' className='mt-5 rounded-md bg-blue p-2 text-white' onClick={() => {navigate(-1)}}>Entendido</button>
            </div>
            </CreateTicketLayout>

        )}
    </div>
)
}

export default CreateTicket
