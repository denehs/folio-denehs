'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [activeProject, setActiveProject] = useState<'quicktax' | null>(null)

  return (
    <section id="vibe-coding" className="py-20 scroll-mt-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
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
                Projects
              </span>
            </h2>
          </div>

          {/* Neko Card - Minimal Layout */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 space-y-4">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src="/assets/vibe-coding/nekocard-icon.png"
                    alt="Neko Card Icon"
                    width={80}
                    height={80}
                    className="rounded-2xl shadow-lg"
                  />
                  <div>
                    <div className="inline-flex items-center gap-2 text-sm text-purple-600 font-medium mb-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                      iOS App
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Neko Card</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  An app that helps people maximize their credit card benefits and perks.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://nekocard.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-medium"
                  >
                    Visit Neko Card Website
                    <span className="sr-only"> (opens in new tab)</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative max-w-sm mx-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-2xl opacity-20"></div>
                  <Image
                    src="/assets/vibe-coding/nekocard-ipad.jpeg"
                    alt="Neko Card Screenshot"
                    width={400}
                    height={300}
                    className="relative rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Neko Cube - Colored Box Layout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 space-y-4">
                  <div className="inline-flex items-center gap-2 text-sm text-cyan-600 font-medium">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse"></span>
                    Web App
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Neko Cube</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A web-based 3D app that solves Rubik&apos;s cube with layer by layer approach.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href="https://nekocube.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors font-medium"
                    >
                      Try Neko Cube App
                      <span className="sr-only"> (opens in new tab)</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative max-w-sm mx-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl blur-2xl opacity-20"></div>
                    <Image
                      src="/assets/vibe-coding/nekocube-screenshot.png"
                      alt="Neko Cube Screenshot"
                      width={400}
                      height={600}
                      className="relative rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}