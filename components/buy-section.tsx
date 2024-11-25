'use client'

import { useState } from 'react'
import { Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BuySection() {
  const [amount, setAmount] = useState('')

  const handleBuy = () => {
    // Implement buy logic here
    console.log(`Buying ${amount} $NBA`)
  }

  return (
    <div className="w-full max-w-7xl mb-16">
      <h2 className="section-title">Buy $NBA</h2>
      <div className="glass-card p-6 rounded-xl">
        <div className="mb-4">
          <label htmlFor="amount" className="info-label">Amount (SOL)</label>
          <input
            type="number"
            id="amount"
            className="input-field"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button onClick={handleBuy} className="btn-primary w-full">
          <Wallet className="mr-2 h-5 w-5" />
          Buy $NBA
        </Button>
      </div>
    </div>
  )
}

