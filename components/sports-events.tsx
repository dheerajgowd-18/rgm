"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ChevronRight, Trophy, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

// --- Data ---
const sports = [
  {
    name: "Basketball",
    image: "/professional-basketball-match-action.jpg",
    men: "13",
    women: "6",
    color: "from-primary/20 to-primary/5",
    schedule: ["Day 1: 9:00 AM - Group Matches", "Day 2: 11:00 AM - Quarter Finals", "Day 3: 9:00 AM - Finals"],
    teamsList: {
      men: [
        "NBKRIST, Nellore", "MITS, Mdpalli", "AITK, Kadapa", "PBRVITS, Kavali", "KSRM, Kadapa",
        "SVCET, Chittor", "JNTUA, ATP", "SVCE, TPT", "SRIT, PDTR", "ACEM, Mdpalli",
        "VISWAM, Mdpalli", "ASET, Gudur", "RGMCET, NDL"
      ],
      women: [
        "VISWAM, Mdpalli", "MITS, Mdpalli", "RGMCET, NDL", "NBKRIST, Nellore", "CBIT, PDTR", "PBRVITS, Kavali"
      ]
    }
  },
  {
    name: "Volleyball",
    image: "/volleyball-tournament-action.jpg",
    men: "32",
    women: "17",
    color: "from-secondary/20 to-secondary/5",
    schedule: ["Day 1: 2:00 PM - Round 1", "Day 2: 3:00 PM - Semifinals", "Day 3: 2:00 PM - Finals"],
    fixturesImage: "/images/volleyball-women-fixtures.jpg",
    teamsList: {
      men: [
        "MITS, Mdpalli", "GPCET, KNL", "JNTU, Kalikiri", "MIPER, KNL", "GPREC, KNL", "KORM, Kadapa",
        "SVREC, NDL", "SVCE, TPT", "ASET, Gudur", "GKCE, Nellore", "SREC, NDL", "AITS, Rajampeta",
        "JNTUACEP, PLVD", "AITK, Kadapa", "NRNG, Gudur", "PBRVITS, Kavali", "JNTUA, ATP", "SRET, TPT",
        "VISWAM, Mdpalli", "KSRM, Kadapa", "CBIT, PDTR", "SRIT, PDTR", "PIP, NDL", "RGMCET, NDL",
        "NBKRIST, Nellore", "NARN, Nellore", "JNTUA OTPRI, ATP", "SRCP, NDL", "KEC, Kuppam",
        "GIST, Nellore", "ACE, Mdpalli", "SDTN, Puttur"
      ],
      women: [
        "JNTUA, ATP", "GTMW, PDTR", "VISWAM, Mdpalli", "JNTUCEP, PLVD", "AITK, Kadapa", "SVREC, NDL",
        "AITS, Rajampeta", "SRIT, PDTR", "RGMCET, NDL", "JNTU, Kalikiri", "NBKRIST, Nellore",
        "ASKW, KNL", "SDTN, Puttur", "KSRM, Kadapa", "NRNG, Gudur", "MITS, Mdpalli", "SVCE, TPT"
      ]
    }
  },
  {
    name: "Table Tennis",
    image: "/table-tennis-pro-match.jpg",
    men: "10+9",
    women: "8+8",
    color: "from-chart-3/20 to-chart-3/5",
    schedule: ["Day 1: 1:00 PM - Preliminary Rounds", "Day 2: 1:00 PM - Semifinals", "Day 3: 10:00 AM - Finals"],
    teamsList: {
      men: {
        singles: [
          "NBKRIST, Nellore", "SRIT, PDTR", "RGMCET, NDL", "CBIT, PDTR", "SVCE, TPT",
          "AITK, Kadapa", "PBRVITS, Kavali", "KSRM, Kadapa", "NEC, Nellore", "JNTUA, ATP"
        ],
        doubles: [
          "NBKRIST, Nellore", "SRIT, PDTR", "AITK, Kadapa", "RGMCET, NDL", "SVCE, TPT",
          "PBRVITS, Kavali", "CBIT, PDTR", "NEC, Nellore", "JNTUA, ATP"
        ]
      },
      women: {
        singles: [
          "NBKRIST, Nellore", "GTMW, PDTR", "GIST, Nellore", "RGMCET, NDL", "JNTUCEP, PLVD",
          "SVCE, TPT", "CBIT, PDTR", "JNTUA, ATP"
        ],
        doubles: [
          "JNTUCEP, PLVD", "GIST, Nellore", "RGMCET, NDL", "GTMW, PDTR", "NBKRIST, Nellore",
          "CBIT, PDTR", "JNTUA, ATP (BYE)"
        ]
      }
    }
  },
  {
    name: "Badminton",
    image: "/badminton-smash-action.jpg",
    men: "20+23",
    women: "16+16",
    color: "from-accent/20 to-accent/5",
    schedule: ["Day 1: 4:00 PM - Singles Rounds", "Day 2: 5:00 PM - Doubles", "Day 3: 10:00 AM - Finals"],
    teamsList: {
      men: {
        singles: [
          "SREC, NDL", "VISWAM, Mdpalli", "CBIT, PDTR", "SVREC, NDL", "RGMCET, NDL", "NBKRIST, Nellore",
          "NRNG, Gudur", "SRCP, NDL", "CRVT, Tadipatri", "SVCET, Chittoor", "KSRM, Kadapa", "NARN, Nellore",
          "SVCE, TPT", "PBRVITS, Kavali", "ACEM, Mdpalli", "ASCET, Gudur", "AITK, Kadapa", "GPREC, KNL",
          "JNTUA, ATP", "MITS, Mdpalli"
        ],
        doubles: [
          "PBRVITS, Kavali", "KSRM, Kadapa", "JNTUA, ATP", "GIST, Nellore", "SVCE, TPT", "SRCP, NDL",
          "NARN, Nellore", "AITK, Kadapa", "JNTUK, Kalikiri", "SREC, NDL", "MIPER, KNL", "NBKRIST, Nellore",
          "GPREC, KNL", "VISWAM, Mdpalli", "CBIT, PDTR", "PIP, NDL", "RGMCET, NDL", "SRET, TPT",
          "SVREC, NDL", "KORM, Kadapa", "SVCET, Chittor", "GATES, Gooty", "MITS, Mdpalli"
        ]
      },
      women: {
        singles: [
          "GTMW, PDTR", "PBRVITS, Kavali", "CBIT, PDTR", "GPREC, KNL", "SVREC, NDL", "MITS, Mdpalli",
          "SREC, NDL", "JNTUA, ATP", "SVCE, TPT", "RGMCET, NDL", "NBKRIST, Nellore", "JNTUACEP, PLVD",
          "SRCP, NDL", "KMMIT, TPT"
        ],
        doubles: [
          "GTMW, PDTR", "MITS, Mdpalli", "JNTUCEP, PLVD", "SVCE, TPT", "SREC, NDL", "NRNG, Gudur",
          "RGMCET, NDL", "JNTUK, Kalikiri", "JNTUA, ATP", "SVREC, NDL", "ASKW, KNL", "SRCP, NDL",
          "NBKRIST, Nellore", "CBIT, PDTR", "PBRVITS, Kavali", "KMMITS, TPT"
        ]
      }
    }
  },
  {
    name: "Hand Ball",
    image: "/handball-game-play.jpg",
    men: "16",
    women: "6",
    color: "from-chart-4/20 to-chart-4/5",
    schedule: ["Day 1: 11:00 AM - Group Stage", "Day 2: 12:00 PM - Semifinals", "Day 3: 3:00 PM - Finals"],
    teamsList: {
      men: [
        "JNTUCE, Kalikiri", "MITS, Mdpalli", "NBKRIST, Nellore", "JNTUA, ATP", "KORM, Kadapa",
        "SVREC, NDL", "AITK, Kadapa", "JNTUCEP, PLVD", "RGMCET, NDL", "SRIT, PDTR", "PIP, NDL",
        "SRCP, NDL", "KSRM, Kadapa", "PBRVITS, Kavali", "SVCE, TPT", "SDTN, Puttur"
      ],
      women: [
        "NBKRIST, Nellore", "KSRM, Kadapa", "SVCE, TPT", "RGMCET, NDL", "VISWAM, Mdpalli", "JNTUCEP, PLVD"
      ]
    }
  },
  {
    name: "Ball Badminton",
    image: "/ball-badminton.jpg",
    men: "6",
    women: "5",
    color: "from-chart-5/20 to-chart-5/5",
    schedule: ["Day 1: 3:00 PM - League Rounds", "Day 2: 4:00 PM - Knockouts", "Day 3: 5:00 PM - Finals"],
    teamsList: {
      men: [
        "NBKRIST, Nellore", "GPREC, KNL", "KSRM, Kadapa", "RGMCET, NDL", "SRIT, PDTR", "SREC, NDL"
      ],
      women: [
        "NBKRIST, Nellore", "MITS, Mdpalli", "JNTUACEP, PLVD", "RGMCET, NDL", "SREC, NDL"
      ]
    }
  },
  {
    name: "Kabaddi",
    image: "/kabaddi-raid-match.jpg",
    men: "32",
    women: "",
    color: "from-primary/20 to-primary/5",
    schedule: ["Day 1: 3:00 PM - Group Matches", "Day 2: 4:00 PM - Knockout Rounds", "Day 3: 5:00 PM - Finals"],
    teamsList: {
      men: [
        "JNTU, PLVD", "KSRM, Kadapa", "VEMU, TPT", "KEC, Kuppam", "CBIT, PDTR", "MIPER, KNL",
        "SREC, NDL", "SDTN, Puttur", "PBRVITS, Kavali", "PIP, NDL", "MITS, Mdpalli", "VISWAM, Mdpalli",
        "KORM, Kadapa", "AITS, Rajampeta", "NBKRIST, Nellore", "JNTUA, ATP", "SRET, TPT", "GIST, Nellore",
        "SVCE, TPT", "ASET, Gudur", "GATES, Gooty", "JNTUA OTPRI, ATP", "GPREC, KNL", "JNTU, Kalikiri",
        "AITK, Kadapa", "NARN, Nellore", "SRIT, PDTR", "SRCP, NDL", "SVREC, NDL", "RGMCET, NDL"
      ]
    }
  },
  {
    name: "Football (7-A-Side)",
    image: "/7-a-side-football-match.jpg",
    men: "17",
    women: "",
    color: "from-secondary/20 to-secondary/5",
    schedule: ["Day 1: 9:00 AM - Group Matches", "Day 2: 10:00 AM - Semifinals", "Day 3: 11:00 AM - Finals"],
    teamsList: {
      men: [
        "GPREC, KNL", "VISWAM, Mdpalli", "NBKRIST, Nellore", "SVCE, TPT", "KEC, Kuppam", "KSRM, Kadapa",
        "JNTUCEP, PLVD", "SVREC, NDL", "SREC, NDL", "SRCP, NDL", "MITS, Mdpalli", "JNTUA, ATP",
        "JNTUK, Kalikiri", "NARN, Nellore", "AITK, Kadapa", "CBIT, PDTR", "RGMCET, NDL"
      ]
    }
  },
  {
    name: "Throw Ball",
    image: "/throwball-women-sports-action.jpg",
    men: "",
    women: "24",
    color: "from-accent/20 to-accent/5",
    schedule: ["Day 1: 2:00 PM - Preliminary", "Day 2: 3:00 PM - Semifinals", "Day 3: 4:00 PM - Finals"],
    teamsList: {
      women: [
        "JNTUK, Kalikiri", "GTMW, PDTR", "KEC, Kuppam", "SRCP, NDL", "NRNG, Gudur", "NBKRIST, Nellore",
        "SREC, NDL", "MIPER, KNL", "ASKW, KNL", "GIST, Nellore", "PBRVITS, Kavali", "JNTUCEP, PLVD",
        "JNTUA, ATP", "ASET, Gudur", "AITS, Rajampeta", "SVREC, NDL", "PIP, NDL", "RGMCET, NDL",
        "SVCE, TPT", "AITK, Kadapa", "VISWAM, Mdpalli", "KSRM, Kadapa", "CBIT, PDTR", "MITS, Mdpalli"
      ]
    }
  },
  {
    name: "Rugby",
    image: "/rugby-sevens-women-match.jpg",
    men: "",
    women: "10",
    color: "from-chart-4/20 to-chart-4/5",
    schedule: ["Day 1: 10:00 AM - Pool Matches", "Day 2: 11:00 AM - Quarterfinals", "Day 3: 12:00 PM - Finals"],
    teamsList: {
      women: [
        "AITK, Kadapa", "SVREC, NDL", "SRCP, NDL", "RGMCET, NDL", "SREC, NDL", "JNTUACEP, PLVD",
        "KSRM, Kadapa", "NBKRIST, Nellore", "BYE (Slot 1)", "BYE (Slot 2)"
      ]
    }
  },
]

