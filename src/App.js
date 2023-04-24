import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './style.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from 'react-router-dom'
import Loop from './Component/Loop'
import './main'




const App = () => {
  return (

    <BrowserRouter>
      <Loop />
    </BrowserRouter>


  )
}

export default App
 