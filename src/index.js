import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import Layout from './components/general/layout'
import Login from './components/authentication/login'
import MyPurchases from './pages/myPurchases'


if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { worker } = require('./mocks/browser')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain="dev-nh2svhzc.us.auth0.com"
    clientId="uvrQsohlNbhUnMtrpzMn66ZdWSfhHdaZ"
    redirectUri={window.location.origin}
    audience="https://9shjd4c13a.execute-api.sa-east-1.amazonaws.com/dev"
    scope="read:current_user update:current_user_metadata hello"
  >
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mypurchases' element={<MyPurchases />} />
          {/* <Route path='/register' element={<Register/>} /> */}

        </Routes>
      </Layout>
    </BrowserRouter>
  </Auth0Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
