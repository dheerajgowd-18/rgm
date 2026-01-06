"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F1F5F9] pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left lg:col-span-2"
          >
            <div className="flex flex-col mb-6">
              <h3 className="text-xl font-black text-foreground leading-tight">RGM SPORTS</h3>
              <p className="text-xs font-bold text-primary tracking-widest uppercase">
                Department of Physical Education
              </p>
            </div>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
              RGM College of Engineering & Technology (Autonomous) proudly hosts the 13th JNTUA Inter Collegiate Games
              Meet 2025-26, bringing together the best collegiate athletes for three days of exceptional competition.
            </p>
            <p className="text-xs text-muted-foreground">
              Approved by AICTE, New Delhi | Affiliated to JNTUA, Ananthapuramu
              <br />
              Accredited by NBA (7 times) | Accredited by NAAC with A+ Grade
            </p>

            <div className="mt-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <a
                  href="https://drive.google.com/file/d/1UrTuD1WpCNLS-YHPgERtU9xFdOcrT6ji/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center gap-3 px-4 py-3 h-12 border border-border rounded-md bg-white shadow-sm hover:shadow-md hover:bg-primary/5 hover:border-primary transition-shadow transition-colors text-sm font-medium text-foreground/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  aria-label="Policies & Declarations PDF (opens in a new tab on Google Drive)"
                  title="Policies & Declarations (opens in a new tab)"
                >
                  <span className="text-lg leading-none" aria-hidden>
                    📄
                  </span>
                  <span>Policies & Declarations (PDF)</span>
                </a>

                <a
                  href="https://drive.google.com/file/d/1akYl7Rqu2l8KJgnFsDV-PI_l75GZwCdl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center gap-3 px-4 py-3 h-12 border border-border rounded-md bg-white shadow-sm hover:shadow-md hover:bg-primary/5 hover:border-primary transition-shadow transition-colors text-sm font-medium text-foreground/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  aria-label="Accommodation Rules PDF (opens in a new tab on Google Drive)"
                  title="Accommodation Rules (opens in a new tab)"
                >
                  <span className="text-lg leading-none" aria-hidden>
                    📄
                  </span>
                  <span>Accommodation Rules (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Removed as per request */}
          <div className="hidden"></div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-xs sm:text-sm text-left">
                  RGM College of Engineering & Technology
                  <br />
                  Nandyal-518501, A.P., India
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-xs sm:text-sm text-left">
                  <p className="font-semibold">Mr. P. Venkatesh</p>
                  <p className="text-xs">Physical Director</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-xs sm:text-sm text-left">
                  <p className="font-semibold">Prof. T. Narayana Reddy</p>
                  <p className="text-xs">Secretary Sports Council, JNTUA</p>
                </div>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-left">
                <span className="font-semibold">Director:</span> Dr. D.V. Ashok Kumar
              </p>
              <p className="text-xs text-muted-foreground text-left">
                <span className="font-semibold">Principal:</span> Dr. T. Jayachandra Prasad
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              © 2026 RGM College of Engineering & Technology. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center">13th JNTUA Inter Collegiate Games Meet 2025-26</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
