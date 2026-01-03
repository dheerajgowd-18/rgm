"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const sports = [
  {
    name: "Basketball",
    image: "/professional-basketball-match-action.jpg",
    men: "12",
    women: "12",
    description: "Full court 5v5 tournament with intense competition",
    color: "from-primary/20 to-primary/5",
    details:
      "Professional basketball tournament following official rules. Quarter finals on Day 1, Semi-finals on Day 2, and Championship finals on Day 3.",
    schedule: ["Day 1: 9:00 AM - Group Matches", "Day 2: 11:00 AM - Quarter Finals", "Day 3: 9:00 AM - Finals"],
  },
  {
    name: "Volleyball",
    image: "/volleyball-tournament-action.jpg",
    men: "12",
    women: "12",
    description: "6v6 indoor volleyball championship",
    color: "from-secondary/20 to-secondary/5",
    details:
      "Indoor volleyball championship with best-of-five set format. Teams compete in pool play before advancing to knockout rounds.",
    schedule: ["Day 1: 2:00 PM - Round 1", "Day 2: 3:00 PM - Semifinals", "Day 3: 2:00 PM - Finals"],
  },
  {
    name: "Table Tennis",
    image: "/table-tennis-pro-match.jpg",
    men: "2+1",
    women: "2+1",
    description: "Singles and doubles fast-paced competition",
    color: "from-chart-3/20 to-chart-3/5",
    details:
      "Singles and team events following official regulations. Best-of-five games format with 11-point scoring in each game.",
    schedule: ["Day 1: 1:00 PM - Preliminary Rounds", "Day 2: 1:00 PM - Semifinals", "Day 3: 10:00 AM - Finals"],
  },
  {
    name: "Badminton",
    image: "/badminton-smash-action.jpg",
    men: "2+1",
    women: "2+1",
    description: "Singles and doubles indoor court matches",
    color: "from-accent/20 to-accent/5",
    details:
      "Men's and women's singles and doubles competitions. Best-of-three games format with 21-point rally scoring system.",
    schedule: ["Day 1: 4:00 PM - Singles Rounds", "Day 2: 5:00 PM - Doubles", "Day 3: 10:00 AM - Finals"],
  },
  {
    name: "Hand Ball",
    image: "/handball-game-play.jpg",
    men: "12",
    women: "12",
    description: "Fast-paced team handball tournament",
    color: "from-chart-4/20 to-chart-4/5",
    details: "7-player team handball with two 30-minute halves. High-intensity matches with quick passes and goals.",
    schedule: ["Day 1: 11:00 AM - Group Stage", "Day 2: 12:00 PM - Semifinals", "Day 3: 3:00 PM - Finals"],
  },
  {
    name: "Ball Badminton",
    // Updated to use the new image file. Place the provided image in `public/ball-badminton.jpg`.
    image: "/ball-badminton.jpg",
    men: "10",
    women: "10",
    description: "Traditional Indian ball badminton sport",
    color: "from-chart-5/20 to-chart-5/5",
    details:
      "Traditional sport played with a yellow ball over a net. Teams of 5 players compete in best-of-three games format.",
    schedule: ["Day 1: 3:00 PM - League Rounds", "Day 2: 4:00 PM - Knockouts", "Day 3: 5:00 PM - Finals"],
  },
  {
    name: "Kabaddi",
    image: "/kabaddi-raid-match.jpg",
    men: "12+2",
    women: "",
    description: "Traditional contact sport with raiding",
    color: "from-primary/20 to-primary/5",
    details:
      "Traditional Indian sport featuring 7-player teams. Two halves of 20 minutes each with strategic raids and defensive formations.",
    schedule: ["Day 1: 3:00 PM - Group Matches", "Day 2: 4:00 PM - Knockout Rounds", "Day 3: 5:00 PM - Finals"],
  },
  {
    name: "Football (7-A-Side)",
    image: "/7-a-side-football-match.jpg",
    men: "7+3",
    women: "",
    description: "Compact 7-a-side football tournament",
    color: "from-secondary/20 to-secondary/5",
    details: "7-a-side football on smaller pitch. Two 25-minute halves with fast-paced action and tactical gameplay.",
    schedule: ["Day 1: 9:00 AM - Group Matches", "Day 2: 10:00 AM - Semifinals", "Day 3: 11:00 AM - Finals"],
  },
  {
    name: "Throw Ball",
    image: "/throwball-women-sports-action.jpg",
    men: "",
    women: "12",
    description: "Women's throw ball championship",
    color: "from-accent/20 to-accent/5",
    details:
      "7-player teams competing in throw ball. Best-of-three sets format with 15 points per set. High-flying catches and strategic throws.",
    schedule: ["Day 1: 2:00 PM - Preliminary", "Day 2: 3:00 PM - Semifinals", "Day 3: 4:00 PM - Finals"],
  },
  {
    name: "Rugby",
    image: "/rugby-sevens-women-match.jpg",
    men: "",
    women: "12",
    description: "Women's rugby sevens tournament",
    color: "from-chart-4/20 to-chart-4/5",
    details:
      "Rugby sevens format with 7 players per team. Two 7-minute halves of intense physical competition and tactical gameplay.",
    schedule: ["Day 1: 10:00 AM - Pool Matches", "Day 2: 11:00 AM - Quarterfinals", "Day 3: 12:00 PM - Finals"],
  },
]

export function SportsEvents() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F7FB]" id="sports">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
            The Main Events
          </div>
          <h2 className="text-3xl md:text-6xl font-black mb-4 tracking-tighter text-slate-900">
            SPORTS <span className="text-secondary italic">CHAMPIONSHIP</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Join the elite competition across 10 disciplines at the 13th JNTUA Inter Collegiate Meet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-none bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] rounded-2xl h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                <div className="relative h-44 sm:h-56 overflow-hidden">
                  <img
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">{sport.name}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1 font-medium">{sport.description}</p>
                  <div className="flex items-center justify-between mb-4 text-xs">
                    {sport.men && (
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="font-semibold">Men: {sport.men}</span>
                      </div>
                    )}
                    {sport.women && (
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-semibold">Women: {sport.women}</span>
                      </div>
                    )}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-11 rounded-xl border-slate-200 font-bold hover:bg-primary hover:border-primary hover:text-white transition-all text-sm bg-transparent"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl sm:text-3xl">{sport.name}</DialogTitle>
                        <DialogDescription className="text-base">{sport.description}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 mt-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">Event Details</h4>
                          <p className="text-muted-foreground leading-relaxed">{sport.details}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {sport.men && (
                            <div className="p-4 bg-muted rounded-lg">
                              <p className="text-sm text-muted-foreground mb-1">Men's Teams</p>
                              <p className="text-2xl font-bold">{sport.men}</p>
                            </div>
                          )}
                          {sport.women && (
                            <div className="p-4 bg-muted rounded-lg">
                              <p className="text-sm text-muted-foreground mb-1">Women's Teams</p>
                              <p className="text-2xl font-bold">{sport.women}</p>
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-lg">Competition Schedule</h4>
                          <div className="space-y-2">
                            {sport.schedule.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-sm">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
