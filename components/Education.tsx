'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const education = [
  {
    institution: 'National Taiwan University',
    degrees: [
      {
        title: 'Master of Science (MS), Computer Science',
        period: '2008-2010'
      },
      {
        title: 'Bachelor of Science (BS), Computer Science',
        period: '2004-2008'
      }
    ]
  },
  {
    institution: 'National Experimental High School at Hsinchu Science Park',
    degrees: []
  }
]

export default function Education() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full bg-gray-50 rounded-lg p-6 flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg font-medium">
                {isExpanded ? 'Hide Education Details' : 'Show Education Details'}
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
                className="mt-6 space-y-6"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold mb-3">{edu.institution}</h3>
                    {edu.degrees.length > 0 ? (
                      <div className="space-y-2">
                        {edu.degrees.map((degree, i) => (
                          <div key={i}>
                            <p className="font-medium">{degree.title}</p>
                            <p className="text-sm text-gray-600">{degree.period}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">High School Diploma</p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}