import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserAuthContextProvider } from './context/UserAuthContext'
import { MealProvider } from './context/mealContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <MealProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MealProvider>
    </UserAuthContextProvider>
  </React.StrictMode>
)
