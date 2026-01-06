"use client"

import { motion } from "framer-motion"

export function OfficialBanner() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F7FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-3"
          >
            Official Event Banner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium"
          >
            Approved printed notice for the 13th JNTUA Inter Collegiate Games Meet
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-[1100px] mx-auto overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory"
          role="region"
          aria-label="Official event banner - swipe horizontally to view full image"
        >
          <div className="min-w-full md:min-w-[800px] snap-start">
            <img
              src="/images/official-event-banner.jpg"
              loading="lazy"
              alt="Official Event Banner for 13th JNTUA Inter Collegiate Games Meet"
              className="w-full h-auto rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-white/50"
            />
          </div>


        </motion.div>
      </div>
    </section>
  )
}
