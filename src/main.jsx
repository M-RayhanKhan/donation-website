import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import DonateContainer from './components/DonateContainer/DonateContainer.jsx'
import 'aos/dist/aos.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DonateContainer>
     <RouterProvider router={router} />
    </DonateContainer>
  </StrictMode>,
)
