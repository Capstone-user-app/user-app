import React from 'react'
import Login from './components/authentication/login'
import Logout from './components/authentication/logout'
import Profile from './components/authentication/profile'
import logo from './logo.svg'
import './App.css'


const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Login/>
      <Logout/>
      <Profile/>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
)

export default App
