import { Button } from './ui/button'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-800 text-white p-6 rounded-xl border-2 border-slate-700 flex flex-col gap-y-8">
      {/* Guest Login */}
      <div className="flex items-center gap-4">
        <img src="/guest-avatar.png" alt="Guest Avatar" className="w-16 h-16 rounded-md" />
        <div>
          <p className="font-bold text-lg">Guest</p>
          <Button variant="secondary" size="sm" className="mt-1">Login</Button>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center gap-3 text-blue-400 font-bold text-lg border-l-4 border-blue-400 pl-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors pl-5">
              Ranks
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors pl-5">
              Coins
            </a>
          </li>
        </ul>
      </nav>

      {/* Top Customer */}
      <div className="mt-auto">
        <h3 className="text-lg font-bold text-blue-400 mb-3">Top Customer</h3>
        <div className="bg-slate-900 p-4 rounded-lg text-center">
          <p className="text-slate-400">No one has made any orders yet.</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
