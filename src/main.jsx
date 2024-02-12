import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Import the CSS file

ReactDOM.createRoot(document.getElementById('root')).render( // Render the app component
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
