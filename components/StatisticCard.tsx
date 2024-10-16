import Image from 'next/image'
import { Card } from '@/components/Card'

interface StatisticCardProps {
  leftImage: string
  leftValue: string
  rightImage: string
  rightValue: string
  centerValue?: string
}

export function StatisticCard({ leftImage, leftValue, rightImage, rightValue, centerValue }: StatisticCardProps) {
  return (
    <Card className="bg-mediumBlue rounded-xl px-4 py-12 flex justify-between items-center">
      <div className="flex items-center space-x-2 w-1/2">
        <Image src={leftImage} alt="Left Icon" width={100} height={100} className="rounded-full" />
        <span className="text-white font-bold">{leftValue}</span>
      </div>
      {centerValue && (
        <div className="bg-darkBlue rounded-full px-4 py-1">
          <span className="text-white">{centerValue}</span>
        </div>
      )}
      <div className="flex items-center space-x-2">
        <span className="text-white font-bold">{rightValue}</span>
        <Image src={rightImage} alt="Right Icon" width={24} height={24} />
      </div>
    </Card>
  )
}
