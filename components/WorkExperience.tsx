'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    company: 'Meta',
    logo: '/assets/logos/meta.svg',
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
    logo: '/assets/logos/mozilla.svg',
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
    logo: '/assets/logos/garmin.png',
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
    logo: '',
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

const education = [
  {
    institution: 'National Taiwan University',
    logo: '/assets/logos/ntu.svg',
    degrees: [
      { title: 'Master of Science (MS), Computer Science', period: '2008-2010' },
      { title: 'Bachelor of Science (BS), Computer Science', period: '2004-2008' }
    ]
  },
  {
    institution: 'National Experimental High School at Hsinchu Science Park',
    logo: '/assets/logos/nehs.png',
    degrees: []
  }
]

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
  logo?: string
  location: string
  period: string
  sections?: Section[]
  roles?: Role[]
}

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          
          <div className="relative">
            {/* Decorative timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {/* Work Experiences */}
              {experiences.map((exp: Experience, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 -top-1 w-4 h-4 bg-white border-4 border-blue-400 rounded-full hidden lg:block z-10"></div>
                  
                  <div className={`lg:ml-16 ${index % 2 === 0 ? 'lg:mr-0' : 'lg:mr-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 relative overflow-hidden"
                    >
                      {/* Decorative gradient accent */}
                      <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 bg-gradient-to-br ${
                        index === 0 ? 'from-purple-200 to-pink-200' :
                        index === 1 ? 'from-blue-200 to-cyan-200' :
                        index === 2 ? 'from-green-200 to-teal-200' :
                        'from-orange-200 to-yellow-200'
                      } opacity-30 blur-3xl`}></div>
                      <div className="relative z-10 mb-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                              {exp.company}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-gray-600">{exp.location}</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-600 font-medium">{exp.period}</span>
                            </div>
                          </div>
                          {exp.logo && (
                            <div className="ml-4 p-2 bg-white rounded-lg shadow-sm">
                              <Image
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                width={exp.company === 'Mozilla Corporation' ? 40 : 48}
                                height={exp.company === 'Mozilla Corporation' ? 40 : 48}
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {'sections' in exp && exp.sections ? (
                        <div className="space-y-8">
                          {exp.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="relative">
                              <div className="flex items-start gap-3 mb-4">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                                <div className="flex-1">
                                  <h4 className="text-lg font-bold text-gray-800">{section.department}</h4>
                                  <p className="text-sm text-purple-600 font-medium">{section.period}</p>
                                </div>
                              </div>
                              {section.description && (
                                <p className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line ml-5">{section.description}</p>
                              )}
                              <div className="space-y-3 ml-5">
                                {section.roles.map((role, roleIndex) => (
                                  <motion.div 
                                    key={roleIndex} 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: roleIndex * 0.1 }}
                                    className="group"
                                  >
                                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-all group-hover:shadow-md">
                                      <div className="flex items-start justify-between gap-4 mb-2">
                                        <h5 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                                          {role.title}
                                        </h5>
                                        {role.period && (
                                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                                            {role.period}
                                          </span>
                                        )}
                                      </div>
                                      {role.description && (
                                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{role.description}</p>
                                      )}
                                      {role.link && (
                                        <a 
                                          href={role.link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800 mt-3 font-medium transition-colors"
                                        >
                                          {role.link.text}
                                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                          </svg>
                                        </a>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : exp.roles ? (
                        <div className="space-y-3">
                          {exp.roles.map((role, roleIndex) => (
                            <motion.div 
                              key={roleIndex} 
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: roleIndex * 0.1 }}
                              className="group"
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                                <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-all group-hover:shadow-md">
                                  <div className="flex items-start justify-between gap-4 mb-2">
                                    <h5 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                                      {role.title}
                                    </h5>
                                    {role.period && (
                                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                                        {role.period}
                                      </span>
                                    )}
                                  </div>
                                  {role.description && (
                                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{role.description}</p>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : null}
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Education Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 -top-1 w-4 h-4 bg-white border-4 border-purple-400 rounded-full hidden lg:block z-10"></div>
                
                <div className="lg:ml-16">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 relative overflow-hidden"
                  >
                    {/* Decorative gradient accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 opacity-30 blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                        Education
                      </h3>
                      
                      <div className="space-y-6">
                        {education.map((edu, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mt-2"></div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="text-lg font-bold text-gray-800">{edu.institution}</h4>
                                  {edu.degrees.length > 0 ? (
                                    <div className="mt-2 space-y-2">
                                      {edu.degrees.map((degree, i) => (
                                        <div key={i} className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-3 border border-gray-100">
                                          <p className="text-gray-800 font-medium">{degree.title}</p>
                                          <p className="text-sm text-purple-600">{degree.period}</p>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <p className="text-gray-600 mt-1">High School Diploma</p>
                                  )}
                                </div>
                                {edu.logo && (
                                  <div className="ml-4 p-2 bg-white rounded-lg shadow-sm">
                                    <Image
                                      src={edu.logo}
                                      alt={`${edu.institution} logo`}
                                      width={edu.institution.includes('Taiwan') ? 120 : 48}
                                      height={48}
                                      className="object-contain"
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Competitions Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 -top-1 w-4 h-4 bg-white border-4 border-orange-400 rounded-full hidden lg:block z-10"></div>
                
                <div className="lg:ml-16">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 relative overflow-hidden"
                  >
                    {/* Decorative gradient accent */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 opacity-30 blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                        Competition Records
                      </h3>
                      
                      <div className="grid gap-3 sm:grid-cols-2">
                        {competitions.map((comp, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:border-gray-200 transition-all hover:shadow-md"
                          >
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-800">{comp.event}</p>
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
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}