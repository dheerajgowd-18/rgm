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
          className="relative max-w-[1100px] mx-auto overflow-x-auto pb-4 md:pb-0 scrollbar-hide"
        >
          <div className="min-w-[800px] md:min-w-full">
            <img
              src="/images/official-event-banner.jpg"
              alt="Official Event Banner for 13th JNTUA Inter Collegiate Games Meet"
              className="w-full h-auto rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-white/50"
            />
          </div>

          {/* Mobile indicator for scroll */}
          <div className="md:hidden mt-4 text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-200/50 px-3 py-1 rounded-full">
              ← Swipe to see full banner →
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
