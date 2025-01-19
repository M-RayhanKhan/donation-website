import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import DonateContainer from './components/DonateContainer/DonateContainer.jsx'
import 'aos/dist/aos.css'
import ClientData from './components/Home/Home/SuperClient/ClientData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DonateContainer>
      <ClientData>
     <RouterProvider router={router} />
      </ClientData>
    </DonateContainer>
  </StrictMode>,
)
