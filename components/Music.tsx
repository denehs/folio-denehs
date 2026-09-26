'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=3xNP0--L-L8'
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/channel/UClYCiMSvnnURaYitqw_AXFA'

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  )
}

export default function Music() {
  return (
    <section id="music" className="py-20 scroll-mt-20 bg-gradient-to-b from-gray-50 via-amber-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Music</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
            Classical guitar student at Ohlone College, studying performance through the
            Applied Music program. This portfolio is just getting started — one recital
            and one recording in, with more to come.
          </p>
          <div className="flex justify-center mb-14">
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium shadow-md"
            >
              <YouTubeIcon className="w-5 h-5 mr-2" />
              My YouTube Channel
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </motion.div>

        {/* Featured performance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100">
            <div className="px-8 md:px-10 pt-8 md:pt-10">
              <p className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                Featured Performance
              </p>
              <h3 className="text-2xl font-semibold text-gray-900">
                L&aacute;grima &mdash; Francisco T&aacute;rrega
              </h3>
              <p className="text-gray-600 mt-2">
                Ohlone College Applied Music Recital &middot; May 2026
              </p>
            </div>
            <div className="px-8 md:px-10 pb-8 md:pb-10">
              <a
                href={YOUTUBE_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium shadow-md"
              >
                <YouTubeIcon className="w-5 h-5 mr-2" />
                Watch my recording on YouTube
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Cat Metronome promo — compact banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-10"
        >
          <a
            href="https://apps.apple.com/us/app/cat-metronome/id6756994792"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white rounded-2xl border border-amber-100 shadow-md px-5 py-4 hover:shadow-lg transition-shadow"
          >
            <Image
              src="/assets/music/cat-metronome-icon.png"
              alt="Cat Metronome app icon"
              width={56}
              height={56}
              className="rounded-xl w-14 h-14 flex-shrink-0 object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">My App</p>
              <p className="font-semibold text-gray-900">Cat Metronome</p>
              <p className="text-sm text-gray-600">
                A cute metronome with a playful cat that moves to the beat — make practice more fun.
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center text-sm font-medium text-amber-700 flex-shrink-0">
              Download on the App Store
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="sr-only"> (opens in new tab)</span>
            </span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          New repertoire in progress &mdash; more recitals and recordings on the way.
        </motion.p>
      </div>
    </section>
  )
}
