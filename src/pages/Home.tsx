function Home() {
  return (
    <div className="container mx-auto px-6 py-8 flex justify-end">
      <div className="max-w-md w-full bg-slate-800 border-2 border-slate-700 rounded-xl p-8 mr-4" style={{marginRight: '2.5rem'}}>
        <h2 className="text-3xl font-bold text-white mb-4">CrimsonMc Store</h2>
        <div className="space-y-6 text-slate-200">
          <div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">Welcome</h3>
            <p className="text-base leading-relaxed">
              If you've completed a purchase but haven't received your items, please open a support ticket on our Discord server for assistance. For any billing concerns or payment-related questions, you can also create a ticket, and our team will respond within 48 hours.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">Refund Policy</h3>
            <p className="text-base leading-relaxed">
              All purchases are final and non-refundable. Initiating a chargeback or disputing a payment through PayPal will lead to a permanent and irreversible ban from all our servers and associated Minecraft stores.
            </p>
          </div>
          <div>
            <p className="text-base leading-relaxed">
              Please allow up to 20 minutes for your purchase to be processed in-game. If you do not receive your items within this timeframe, submit a support ticket on our Discord server with proof of purchase, and we will look into the issue.
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mt-4">
              CrimsonMc is not affiliated with or endorsed by Minecraft, Mojang or Microsoft.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
