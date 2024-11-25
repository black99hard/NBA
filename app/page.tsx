import Image from 'next/image'
import { Orbitron } from 'next/font/google'
import { Twitter, Send } from 'lucide-react'
import DogeAnimation from '../components/doge-animation'
import ContractAddress from '../components/contract-address'
import TokenInfo from '../components/token-info'

const orbitron = Orbitron({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 bg-slate-900 text-slate-100">
      <nav className="w-full max-w-7xl flex justify-between items-center mb-12">
        <div className={`${orbitron.className} text-2xl font-bold`}>$NBA</div>
        <div className="flex space-x-4">
          <a
            href="https://x.com/nbaonsolana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center space-x-2"
          >
            <Twitter className="h-5 w-5" />
            <span>Twitter</span>
          </a>
          <a
            href="https://t.me/iNeverBrokeAgainSol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center space-x-2"
          >
            <Send className="h-5 w-5" />
            <span>Telegram</span>
          </a>
        </div>
      </nav>

      <div className={`${orbitron.className} text-center mb-12`}>
        <h1 className="text-6xl font-bold mb-4 animate-glow bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-transparent bg-clip-text">
          Never Being Broke Again
        </h1>
        <h2 className="text-4xl font-semibold text-slate-300">$NBA</h2>
      </div>

      <div className="relative flex place-items-center mb-12">
        <DogeAnimation />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mb-16">
  <div className="token-card">
    <h2 className={`${orbitron.className} text-2xl font-semibold mb-4`}>Grind</h2>
    <p className="text-slate-300 mb-4">Work hard and smart to build your wealth. $NBA is your companion on the journey to financial freedom.</p>
    <blockquote className="border-l-4 border-red-500 pl-4 italic text-slate-400">
      "Success isn't owned, it's leased. And rent is due every day." - J.J. Watt
    </blockquote>
    <p className="mt-4 text-slate-300">Embrace the grind, for it's the foundation of your future prosperity. With $NBA, every step forward is a step away from being broke.</p>
  </div>
  <div className="token-card">
    <h2 className={`${orbitron.className} text-2xl font-semibold mb-4`}>Hustle</h2>
    <p className="text-slate-300 mb-4">Seize opportunities and make your money work for you. $NBA empowers your financial decisions.</p>
    <blockquote className="border-l-4 border-red-500 pl-4 italic text-slate-400">
      "The only thing that I see that is distinctly different about me is I'm not afraid to die on a treadmill. I will not be outworked, period." - Will Smith
    </blockquote>
    <p className="mt-4 text-slate-300">Your hustle is your weapon against poverty. Let $NBA amplify your efforts and turn your dreams into reality.</p>
  </div>
  <div className="token-card">
    <h2 className={`${orbitron.className} text-2xl font-semibold mb-4`}>Prosper</h2>
    <p className="text-slate-300 mb-4">Enjoy the fruits of your labor and never be broke again! $NBA is your ticket to lasting prosperity.</p>
    <blockquote className="border-l-4 border-red-500 pl-4 italic text-slate-400">
      "The greatest wealth is to live content with little." - Plato
    </blockquote>
    <p className="mt-4 text-slate-300">Prosperity isn't just about money; it's about freedom. With $NBA, build a future where financial worries are a thing of the past.</p>
  </div>
</div>

      <TokenInfo />
      <ContractAddress />

      <footer className="mt-16 text-center text-slate-400">
        <p>&copy; 2023 $NBA Token. All rights reserved. Stay broke no more! 🚀</p>
      </footer>
    </main>
  )
}

