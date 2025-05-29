'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const catPhotos = [
  { src: '/assets/interests/cat-birthday-15.jpg', alt: 'Orange cat with birthday hat celebrating 15th birthday' },
  { src: '/assets/interests/two-cats.jpg', alt: 'Orange and gray tabby cats together' },
  { src: '/assets/interests/cat-playing.jpg', alt: 'Brown tabby cat playing with toy' },
  { src: '/assets/interests/cat-reaching.jpg', alt: 'Orange cat reaching up playfully' },
  { src: '/assets/interests/cat-necoichi.jpg', alt: 'Gray tabby with necoichi box' }
]

export default function Interests() {
  const [selectedCat, setSelectedCat] = useState<number | null>(null)

  return (
    <section id="interests" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16">Beyond the Code</h2>
          
          {/* Cat Dad Section - More weight */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Cat Dad</h3>
                <p className="text-gray-600">Proud parent of 4 cats, with the eldest being 16 years old</p>
              </div>
              
              {/* Asymmetric photo grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {/* Featured large photo - birthday cat */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                  onClick={() => setSelectedCat(0)}
                >
                  <Image
                    src={catPhotos[0].src}
                    alt={catPhotos[0].alt}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <p className="text-white text-sm font-medium">15th Birthday Celebration!</p>
                  </div>
                </motion.div>
                
                {/* Smaller photos */}
                {catPhotos.slice(1).map((photo, index) => (
                  <motion.div
                    key={index + 1}
                    whileHover={{ scale: 1.05 }}
                    className={`relative overflow-hidden rounded-xl shadow-md cursor-pointer ${
                      index === 0 ? 'row-span-2' : ''
                    }`}
                    onClick={() => setSelectedCat(index + 1)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Freediving Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800">Freediving</h3>
                  <p className="text-gray-600">AIDA 2 certified freediver exploring the underwater world</p>
                  
                  <div className="bg-white/70 rounded-xl p-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">Personal Record</p>
                    <p className="text-xl font-bold text-blue-700">13 meters at Lake Berryessa</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://eos.aidainternational.org/print_certificate/230877"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      View AIDA Certificate
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=5LTWn4qi7IA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      Watch My Freediving Video
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative overflow-hidden rounded-2xl shadow-xl"
                  >
                    <Image
                      src="/assets/interests/freediving.jpg"
                      alt="Freediving underwater"
                      width={400}
                      height={500}
                      className="object-cover w-full h-full aspect-[4/5]"
                    />
                  </motion.div>
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-200 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Kart Racing Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative overflow-hidden rounded-2xl shadow-xl"
                  >
                    <Image
                      src="/assets/interests/karting.jpg"
                      alt="Kart racing"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full aspect-[5/4] filter grayscale-[50%]"
                    />
                  </motion.div>
                  <div className="absolute -top-2 -left-2 w-20 h-20 bg-gray-400 rounded-full blur-2xl opacity-30"></div>
                </div>
                
                <div className="order-1 md:order-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Kart Racing</h3>
                    <p className="text-gray-600 mt-2">Former amateur kart racer for Team GFC, competed at Sonoma Kart Track and Prairie City Kart Track</p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://gfckarting.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all font-medium group"
                    >
                      <div className="bg-gray-100 p-2 rounded mr-3 group-hover:bg-gray-800">
                        <Image
                          src="/assets/interests/gfc-logo-processed.png"
                          alt="GFC"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm">Team GFC</span>
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    
                    <a
                      href="https://pckarting.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all text-sm font-medium"
                    >
                      Prairie City Kart Track
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Cat photo modal */}
      {selectedCat !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCat(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={catPhotos[selectedCat].src}
              alt={catPhotos[selectedCat].alt}
              width={1200}
              height={900}
              className="rounded-lg object-contain max-h-[90vh] w-auto"
            />
            <button
              onClick={() => setSelectedCat(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}