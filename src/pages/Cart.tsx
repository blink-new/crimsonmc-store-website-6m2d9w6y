import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { useCart } from '../contexts/CartContext'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

function Cart() {
  const { state, dispatch } = useCart()
  
  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }
  
  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  
  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-slate-400 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
          <p className="text-slate-400 mb-6">Add some items to your cart to continue shopping</p>
          <Link to="/">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white">Shopping Cart</h2>
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
            >
              Clear Cart
            </Button>
          </div>
          
          <div className="space-y-4">
            {state.items.map((item) => (
              <Card key={item.id} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{item.name}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{item.name}</h3>
                        <p className="text-slate-400">${item.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 text-slate-400 border-slate-600 hover:bg-slate-700"
                        >
                          <Minus size={16} />
                        </Button>
                        <span className="text-white font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 text-slate-400 border-slate-600 hover:bg-slate-700"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-white font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="h-8 w-8 p-0 text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <Card className="bg-slate-800 border-slate-700 sticky top-6">
            <CardHeader>
              <CardTitle className="text-white">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-slate-300">
                <span>Subtotal</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="border-t border-slate-600 pt-4">
                <div className="flex justify-between text-white font-semibold text-lg">
                  <span>Total</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold"
                onClick={() => {
                  // Here you would integrate with your payment processor
                  alert('Payment processing would be implemented here!')
                }}
              >
                Proceed to Checkout
              </Button>
              
              <Link to="/">
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Cart