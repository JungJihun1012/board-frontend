import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
