'use client'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { motion } from 'framer-motion'
import { Bell, Youtube, User2, CheckSquare, Plus, ArrowRight } from "lucide-react"
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts"
import profile from '@/images/face1.png'
import rifle from '@/images/rifle2.png'
import rifle2 from '@/images/rifle3.png'
import rifle3 from '@/images/rifle1.png'
import ak47 from '@/images/ak7.png'
import { WeaponCard } from '@/components/WeaponCard'

const data = [
    { name: "Page A", uv: 1000 },
    { name: "Page B", uv: 1500 },
    { name: "Page C", uv: 2000 },
    { name: "Page D", uv: 1800 },
    { name: "Page E", uv: 2500 },
]

const weapons = [
    { name: "Desert Eagle", image: rifle.src, price: 450.51, discount: 0.1 },
    { name: "AK-47", image: rifle2.src, price: 1.15, discount: 0 },
    { name: "Desert Eagle", image: rifle3.src, price: 450.51, discount: 0.1 },
    { name: "AK-47", image: ak47.src, price: 1.15, discount: 0 },

]

export function DashboardSection() {
    return (
        <section className='flex flex-col bg-darkBlue w-1/4 p-6'>
            <header className="flex justify-end items-center mb-12">
                <div className="flex space-x-4">
                    <Bell className="w-6 h-6" />
                    <Youtube className="w-6 h-6" />
                </div>
            </header>
            <div className="flex flex-col mb-12">
                <Card className="bg-mediumBlue rounded-3xl p-6">
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data}>
                            <YAxis stroke="#8884d8" strokeWidth={2}/>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </Card>
                <div className="flex justify-between items-center pt-4">
                    <Card className="bg-mediumBlue border-4 border-sky-950 rounded-3xl p-4">
                        <h3 className="text-2x">1.45x</h3>
                    </Card>
                    <Card className="bg-mediumBlue border-4 border-lightBlue rounded-3xl p-4">
                        <h3 className="text-2x">1.45x</h3>
                    </Card>
                    <Card className="bg-mediumBlue border-4 border-purple rounded-3xl p-4">
                        <h3 className="text-2x">1.45x</h3>
                    </Card>
                    <Card className="bg-mediumBlue border-4 border-pink rounded-3xl p-4">
                        <h3 className="text-2x">1.45x</h3>
                    </Card>
                </div>
            </div>
            <motion.div
                className="flex bg-mediumBlue rounded-3xl py-6 drop-shadow-lg"
                initial={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                whileHover={{
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    y: -5,
                    transition: { duration: 0.2 }
                }}
            > 
                <div className='flex flex-col justify-between items-center w-1/2 px-4'>
                    <div className='flex justify-around items-center w-full'>
                        <Image src={profile} alt="John Doe" width={100} height={40} className='rounded-full' />
                        <div>
                            <h2 className='text-sm text-gray-400'>placeholder</h2>
                            <h2 className='text-xl font-semibold'>John</h2>
                        </div>
                    </div>
                    <Card className="bg-mediumBlue border-4 border-lightBlue rounded-3xl p-4 mt-4">
                        <h3 className="text-2x text-center">Join</h3>
                    </Card>
                </div>
                <div className='flex flex-col justify-between items-center w-1/2 h-full px-4'>
                    <Image src={rifle} alt="Rifle" width={100} height={200} className='rounded-full' />
                    <div className='flex justify-center items-center space-x-4 w-full'>
                        <h2 className='text-lg font-semibold'>23h:43m</h2>
                        <span className='flex items-center space-x-2'>
                            <User2 className="w-6 h-6" />
                            <h2 className='text-sm text-gray-400'>123</h2>
                        </span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col rounded-lg mt-6'
            >
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-sm text-gray-400">Checkout</h1>
                        <h1 className="text-xl font-semibold">0.0$</h1>
                    </div>
                    <div className='flex justify-center items-center space-x-2'>
                        <h2 className='text-sm text-gray-400'>All</h2>
                        <CheckSquare className="w-6 h-6" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {weapons.map((weapon, index) => (
                        <WeaponCard 
                            key={index}
                            name={weapon.name}
                            image={weapon.image}
                            price={weapon.price}
                            discount={weapon.discount}
                        />
                    ))}
                </div>

                <div className="flex justify-end space-x-2 mt-4">
                    <motion.button
                        className="bg-lightBlue text-white p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Plus className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                        className="bg-lightBlue text-white p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowRight className="w-6 h-6" />
                    </motion.button>
                </div>
            </motion.div>
        </section>
    )
}
