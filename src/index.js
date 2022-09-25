import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/login';
import Layout from './components/layout';
import App from './App';


if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { worker } = require('./mocks/browser')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/login' element={<Login/>} />
          {/* <Route path='/register' element={<Register/>} /> */}



        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
