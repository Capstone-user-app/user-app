import React from 'react'
import Profile from './components/authentication/profile'
import logo from './assets/logo_pinflag_vertical.png'
import './App.css'


const App = () => (
  <div className=" ">
    <div className="App-header object-top">
      <img src={logo} className="App-logo " alt="logo" />

      <Profile />
    </div>
  </div>
)

export default App
