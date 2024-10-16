'use client'

import { motion } from 'framer-motion'
import { DashboardSection } from '@/components/DashboardSection'
import { DashboardSection2 } from '@/components/DashboardSection2'
import { DashboardSection3 } from '@/components/DashboardSection3'

export default function New() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex justify-between items-top rounded-lg'
    >
        <DashboardSection />

        <DashboardSection2 />

        <DashboardSection3 />
    </motion.div>
  )
}
