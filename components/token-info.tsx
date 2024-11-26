import { Coins, Users, BarChart } from 'lucide-react'

export default function TokenInfo() {
  return (
    <div className="w-full max-w-7xl mb-16 px-4">
      <h2 className="section-title text-center">Token Info</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="token-card flex flex-col items-center">
          <Coins className="w-12 h-12 mb-4 text-red-500" />
          <p className="info-label">Total Supply</p>
          <p className="info-value">1,000,000,000 $NBA</p>
        </div>
        <div className="token-card flex flex-col items-center">
          <Users className="w-12 h-12 mb-4 text-red-500" />
          <p className="info-label">Holders</p>
          <p className="info-value">10,000+</p>
        </div>
        <div className="token-card flex flex-col items-center">
          <BarChart className="w-12 h-12 mb-4 text-red-500" />
          <p className="info-label">Current Price</p>
          <p className="info-value">$0.00008 USD</p>
        </div>
      </div>
     
    </div>
  )
}