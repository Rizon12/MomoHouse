import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurMenu from './pages/OurMenu'
import Services from './pages/Services'
import AllergyAdvice from './pages/AllergyAdvice'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsDescription from './pages/ProductsDescription'
import CartPage from './pages/CartPage'
import Payment from './features/Payment'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/menu' element={<OurMenu />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/advice' element={<AllergyAdvice />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/payment' element={<Payment />}/>
          <Route path='/productsdescription' element={<ProductsDescription />}/>
          <Route path='/cartpage' element={<CartPage />}/>
          <Route path='*' element={<PageNotFound />}/>
      </Routes>
      
    </div>
  )
}

export default App