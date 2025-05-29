'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const competitions = [
  { event: 'ACM ICPC Asia Regional - Kaohsiung', award: 'Silver Award', date: 'Jan 2006' },
  { event: 'ACM ICPC Asia Regional - Shanghai', award: 'Bronze Award', date: 'Jan 2006' },
  { event: 'National Computer Programming Contest', award: '1st place', date: 'Jan 2006' },
  { event: 'ACM ICPC Asia Regional - Taipei', award: '7th place', date: 'Jan 2005' },
  { event: 'National Computer Programming Contest', award: '1st place', date: 'Jan 2005' },
  { event: 'ACM ICPC Asia Regional - Beijing', award: '15th place', date: 'Jan 2004' },
  { event: 'ACM ICPC Asia Regional - Taipei', award: '10th place', date: 'Jan 2004' },
  { event: 'National Computer Programming Contest', award: '2nd place', date: 'Jan 2004' }
]

export default function Competitions() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="competitions" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Programming Competition Records</h2>
          
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full bg-white rounded-lg p-6 shadow-md flex items-center justify-between hover:shadow-lg transition-shadow"
            >
              <span className="text-lg font-medium">
                {isExpanded ? 'Hide Competition Records' : 'Show Competition Records'}
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="space-y-3">
                    {competitions.map((comp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-center justify-between py-3 border-b last:border-b-0"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium">{comp.event}</h4>
                          <p className="text-sm text-gray-600">{comp.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          comp.award.includes('1st') ? 'bg-yellow-100 text-yellow-800' :
                          comp.award.includes('2nd') ? 'bg-gray-100 text-gray-800' :
                          comp.award.includes('Silver') ? 'bg-gray-100 text-gray-800' :
                          comp.award.includes('Bronze') ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {comp.award}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}