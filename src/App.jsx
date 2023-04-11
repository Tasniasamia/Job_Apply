import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import Loadingbtn from './Component/Loadingbtn/Loadingbtn'

function App() {
const loadingbtn=useNavigation();
  return (
    <div className="App">
     
      <Header></Header>
      <div>
        <Outlet></Outlet>
        
      </div>
      <Footer></Footer>
      {loadingbtn.state=="loading"?<Loadingbtn/>:""}

      
    </div>
  )
}

export default App