// --- Card Component (Refactored) ---
function SportCard({ sport }: { sport: typeof sports[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
          <div className="flex items-center justify-between mb-4 text-sm mt-auto font-medium">
            {sport.men && (
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Men: <span className="font-bold">{sport.men}</span></span>
              </div>
            )}
            {sport.women && (
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Women: <span className="font-bold">{sport.women}</span></span>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-11 rounded-xl border-slate-200 font-bold hover:bg-primary hover:border-primary hover:text-white transition-all text-sm bg-transparent"
                >
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-3xl flex items-center justify-between">
                    {sport.name}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4">
                  <div className="space-y-6">
                    {/* Teams Lists */}
                    {sport.teamsList && (
                      <Tabs defaultValue={sport.men ? "men" : "women"} className="w-full">
                        <TabsList className="mb-4">
                          {sport.men && <TabsTrigger value="men">Men's Teams ({sport.men})</TabsTrigger>}
                          {sport.women && <TabsTrigger value="women">Women's Teams ({sport.women})</TabsTrigger>}
                        </TabsList>

                        {/* Men's Tab */}
                        {sport.men && (
                          <TabsContent value="men">
                            {/* Check if teamsList.men is Array or Object (Singles/Doubles) */}
                            {Array.isArray(sport.teamsList.men) ? (
                              <ScrollArea className="h-[200px] w-full rounded-md border p-4 bg-muted/20">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {sport.teamsList.men.map((team, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm p-1.5 rounded hover:bg-muted/50">
                                      <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                      {team}
                                    </div>
                                  ))}
                                </div>
                              </ScrollArea>
                            ) : (
                              <div className="space-y-4">
                                {sport.teamsList.men?.singles && (
                                  <div>
                                    <h5 className="font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">Singles</h5>
                                    <ScrollArea className="h-[150px] w-full rounded-md border p-3 bg-muted/20">
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {sport.teamsList.men.singles.map((team, idx) => (
                                          <div key={idx} className="flex items-center gap-2 text-sm p-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" /> {team}
                                          </div>
                                        ))}
                                      </div>
                                    </ScrollArea>
                                  </div>
                                )}
                                {sport.teamsList.men?.doubles && (
                                  <div>
                                    <h5 className="font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">Doubles</h5>
                                    <ScrollArea className="h-[150px] w-full rounded-md border p-3 bg-muted/20">
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {sport.teamsList.men.doubles.map((team, idx) => (
                                          <div key={idx} className="flex items-center gap-2 text-sm p-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" /> {team}
                                          </div>
                                        ))}
                                      </div>
                                    </ScrollArea>
                                  </div>
                                )}
                              </div>
                            )}
                          </TabsContent>
                        )}

                        {/* Women's Tab */}
                        {sport.women && (
                          <TabsContent value="women">
                            {Array.isArray(sport.teamsList.women) ? (
                              <ScrollArea className="h-[200px] w-full rounded-md border p-4 bg-muted/20">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {sport.teamsList.women.map((team, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm p-1.5 rounded hover:bg-muted/50">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                      {team}
                                    </div>
                                  ))}
                                </div>
                              </ScrollArea>
                            ) : (
                              <div className="space-y-4">
                                {sport.teamsList.women?.singles && (
                                  <div>
                                    <h5 className="font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">Singles</h5>
                                    <ScrollArea className="h-[150px] w-full rounded-md border p-3 bg-muted/20">
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {sport.teamsList.women.singles.map((team, idx) => (
                                          <div key={idx} className="flex items-center gap-2 text-sm p-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {team}
                                          </div>
                                        ))}
                                      </div>
                                    </ScrollArea>
                                  </div>
                                )}
                                {sport.teamsList.women?.doubles && (
                                  <div>
                                    <h5 className="font-semibold text-sm mb-2 text-muted-foreground uppercase tracking-wide">Doubles</h5>
                                    <ScrollArea className="h-[150px] w-full rounded-md border p-3 bg-muted/20">
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {sport.teamsList.women.doubles.map((team, idx) => (
                                          <div key={idx} className="flex items-center gap-2 text-sm p-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {team}
                                          </div>
                                        ))}
                                      </div>
                                    </ScrollArea>
                                  </div>
                                )}
                              </div>
                            )}
                          </TabsContent>
                        )}
                      </Tabs>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>


          </div>
        </div>
      </Card>
    </motion.div>
  )
}

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
          {sports.map((sport) => (
            <SportCard key={sport.name} sport={sport} />
          ))}
        </div>
      </div>
    </section>
  )
}
