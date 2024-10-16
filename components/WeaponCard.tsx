import Image from 'next/image'
import { Card } from '@/components/Card'
import { motion } from 'framer-motion'

interface WeaponCardProps {
  name: string
  image: string
  price: number
  discount: number
}

export function WeaponCard({ name, image, price, discount }: WeaponCardProps) {
  return (
    <Card className="bg-mediumBlue rounded-3xl p-4 w-full">
      <div className="flex flex-col items-center">
        <Image src={image} alt={name} width={100} height={100} className="mb-2" />
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 line-through">${price.toFixed(2)}</span>
          <span className="text-white font-bold">${(price * (1 - discount)).toFixed(2)}</span>
        </div>
      </div>
    </Card>
  )
}
