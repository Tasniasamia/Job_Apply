import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
