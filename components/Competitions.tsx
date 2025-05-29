'use client'

import { motion } from 'framer-motion'

const competitions = [
  { event: 'ACM ICPC Asia Regional - Kaohsiung', award: 'Silver Award', date: '2006' },
  { event: 'ACM ICPC Asia Regional - Shanghai', award: 'Bronze Award', date: '2006' },
  { event: 'National Computer Programming Contest', award: '1st place', date: '2006' },
  { event: 'ACM ICPC Asia Regional - Taipei', award: '7th place', date: '2005' },
  { event: 'National Computer Programming Contest', award: '1st place', date: '2005' },
  { event: 'ACM ICPC Asia Regional - Beijing', award: '15th place', date: '2004' },
  { event: 'ACM ICPC Asia Regional - Taipei', award: '10th place', date: '2004' },
  { event: 'National Computer Programming Contest', award: '2nd place', date: '2004' }
]

export default function Competitions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8">Competition Records</h2>
          
          <div className="grid gap-3 sm:grid-cols-2">
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-3 bg-white rounded-lg"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium">{comp.event}</p>
                  <p className="text-xs text-gray-600">{comp.date}</p>
                </div>
                <span className={`ml-3 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
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
        </motion.div>
      </div>
    </section>
  )
}