import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import StoreFront from "./pages/StoreFront";
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
//faq
import Faq from './pages/faq-pages/faq'
import ShippingReturns from './pages/faq-pages/ShippingReturns'
import StorePolicy from './pages/faq-pages/StorePolicy'
import PaymentMethods from './pages/faq-pages/PaymentMethods'

function App() {

  

  return (
    <div className='app-container'>
      <Header />
      <Routes>
        {/* main pages */}
        <Route path='/' element={<StoreFront />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Contact />} />
        {/* faq */}
        <Route path='/faq' element={<Faq />} />
        <Route path='/shipping-returns' element={<ShippingReturns />} />
        <Route path='/store-policy' element={<StorePolicy />} />
        <Route path='/payment-methods' element={<PaymentMethods />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
