import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './Styles/index.css'
import { BrowserRouter } from 'react-router-dom';
import { TestTimerContextProvider } from './Context/TestTimerContext.jsx'
import { ThemeContextProvider } from './Context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <React.StrictMode>
    
    <ThemeContextProvider>
    
      <TestTimerContextProvider>
    
          <App />
    
      </TestTimerContextProvider>
    
    </ThemeContextProvider>
    
    </React.StrictMode>

  </BrowserRouter>,
)
