'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DogeAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newX = prev.x + direction * 5
        if (newX > 100 || newX < -100) {
          setDirection(-direction)
          return { ...prev, x: prev.x - direction * 5 }
        }
        return { ...prev, x: newX }
      })
    }, 50)

    return () => clearInterval(interval)
  }, [direction])

  return (
    <div className="relative w-64 h-64">
      <Image
        src="/nba.png"
        alt="Cute Doge"
        width={256}
        height={256}
        className="absolute"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scaleX(${direction})`,
          transition: 'transform 0.05s linear',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-transparent bg-clip-text animate-pulse">$NBA</span>
      </div>
    </div>
  )
}

