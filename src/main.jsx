import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './newspage/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
