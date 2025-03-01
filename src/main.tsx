import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css'
import RoutesApp from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesApp />
    {/* <App /> */}
  </StrictMode>,
)
