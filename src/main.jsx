import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarripoApp } from './CarripoApp'
import { BrowserRouter } from 'react-router-dom'
import "./style/Card.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarripoApp />
    </React.StrictMode>
  </BrowserRouter>,
)
