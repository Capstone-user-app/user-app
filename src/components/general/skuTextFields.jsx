import React from 'react'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'

const SkuTextFields = ({ skuArray, setSkuArray }) => {
    const addInput = () => {
      setSkuArray(s => [
          ...s,
          {
            type: 'text',
            value: ''
          }
        ])
    }

    const handleChange = e => {
      e.preventDefault()

      const index = e.target.id
      setSkuArray(s => {
        const newArr = s.slice()
        newArr[index].value = e.target.value
        return newArr
      })
    }
    return (
        <div className='mt-5 grid grid-flow-row auto-rows-max items-center justify-items-center'>
            <div className='justify-self-end'>
                <button type='button'  onClick={addInput} >
                    <div className='grid grid-cols-4'>
                        <p className='col-span-3 justify-self-end'>Agregar</p>
                        <div className='col-span-1 ml-1 justify-self-end'>
                        <AddIcon />
                        </div>
                    </div>
                </button>
            </div>
          {skuArray.map((item, i) => (
            <TextField
                id={i}
                label='SKU'
                variant='outlined'
                onChange={handleChange}
                value={item.value}
                style={{ width: '100%', marginTop: '20px' }}
            />
            ))}
        </div>
      )
    }
export default SkuTextFields
