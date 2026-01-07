"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight, Calendar, MapPin } from "lucide-react"

export function Hero() {
  const scrollToSchedule = () => {
    const scheduleSection = document.getElementById("schedule")
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-16 sm:pt-20 pb-10 sm:pb-12 md:pt-32 md:pb-24 overflow-hidden bg-[#F5F7FB]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#EDE9FE_0%,#F5F7FB_60%)] opacity-100" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366F10A_1px,transparent_1px),linear-gradient(to_bottom,#6366F10A_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="w-full aspect-square sm:aspect-auto flex items-center justify-center p-4 sm:p-0">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-row items-center justify-center gap-8 sm:gap-8 md:gap-16 mb-6 sm:mb-10"
            >
              <img
                src="/images/image-removebg-preview.png"
                alt="JNTU Logo"
                className="h-14 sm:h-16 md:h-24 lg:h-32 w-auto object-contain drop-shadow-sm"
              />
              <img
                src="/images/rgm-cet-logo.png"
                alt="RGM College Logo"
                className="h-14 sm:h-16 md:h-24 lg:h-32 w-auto object-contain drop-shadow-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-2 sm:mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Department of Physical Education Presents
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-6 tracking-tight text-balance leading-tight sm:leading-snug md:leading-[0.95] text-slate-900"
            >
              <span className="block">13<span className="text-primary font-serif italic">th</span> JNTUA</span>
              <span className="block sm:inline"> <span className="text-secondary italic">INTER COLLEGIATE</span></span>
              <span className="block">GAMES MEET 2026</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-xl text-slate-600 mb-4 md:mb-8 max-w-full sm:max-w-2xl mx-auto font-medium"
            >
              RGM College of Engineering & Technology (Autonomous)
              <br />
              <span className="text-slate-900 font-bold">Nandyal, Andhra Pradesh</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-bold">10 - 12 JAN 2026</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="font-bold">Main Stadium & Indoor Arena</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToSchedule}
                className="w-50 sm:w-auto h-14 px-10 rounded-full font-black text-base group bg-[#6366F1] hover:bg-[#6366F1]/90 shadow-[0_10px_20px_rgba(99,102,241,0.3)] transition-all hover:scale-105"
              >
                View Schedule <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
