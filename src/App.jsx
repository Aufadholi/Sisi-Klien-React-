import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import Home from './Pages/Home'
import Login from './Pages/Login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <Home />
  </StrictMode>,
)