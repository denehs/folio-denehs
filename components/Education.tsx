'use client'

import { motion } from 'framer-motion'

const education = [
  {
    institution: 'National Taiwan University',
    degrees: [
      { title: 'Master of Science (MS), Computer Science', period: '2008-2010' },
      { title: 'Bachelor of Science (BS), Computer Science', period: '2004-2008' }
    ]
  },
  {
    institution: 'National Experimental High School at Hsinchu Science Park',
    degrees: []
  }
]

export default function Education() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-gray-200 pl-6"
              >
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                {edu.degrees.length > 0 ? (
                  <div className="mt-2 space-y-1">
                    {edu.degrees.map((degree, i) => (
                      <div key={i}>
                        <p className="text-gray-800">{degree.title}</p>
                        <p className="text-sm text-gray-600">{degree.period}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 mt-1">High School Diploma</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}