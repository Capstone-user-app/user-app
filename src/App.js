import React from 'react'
import Login from './components/authentication/login'
import Logout from './components/authentication/logout'
import Profile from './components/authentication/profile'
import logo from './assets/logo_pinflag_vertical.png'
import './App.css'


const App = () => (
  <div className="App">
    <header className="App-header">

      <img src={logo} className="App-logo" alt="logo" />

      <Login/>
      <Logout/>
      <Profile/>

    </header>
  </div>
)

export default App
