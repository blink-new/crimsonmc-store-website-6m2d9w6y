import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { useCart } from '../contexts/CartContext'
import { AlertTriangle, Shield, Clock, MessageCircle } from 'lucide-react'

const mockItems = [
  { id: '1', name: 'VIP Rank', price: 19.99, image: '/api/placeholder/150/150' },
  { id: '2', name: 'Diamond Rank', price: 39.99, image: '/api/placeholder/150/150' },
  { id: '3', name: 'Emerald Rank', price: 59.99, image: '/api/placeholder/150/150' },
  { id: '4', name: 'Crimson Rank', price: 99.99, image: '/api/placeholder/150/150' },
]

function Home() {
  const { dispatch } = useCart()
  
  const handleAddToCart = (item: typeof mockItems[0]) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }
  
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side - Store items */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-6">Store Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockItems.map((item) => (
              <Card key={item.id} className="bg-slate-800 border-slate-700 hover:border-red-500 transition-colors">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.name}</span>
                  </div>
                  <CardTitle className="text-white">{item.name}</CardTitle>
                  <CardDescription className="text-slate-400">
                    Premium rank with exclusive perks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-400">${item.price}</span>
                    <Button 
                      onClick={() => handleAddToCart(item)}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Right side - Information boxes */}
        <div className="space-y-6">
          <Card className="bg-slate-800 border-slate-700 border-2">
            <CardHeader>
              <CardTitle className="text-white text-xl">CrimsonMC Store</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                <h3 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle size={18} />
                  Welcome
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  If you've completed a purchase but haven't received your items, please open a support ticket on our Discord server for assistance. For any billing concerns or payment-related questions, you can also create a ticket, and our team will respond within 48 hours.
                </p>
              </div>
              
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                <h3 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                  <Shield size={18} />
                  Refund Policy
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  All purchases are final and non-refundable. Initiating a chargeback or disputing a payment through PayPal will lead to a permanent and irreversible ban from all our servers and associated Minecraft stores.
                </p>
              </div>
              
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                <h3 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                  <Clock size={18} />
                  Processing Time
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Please allow up to 20 minutes for your purchase to be processed in-game. If you do not receive your items within this timeframe, submit a support ticket on our Discord server with proof of purchase, and we will look into the issue.
                </p>
              </div>
              
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                <h3 className="text-orange-400 font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle size={18} />
                  Legal Notice
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  CrimsonMC is not affiliated with or endorsed by Minecraft, Mojang or Microsoft.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home