<!-- Linter Passing Banner -->
## Guidelines tests
Los tests se corren con `npm run test`
Para los tests utilizaremos la libreria React Testing Library.
Los tests se deben crear en la carpeta [src/components/__tests__](src/components/__tests__) en caso de que sea un test para un componente o en [src/pages/__tests__](src/pages/__tests__) si es un test de una página. En ambas carpetas pueden encontrar un ejemplo simple de tests.
Para más detalles ver la documentación de [React Testing Library](https://testing-library.com/docs/react-testing-library/cheatsheet)

# Guidelines de desarrollo y estilo

1. Al estar desarrollando un componente nuevo, subir al slack un screenshot y ojalá una pequeña descripción
2. Seguir la estructura de la carpeta
3. Revisar estar al día con el repositorio base, en especial cuando hagan pull requests
4. Al colocar páginas, no colocarlas directamente, sino en una caperta que las agrupe
5. Seguir la nomeclatura de platanus al hacer commits, branches y PRs (https://la-guia.platan.us/setup/proyectos/git)

## Mobile first ( en revisión )

Se utilizarán los breakpoints de tailwind, teniendo en cuenta que al ir agrandando progresivamente se debe ver bien.

1. Usar md para celular grande.

## Convenciones para componentes

1. Colocar componentes dentro de su respectiva carpeta (mobile, web o shared, para componentes compartidos)
2. Ocupar props dentro de lo posible.

## Tipografía (rellenar)

Rellenar

[![GitHub Super-Linter](https://github.com/<OWNER>/<REPOSITORY>/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
