'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Interests() {
  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Personal Interests</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Cat Dad 🐱</h3>
              <p className="text-gray-600 mb-6">
                A proud dad of 4 cats, with the eldest one being 16 years old.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    Cat Photo {i}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Freediving 🌊</h3>
              <p className="text-gray-600 mb-4">
                An AIDA 2 certified freediver.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-sm font-semibold text-blue-800">Personal Record</p>
                <p className="text-lg text-blue-600">Freedive to 13m at Lake Berryessa</p>
              </div>
              <a
                href="https://eos.aidainternational.org/print_certificate/230877"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View Certificate →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}