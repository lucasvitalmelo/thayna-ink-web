import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provivers } from './providers.tsx'

import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provivers />
  </StrictMode>,
)
