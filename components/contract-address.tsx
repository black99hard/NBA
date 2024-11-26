'use client'

import { useState } from 'react'
import { Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContractAddress() {
  const [copied, setCopied] = useState(false)
  const contractAddress = 'GCTjPK2Sku3TmWSuE6L3Nyu1B8gPEvKrmCwNKazVpump'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-7xl mt-16 px-4">
      <h3 className="section-title text-center">Contract Address</h3>
      <div className="glass-card p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between">
        <code className="text-slate-300 mb-4 sm:mb-0 truncate w-full sm:w-auto">
          {contractAddress}
        </code>
        <Button onClick={copyToClipboard} variant="secondary" size="sm">
          {copied ? 'Copied!' : 'Copy'}
          <Copy className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}