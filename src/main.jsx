import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import MainLayout from './layouts/MainLayout';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout></MainLayout>
  </StrictMode>,
)
