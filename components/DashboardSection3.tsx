'use client'

import Image from 'next/image'
import { Card } from '@/components/Card'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Send } from "lucide-react"
import profile from '@/images/face1.png'
import flag from '@/images/usflag.jpg'

interface ChatMessage {
    user: string
    message: string
    time: string
    avatar: string
    isLive?: boolean
}

const chatMessages: ChatMessage[] = [
    { user: "User1", message: "What are you doing if the person you're", time: "12:30", avatar: profile.src, isLive: true },
    { user: "User2", message: "there's still gonna be lots of bugs and stuff", time: "12:35", avatar: profile.src },
    { user: "User3", message: "its hard coming to a great idea", time: "12:40", avatar: profile.src },
    { user: "User4", message: "I'm currently working on my new game", time: "12:45", avatar: profile.src, isLive: true },
]

export function DashboardSection3() {
    return (
        <section className='flex flex-col bg-mediumBlue w-1/4 p-6'>
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center justify-start space-x-2">
                    <Image src={profile} alt="User" width={60} height={100} className="rounded-full" />
                    <span className="font-semibold">userName</span>
                </div>
                <Image src={flag} alt="Flag" width={24} height={24} />
            </div>

            <div className="flex justify-between items-center mb-6">
                <ChevronLeft className="w-6 h-6" />
                <span className="text-green-400">4.5K</span>
                <ChevronRight className="w-6 h-6" />
            </div>

            <Card className="bg-darkBlue rounded-xl p-4 mb-6 flex-grow overflow-y-auto">
                <h3 className="text-lg font-semibold mb-4">Chat</h3>
                <div className="space-y-4">
                    {chatMessages.map((message, index) => (
                        <div key={index}>
                            <div className="flex items-start space-x-2 mb-2">
                            <div className="relative">
                            <Image src={message.avatar} alt={message.user} width={32} height={32} className="rounded-full" />
                            {message.isLive && (
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-darkBlue"></div>
                            )}
                        </div>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <span className="font-semibold">{message.user}</span>
                                        <span className="text-xs text-gray-400">{message.time}</span>
                                    </div>
                                    <p className="text-sm">{message.message}</p>
                                </div>
                            </div>
                            {index < chatMessages.length - 1 && (
                                <hr className="border-gray-700 my-2" />
                            )}
                        </div>
                    ))}
                </div>
            </Card>

            <div className="bg-darkBlue rounded-xl p-4 flex items-center space-x-2">
                    <input type="text" className="flex-grow bg-darkBlue rounded-full px-4 py-2" placeholder="Write your message..." />
                    <motion.button
                        className="bg-lightBlue p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Send className="w-5 h-5" />
                    </motion.button>
                </div>
        </section>
    )
}
