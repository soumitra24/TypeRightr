import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './Styles/index.css'
import { TestTimerContextProvider } from './Context/TestTimerContext.jsx'
import { ThemeContextProvider } from './Context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <ThemeContextProvider>
  
    <TestTimerContextProvider>
  
        <App />
  
    </TestTimerContextProvider>
  
  </ThemeContextProvider>
  
  </React.StrictMode>,
)
