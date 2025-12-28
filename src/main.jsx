import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from './store/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
 </BrowserRouter>
)
