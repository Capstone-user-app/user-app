import React from 'react'
import Login from './components/authentication/login'
import Logout from './components/authentication/logout'
import Profile from './components/authentication/profile'
import logo from './assets/logo_pinflag_vertical.png'
import { useAuth0 } from "@auth0/auth0-react";
import './App.css'


const { user, isAuthenticated, isLoading } = useAuth0();

const App = () => (
  <div className=" ">
    <div className="App-header object-top">
      <img src={logo} className="App-logo " alt="logo" />

      <Login/>
      <Logout/>
      <Profile/>
    </div>
  </div>
)

export default App
