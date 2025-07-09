import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-slate-900">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App