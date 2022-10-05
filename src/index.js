import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import App from './App'
import Layout from './components/general/layout'
import CreateTicket from './pages/CreateTicket'
import MyPurchases from './pages/myPurchases'
import DetalleCompra from './pages/purchase-details'
import TicketDetail from './pages/ticket-detail'
import NotFoundPage from './pages/NotFound'

// This only for deploying in netlify without conection to API
const { worker } = require('./mocks/browser')

worker.start()

// if (process.env.NODE_ENV === 'development') {
//   // eslint-disable-next-line global-require
//   const { worker } = require('./mocks/browser')
//   worker.start()
// }

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
          <Route path='/' element={<App/>} />
          <Route path='/crear_ticket/:salesOrder' element={<CreateTicket/>} />
          <Route path='/pedidos' element={<MyPurchases />} />
          <Route path='/pedidos/:id' element={<DetalleCompra/>} />
          <Route path='/ticket/:id' element={<TicketDetail/>} />
          <Route path="*" element={<NotFoundPage />} />

          {/* // this route is used by netlify  */}
          <Route path="/not_found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Auth0Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
