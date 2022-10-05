import React from 'react'

const NotFoundPage = () => (
        <section className="dark:bg-gray-900 dark:text-gray-100 flex h-full items-center p-16">
            <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
                <div className="max-w-md text-center">
                    <h2 className="dark:text-gray-600 mb-8 text-9xl font-extrabold">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-xl font-semibold md:text-3xl">Lo lamentamos, no pudimos encontrar la página que estás buscando.</p>
                    <p className="dark:text-gray-400 mt-4 mb-8">Pero no te preocupes, todavía puedes encontrar un monton de cosas de nuestra página principal.</p>
                    <a href="/" rel="noopener noreferrer" className="dark:bg-violet-400 dark:text-gray-900 rounded px-8 py-3 font-semibold">Devuleta a la pagina principal</a>
                </div>
            </div>
        </section>
    )

export default NotFoundPage
