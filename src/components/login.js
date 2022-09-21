import React from 'react'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-screen bg-white'>

        {/* left text */}
        <div className='flex flex-col justify-center mx-12 bg-white'>
            <p className='text-left text-8xl'>
                Hola!, Que bueno volver a verte
            </p>
        </div>
        {/* login form */}
        <div className='flex justify-center bg-blue flex-col '>

            <form className=' rounded-xl max-w-[600px] max-h-screen  w-full mx-auto p-4 bg-white'>
                <h2 className='text-4xl font-bold text-center py-6'>Login</h2>

                <div className='flex flex-col py-2'>
                    <label className='font-bold flex flex-col py-2'>Email</label>
                    <input  className='border p-2' type="text"/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='font-bold flex flex-col py-2'>Contraseña</label>
                    <input  className='border p-2' type="password"/>
                </div>

                <p><input className='my-2' type="checkbox" /> Remember me</p>
                <a href="url"> <p className='my-3 underline-offset-1'>Olvidé mi contraseña</p></a>

                <div className='justify-center flex m-4'>
                    <button className='bg-blue hover:bg-lblue text-white font-bold py-2 px-4 rounded-full'>Ingresar</button>
                </div>
            </form>
        </div>

    </div>
  )
}
