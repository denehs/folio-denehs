'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Meta',
    location: 'California, US',
    period: 'March 2014 - Present',
    sections: [
      {
        department: 'Wearable Product',
        period: 'March 2020 - Present',
        roles: [
          {
            title: 'Individual Contributor',
            period: 'June 2025 - Present',
            description: 'Wearable product development.'
          },
          {
            title: 'Senior Engineering Manager',
            period: 'March 2020 - May 2025',
            description: 'Established team from 0 to 30+ with focus on user-facing wearable products.\nLaunched Be My Eyes <=> Ray-Ban Meta integration, bringing visual assistance to blind and low-vision users through smart glasses.',
            link: {
              text: 'Learn more about Be My Eyes integration',
              url: 'https://www.bemyeyes.com/be-my-eyes-smartglasses/'
            }
          }
        ]
      },
      {
        department: 'NPE',
        period: 'September 2019 - March 2020',
        roles: [
          {
            title: 'Senior Staff Software Engineer',
            description: 'Explored new products with NPE team.'
          }
        ]
      },
      {
        department: 'Facebook Search',
        period: 'March 2014 - August 2019',
        description: 'Focusing on world-class search products across web, Android, iOS, and lite interfaces. Evolved Facebook\'s search experience from profile search only toward content (posts/photo/video, etc.) search. Involved in rapid product experimentations and launched new search experiences that serve billions of queries per day.',
        roles: [
          {
            title: 'Senior Engineering Manager',
            period: 'January 2019 - August 2019'
          },
          {
            title: 'Engineering Manager',
            period: 'January 2017 - December 2018'
          },
          {
            title: 'Engineering Manager (M0)',
            period: 'June 2016 - December 2016'
          },
          {
            title: 'Senior Software Engineer',
            period: 'January 2015 - May 2016'
          },
          {
            title: 'Software Engineer',
            period: 'March 2014 - December 2014'
          }
        ]
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

interface Role {
  title: string
  period?: string
  description?: string
  link?: {
    text: string
    url: string
  }
}

interface Section {
  department: string
  period: string
  description?: string
  roles: Role[]
}

interface Experience {
  company: string
  location: string
  period: string
  sections?: Section[]
  roles?: Role[]
}

export default function WorkExperience() {
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
          
          <div className="space-y-8">
            {experiences.map((exp: Experience, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-gray-600">{exp.location} • {exp.period}</p>
                </div>
                
                {'sections' in exp && exp.sections ? (
                  <div className="space-y-8">
                    {exp.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-400"></div>
                        <div className="pl-6">
                          <div className="mb-4">
                            <h4 className="text-xl font-bold text-gray-900">{section.department}</h4>
                            <p className="text-sm font-medium text-blue-600">{section.period}</p>
                          </div>
                          {section.description && (
                            <p className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">{section.description}</p>
                          )}
                          <div className="space-y-4">
                            {section.roles.map((role, roleIndex) => (
                              <div key={roleIndex} className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-start justify-between mb-2">
                                  <h5 className="font-semibold text-gray-900">{role.title}</h5>
                                  {role.period && (
                                    <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">{role.period}</span>
                                  )}
                                </div>
                                {role.description && (
                                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{role.description}</p>
                                )}
                                {role.link && (
                                  <a 
                                    href={role.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-3 font-medium"
                                  >
                                    {role.link.text}
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : exp.roles ? (
                  <div className="space-y-4">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-400"></div>
                        <div className="pl-6">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-semibold text-gray-900">{role.title}</h5>
                              {role.period && (
                                <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">{role.period}</span>
                              )}
                            </div>
                            {role.description && (
                              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{role.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}