import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import ak7 from '@/images/ak7.png'
import { AxeIcon, CreditCardIcon, HomeIcon, Paintbrush, User2 } from 'lucide-react'
import x from '@/images/x.png'
import w from '@/images/w.png'
import rifle from '@/images/rifle2.png'
import rifle2 from '@/images/rifle3.png'
import percent from '@/images/percent.png'
import { StatisticCard } from './StatisticCard'


const cardData = [
    { color: 'lightBlue', title: 'Play more', description: 'Get better items & increase your win rate.', image: w.src },
    { color: 'purple', title: 'Upgrade', description: 'To make real $, you need to upgrade the balance.', image: x.src },
    { color: 'pink', title: 'Discount', description: 'For the discount of 5% you need to make a deposit.', image: percent.src },
]


export function DashboardSection2() {
    return (
        <section className='flex flex-col bg-darkBlue flex-grow p-6 w-1/2 bg-gradient-to-br from-mediumBlue to-darkBlue'>
            <div className='flex justify-between items-center'>
                <header className="flex justify-start items-center mb-12">
                    <div className="flex space-x-4">
                        <HomeIcon className="w-6 h-6" fill='#fff'/>
                        <AxeIcon className="w-6 h-6" />
                        <Paintbrush className="w-6 h-6" />
                    </div>
                </header>
                <div className='flex justify-end items-center space-x-4'>
                    <Card className="bg-mediumBlue border-2 border-pink rounded-xl py-2 px-6">
                        <h3 className="text-2x">Refill</h3>
                    </Card>
                    <span className='flex justify-center items-center space-x-2'>
                        <CreditCardIcon className='w-6 h-6' />
                        <span className='text-sm'> 68150.50 
                            <span className='text-xs text-lightBlue'>$</span>
                        </span>
                    </span>

                </div>
            </div>

            <div className="flex  items-center mb-8 space-x-4">
                <div className="flex-1">
                    <Image 
                        src={ak7}
                        alt="AK-47" 
                        width={300} 
                        height={150} 
                        className="object-contain p-4"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl text-gray-400 mb-8">Information</h2>
                    <div className="flex justify-start items-center space-x-4 mb-4">
                        <span className="text-3xl text-white">7.19$</span>
                        <span className="text-2xl text-gray-400">&gt;</span>
                        <span className="text-3xl text-white">8.15$</span>
                    </div>
                    <div className="flex justify-start items-center space-x-2">
                        <Card className="bg-darkBlue rounded-2xl py-4 px-12">
                            <h3 className="text-2x">1.7$</h3>
                        </Card>
                        <motion.button
                            className="bg-darkBlue rounded-2xl border-2 border-lightBlue py-4 px-12 text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            receive 2.54
                            <span className='text-xs text-lightBlue'>$</span>
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8 mt-12">
                {cardData.map((card, index) => (
                    <Card key={index} className={`bg-${card.color} p-6 rounded-xl`}>
                        <div className="flex flex-col items-center mb-4">
                            <Image 
                                src={card.image} 
                                alt={card.title} 
                                width={100} 
                                height={100} 
                                className="mb-2"
                            />
                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                        </div>
                        <p className="text-white text-center">{card.description}</p>
                    </Card>
                ))}
            </div>

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-sm text-gray-400">Statistic</h1>
                <span className='flex items-center space-x-2'>
                    <User2 className="w-6 h-6" />
                            <h2 className='text-sm text-gray-400'>123</h2>
                        </span>
                </div>

            <div className="flex flex-col space-y-4 mt-8">
                <StatisticCard 
                    leftImage={rifle.src}
                    leftValue="20.47$"
                    rightImage={rifle2.src}
                    rightValue="15.34$"
                />
                <StatisticCard 
                    leftImage={rifle2.src}
                    leftValue="13.53$"
                    centerValue="1.13"
                    rightImage={rifle2.src}
                    rightValue="15.34$"
                />
                <StatisticCard 
                    leftImage={rifle2.src}
                    leftValue="13.53$"
                    centerValue="1.13"
                    rightImage={rifle2.src}
                    rightValue="15.34$"
                />
            </div>
        </section>
    )
}
