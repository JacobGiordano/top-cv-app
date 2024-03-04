import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'

import './styles/index.css'
import '@picocss/pico/css/pico.css'

import "@fontsource/work-sans";
import "@fontsource/work-sans/600.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
