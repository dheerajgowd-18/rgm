import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "13th JNTUA Inter Collegiate Games Meet 2025-26 | RGM College",
  description:
    "Join RGM College of Engineering & Technology for the 13th JNTUA Inter Collegiate Games Meet featuring 10 sports including Basketball, Volleyball, Table Tennis, Badminton, Hand Ball, Kabaddi, Football, Throw Ball, Rugby, and Ball Badminton. January 10-12, 2026 at RGM Sports Complex, Nandyal.",
  generator: "v0.app",
  keywords: [
    "JNTUA sports meet",
    "RGM College sports",
    "intercollege games",
    "basketball",
    "volleyball",
    "badminton",
    "kabaddi",
    "football",
    "Nandyal sports",
    "engineering college sports",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#d91b5c" },
    { media: "(prefers-color-scheme: dark)", color: "#d91b5c" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* suppressHydrationWarning prevents console hydration mismatch warnings for attributes injected by
          browser extensions (e.g. Grammarly) or other runtime mutations on <body>. */}
      <body suppressHydrationWarning className={`font-sans antialiased`}>
        {children}
        <div className="fixed bottom-4 right-4 z-[100] pointer-events-none select-none opacity-15 hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-black text-slate-900 font-mono tracking-widest">@dg</span>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
