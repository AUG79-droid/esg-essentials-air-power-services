import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { ProgressProvider } from './state/ProgressContext'
import { LanguageProvider } from './i18n/LanguageContext'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <ProgressProvider><App /></ProgressProvider>
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>
)
