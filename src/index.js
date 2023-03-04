import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App'

import ResetCss from './style/reset'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ResetCss />
    <App />
  </React.StrictMode>
)