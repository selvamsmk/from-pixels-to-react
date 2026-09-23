import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/deck.css'

export function mount(element: ReactNode) {
  createRoot(document.getElementById('root')!).render(<StrictMode>{element}</StrictMode>)
}
