'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function VibeCoding() {
  const [activeProject, setActiveProject] = useState<'quicktax' | null>(null)

  return (
    <section id="vibe-coding" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Vibe Coding
              </span>{' '}
              Experiments
            </h2>
            <p className="text-gray-600 text-lg">Where AI meets creativity • 100% AI-generated code</p>
          </div>

          {/* Future Dollar - Minimal Layout */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 space-y-4">
                <div className="inline-flex items-center gap-2 text-sm text-purple-600 font-medium">
                  <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                  1 Day Build
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Future Dollar</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A simple web app-based calculator to help people make better spending decisions.
                </p>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                  <p className="text-sm text-purple-900">
                    <span className="font-semibold">🤖 AI Stack:</span> Cursor + Claude 4 + Gemini
                  </p>
                  <p className="text-xs text-purple-700 mt-1">
                    Zero human coding • AI-generated PRD • Light review only
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://futuredollar.denehs.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-medium"
                  >
                    Try Live Demo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/denehs/future-dollar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-2xl opacity-20"></div>
                  <Image
                    src="/assets/vibe-coding/futuredollar-ipad.png"
                    alt="Future Dollar Screenshot"
                    width={800}
                    height={600}
                    className="relative rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Quick Tax - Feature-rich Layout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="lg:w-2/5 space-y-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/assets/vibe-coding/quicktax-icon-small.png"
                      alt="QuickTax Icon"
                      width={80}
                      height={80}
                      className="rounded-2xl shadow-lg"
                    />
                    <div>
                      <div className="inline-flex items-center gap-2 text-sm text-green-600 font-medium mb-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                        2 Day MVP + iOS App
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">Quick Tax</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A simplified tax software helping California tech employees calculate their estimated tax.
                  </p>
                  
                  <div className="bg-white/70 rounded-xl p-4 border border-green-100">
                    <p className="text-sm text-green-900 font-semibold mb-2">🚀 AI Development Process:</p>
                    <ul className="text-xs text-green-800 space-y-1">
                      <li>• Claude Code generated 100% of codebase</li>
                      <li>• Gemini created comprehensive PRD</li>
                      <li>• Wrapped as iOS app with enhancements</li>
                      <li>• Zero human coding or debugging</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="http://quicktax.denehs.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full hover:from-green-700 hover:to-blue-700 transition-all font-medium shadow-lg"
                    >
                      Launch App
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/denehs/quick-tax"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                
                <div className="lg:w-3/5 relative">
                  <div className="flex gap-4 items-start">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative flex-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl blur-xl opacity-20"></div>
                      <Image
                        src="/assets/vibe-coding/quicktax-ipad.png"
                        alt="QuickTax iPad Screenshot"
                        width={600}
                        height={450}
                        className="relative rounded-xl shadow-xl"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative w-32 lg:w-40"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-xl opacity-20"></div>
                      <Image
                        src="/assets/vibe-coding/quicktax-iphone.png"
                        alt="QuickTax iPhone Screenshot"
                        width={200}
                        height={400}
                        className="relative rounded-xl shadow-xl"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-gray-700">iOS App Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Development Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
              <span className="text-2xl">🤖</span>
              <span className="text-sm font-medium text-gray-700">
                Proudly built with AI • No human coding involved
              </span>
              <span className="text-2xl">✨</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}