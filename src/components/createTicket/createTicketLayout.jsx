import React from 'react'

const CreateTicketLayout = ({ children, title }) => (
    <div className='grid grid-flow-row auto-rows-max items-center justify-items-center'>
        <div className='mt-5 w-9/12 text-center'>
            <h1 className='mb-5 text-xl'>{title}</h1>
        </div>
        {children}
  </div>
)

export default CreateTicketLayout
