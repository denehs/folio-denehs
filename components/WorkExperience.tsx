'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    company: 'Meta',
    location: 'California, US',
    period: 'March 2014 - Present',
    roles: [
      {
        title: 'Individual Contributor',
        department: 'Wearable Product',
        period: 'June 2025 - Present',
        description: 'Focusing on individual contributions to wearable product development.'
      },
      {
        title: 'Senior Engineering Manager',
        department: 'Wearable Product',
        period: 'March 2020 - May 2025',
        description: 'Established high-performant team from 0 to ~40 with focus on user-facing wearable products.'
      },
      {
        title: 'Senior Staff Software Engineer',
        department: 'NPE',
        period: 'September 2019 - March 2020',
        description: 'Explored new products with NPE team.'
      },
      {
        title: 'Senior Engineering Manager',
        department: 'Facebook Search',
        period: 'January 2019 - August 2019',
        description: 'Focusing on world-class search products across web, Android, iOS, and lite interfaces.'
      },
      {
        title: 'Engineering Manager',
        department: 'Facebook Search',
        period: 'January 2017 - December 2018',
        description: 'Evolved Facebook\'s search experience from profile search only toward content search.'
      },
      {
        title: 'Engineering Manager (M0)',
        department: 'Facebook Search',
        period: 'June 2016 - December 2016',
        description: 'Involved in rapid product experimentations and launched new search experiences.'
      },
      {
        title: 'Senior Software Engineer',
        department: 'Facebook Search',
        period: 'January 2015 - May 2016',
        description: 'Launched new search experiences that serve billions of queries per day.'
      },
      {
        title: 'Software Engineer',
        department: 'Facebook Search',
        period: 'March 2014 - December 2014',
        description: 'Contributed to search products development.'
      }
    ]
  },
  {
    company: 'Mozilla Corporation',
    location: 'Taipei, Taiwan',
    period: 'September 2013 - November 2013',
    roles: [
      {
        title: 'Software Engineer',
        period: 'September 2013 - November 2013',
        description: 'Firefox OS - SNTP, EAP-SIM.'
      }
    ]
  },
  {
    company: 'Garmin International',
    location: 'Taipei, Taiwan',
    period: 'October 2010 - August 2013',
    roles: [
      {
        title: 'Adv. Software Engineer',
        period: 'October 2010 - August 2013',
        description: 'Contributed to Map Technology and Mobile Applications teams, enhancing phone number search, reducing routing calculation time (15%-50%), and working on Garmin\'s next-generation navigation core. Developed "Ferome" mobile app and contributed to StreetPilot for iOS/Android and Monterra. Promoted to Advanced Software Engineer in 2 years and 2 months.'
      }
    ]
  },
  {
    company: 'ESP Style',
    location: 'Taipei, Taiwan',
    period: 'May 2008 - July 2010',
    roles: [
      {
        title: 'Web Developer',
        period: 'May 2008 - July 2010',
        description: 'Server-side applications (in PHP+MySQL) for customers, mainly focusing on content management systems, along with some other functions like chatroom, guest book, e-commerce, etc. Frontend works using jQuery.'
      }
    ]
  }
]

export default function WorkExperience() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>('Meta')

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedCompany(expandedCompany === exp.company ? null : exp.company)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <p className="text-gray-600">{exp.location} • {exp.period}</p>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedCompany === exp.company ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {expandedCompany === exp.company && (
                  <div className="px-6 pb-6">
                    <div className="space-y-4">
                      {exp.roles.map((role, roleIndex) => (
                        <motion.div
                          key={roleIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: roleIndex * 0.1 }}
                          className="border-l-2 border-blue-500 pl-4"
                        >
                          <h4 className="font-semibold">{role.title}</h4>
                          {'department' in role && role.department && (
                            <p className="text-sm text-gray-600">{role.department}</p>
                          )}
                          <p className="text-sm text-gray-500">{role.period}</p>
                          <p className="text-gray-700 mt-2">{role.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}