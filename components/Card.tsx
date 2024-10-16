'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  // title: string
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={`bg-gray-800 rounded-lg p-4 drop-shadow-lg ${className}`}
      initial={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
      whileHover={{
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {/* <h3 className="text-lg font-semibold mb-4">{title}</h3> */}
      {children}
    </motion.div>
  )
}