import React from 'react'

const NotFoundPage = () => (
        <section className="flex h-full items-center p-8">
            <div className="container mx-auto flex w-5/6 flex-col items-center justify-center">
                <div className="w-full text-center md:w-1/2">
                    <h2 className="mb-8 text-7xl font-extrabold md:text-9xl">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className=" mt-4 mb-8 font-semibold md:text-2xl">Lo lamentamos, no pudimos encontrar la página que estabas buscando.</p>
                    <a href="/" rel="noopener noreferrer" className="rounded bg-lblue py-2 px-4 text-sm font-semibold text-white hover:shadow-xl md:text-lg">Devuelta a la pagina principal</a>
                </div>
            </div>
        </section>
    )

export default NotFoundPage
