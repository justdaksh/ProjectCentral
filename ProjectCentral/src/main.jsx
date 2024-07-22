import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter} from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <BrowserRouter>
        <App />
        <SpeedInsights />
    </BrowserRouter>
  </React.StrictMode>,
)
