'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import VibeCoding from '@/components/VibeCoding'
import Interests from '@/components/Interests'
import WorkExperience from '@/components/WorkExperience'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 whitespace-nowrap">David (Shao Hang) Kao</h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-6">Product Leader</p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Passionate about building innovative products, leading high-performance teams, 
              and exploring the intersection of technology and creativity through vibe coding experiments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <VibeCoding />
      <Interests />
      <WorkExperience />
      
      <Footer />
    </>
  )
}