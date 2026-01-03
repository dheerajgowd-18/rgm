import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { OfficialBanner } from "@/components/official-banner"
import { SportsEvents } from "@/components/sports-events"
import { DayPlanner } from "@/components/day-planner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <OfficialBanner />
      <SportsEvents />
      <DayPlanner />
      <Footer />
    </main>
  )
}
