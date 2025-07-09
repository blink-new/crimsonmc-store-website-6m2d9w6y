import { Link, useLocation } from 'react-router-dom'
import { Home, ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import { useCart } from '../contexts/CartContext'

function Header() {
  const location = useLocation()
  const { state } = useCart()
  
  return (
    <header className="relative">
      {/* Navigation Bar on top */}
      <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 fixed top-0 left-0 w-full z-30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/">
            <Button 
              variant={location.pathname === '/' ? "default" : "ghost"}
              className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
            >
              <Home size={20} />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button 
              variant={location.pathname === '/cart' ? "default" : "ghost"}
              className="flex items-center gap-2 text-white hover:text-red-400 transition-colors relative"
            >
              <ShoppingCart size={20} />
              Cart
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Banner below nav */}
      <div className="mt-16 h-48 flex items-center justify-center relative overflow-hidden">
        <img
          src="/banner.png"
          alt="CrimsonMC Banner"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center w-full">
          <h1 className="text-6xl font-bold text-white mb-2 drop-shadow-lg">
            CrimsonMC
          </h1>
          <p className="text-xl text-red-100 font-semibold tracking-wide">
            STORE
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header