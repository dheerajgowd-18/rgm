"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, Utensils, Trophy, Users, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// --- Data ---
const eventData = {
  day1: {
    title: "Day 1 - January 10",
    date: "January 10, 2026",
    schedule: [
      { time: "07:30 AM - 09:00 AM", title: "Breakfast", location: "Cafeteria" },
      { time: "10:00 AM - 11:00 AM", title: "Inauguration Ceremony", location: "Main Auditorium" },
      { time: "11:00 AM - 12:30 PM", title: "Sports Events", location: "Various Grounds" },
      { time: "12:30 PM - 02:00 PM", title: "Lunch", location: "Food Court" },
      { time: "02:00 PM onwards", title: "Sports Events", location: "Various Grounds" },
      { time: "07:30 PM - 09:00 PM", title: "Dinner", location: "Cafeteria" },
    ],
    food: [
      {
        time: "07:30 AM - 09:00 AM",
        meal: "Breakfast",
        image: "/images/south-indian-breakfast-idli-vada.jpg",
        items: [
          { name: "Idli & Vada", description: "With Sambar & Chutney" },
          { name: "Pongal", description: "Ghee Pongal" },
        ],
      },
      {
        time: "12:30 PM - 02:00 PM",
        meal: "Lunch",
        image: "/images/veg-fried-rice.png",
        items: [
          { name: "Vegetable Fried Rice", description: "Main Dish" },
          { name: "Accompaniments", description: "Gobi Manchurian, Tomato Dal, Fryums" },
          { name: "Staples", description: "Rice, Curd, Sambar" },
          { name: "Special", description: "Sweet - Gulab Jamun" },
        ],
      },
      {
        time: "07:30 PM - 09:00 PM",
        meal: "Dinner",
        image: "/images/pudina-rice.png",
        items: [
          { name: "Pudina Rice", description: "Main Dish" },
          { name: "Accompaniments", description: "Aloo Kurma, Egg/Veg Curry" },
          { name: "Staples", description: "Rice, Rasam, Curd" },
          { name: "Special", description: "Banana" },
        ],
      },
    ],
  },
  day2: {
    title: "Day 2 - January 11",
    date: "January 11, 2026",
    schedule: [
      { time: "07:30 AM - 09:00 AM", title: "Breakfast", location: "Cafeteria" },
      { time: "12:30 PM - 02:00 PM", title: "Lunch", location: "Food Court" },
      { time: "02:00 PM - 05:30 PM", title: "Sports Events", location: "Various Grounds" },
      { time: "06:00 PM - 09:00 PM", title: "Cultural Fest", location: "Open Air Theatre" },
      { time: "07:30 PM - 09:00 PM", title: "Dinner", location: "Cafeteria" },
    ],
    food: [
      {
        time: "07:30 AM - 09:00 AM",
        meal: "Breakfast",
        image: "/images/pongal-bonda.png",
        items: [
          { name: "Pongal & Mysore Bonda", description: "With Chutney" },
          { name: "Semiya Upma", description: "Light breakfast" },
        ],
      },
      {
        time: "12:30 PM - 02:00 PM",
        meal: "Lunch",
        image: "/images/lemon-rice-meal.png",
        items: [
          { name: "Lemon Rice", description: "Main Dish" },
          { name: "Accompaniments", description: "Dondakya Fry, Palakura Pappu, Raita" },
          { name: "Staples", description: "Rice, Curd, Sambar" },
          { name: "Special", description: "Boiled Egg" },
        ],
      },
      {
        time: "07:30 PM - 09:00 PM",
        meal: "Dinner",
        image: "/images/bagara-rice-feast.png",
        items: [
          { name: "Bagara Rice", description: "Main Dish" },
          { name: "Accompaniments", description: "Chicken/Paneer Curry" },
          { name: "Staples", description: "Rice, Rasam, Curd" },
          { name: "Special", description: "Banana" },
        ],
      },
    ],
  },
  day3: {
    title: "Day 3 - January 12",
    date: "January 12, 2026",
    schedule: [
      { time: "07:30 AM - 09:00 AM", title: "Breakfast", location: "Cafeteria" },
      { time: "12:30 PM - 02:00 PM", title: "Lunch", location: "Food Court" },
      { time: "02:00 PM - 03:30 PM", title: "Sports Events", location: "Various Grounds" },
      { time: "03:30 PM - 04:30 PM", title: "Valedictory Function", location: "Main Auditorium" },
    ],
    food: [
      {
        time: "07:30 AM - 09:00 AM",
        meal: "Breakfast",
        image: "/images/onion-uttappam.png",
        items: [
          { name: "Onion Uttappam & Upma", description: "With Tomato Chutney & Chutney" },
          { name: "Boiled Egg", description: "Protein rich" },
        ],
      },
      {
        time: "12:30 PM - 02:00 PM",
        meal: "Lunch",
        image: "/images/veg-pulao.png",
        items: [
          { name: "Vegetable Pulao", description: "Main Dish" },
          { name: "Accompaniments", description: "Kothimeera Vankay, Akukura Pappu, Raita" },
          { name: "Staples", description: "Rice, Curd, Sambar" },
          { name: "Special", description: "Tilobi" },
        ],
      },
    ],
  },
}

const sportsRoadmap = {
  men: [
    { title: "Volleyball", venue: "Volleyball Court 1", teams: "32 Teams", hasSubcategories: false, fixturesImage: "/images/volleyball-men-fixtures.png" },
    { title: "Football", venue: "Main Ground", teams: "17 Teams", hasSubcategories: false, fixturesImage: "/images/football-men-fixtures.png" },
    { title: "Basketball", venue: "Indoor Stadium", teams: "13 Teams", hasSubcategories: false, fixturesImage: "/images/basketball-men-fixtures.png" },
    {
      title: "Table Tennis",
      venue: "Indoor Hall",
      teams: "13 Singles, 13 Doubles",
      hasSubcategories: true,
      fixturesImages: {
        singles: "/images/table-tennis-men-singles-fixtures.png",
        doubles: "/images/table-tennis-men-doubles-fixtures.png"
      }
    },
    {
      title: "Badminton",
      venue: "Badminton Court",
      teams: "26 Singles, 26 Doubles",
      hasSubcategories: true,
      fixturesImages: {
        singles: "/images/badminton-men-singles-fixtures.png",
        doubles: "/images/badminton-men-doubles-fixtures.png"
      }
    },
    { title: "Ball Badminton", venue: "Court 2", teams: "8 Teams", hasSubcategories: false, fixturesImage: "/images/ball-badminton-men-fixtures.png" },
    { title: "Hand Ball", venue: "Court 4", teams: "16 Teams", hasSubcategories: false, fixturesImage: "/images/handball-men-fixtures.png" },
    { title: "Kabaddi", venue: "Main Ground", teams: "32 Teams", hasSubcategories: false, fixturesImage: "/images/kabaddi-men-fixtures.png" },
  ],
  women: [
    { title: "Volleyball", venue: "Indoor Arena", teams: "17 Teams", hasSubcategories: false, fixturesImage: "/images/volleyball-women-fixtures.jpg" },
    { title: "Throw Ball", venue: "Court 3", teams: "24 Teams", hasSubcategories: false, fixturesImage: "/images/throwball-women-fixtures.png" },
    {
      title: "Table Tennis",
      venue: "Hall B",
      teams: "8 Singles, 8 Doubles",
      hasSubcategories: true,
      fixturesImages: {
        singles: "/images/table-tennis-women-singles-fixtures.png",
        doubles: "/images/table-tennis-women-doubles-fixtures.png"
      }
    },
    { title: "Rugby", venue: "Rugby Field", teams: "10 Teams", hasSubcategories: false, fixturesImage: "/images/rugby-women-fixtures.png" },
    {
      title: "Badminton",
      venue: "Hall A",
      teams: "16 Singles, 16 Doubles",
      hasSubcategories: true,
      fixturesImages: {
        singles: "/images/badminton-women-singles-fixtures.png",
        doubles: "/images/badminton-women-doubles-fixtures.png"
      }
    },
    { title: "Ball Badminton", venue: "Court 3", teams: "5 Teams", hasSubcategories: false, fixturesImage: "/images/ball-badminton-women-fixtures.png" },
    { title: "Basketball", venue: "Court 1", teams: "6 Teams", hasSubcategories: false, fixturesImage: "/images/basketball-women-fixtures.png" },
    { title: "Hand Ball", venue: "Court 2", teams: "6 Teams", hasSubcategories: false, fixturesImage: "/images/handball-women-fixtures.png" },
  ],
}

function DayPlannerContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("day1") // For Schedule/Food
  const [activeGender, setActiveGender] = useState("men") // For Sports
  const [activeSection, setActiveSection] = useState("schedule")

  // State for singles/doubles toggles
  const [sportFilters, setSportFilters] = useState<Record<string, "singles" | "doubles">>({})

  useEffect(() => {
    const section = searchParams.get("section")
    const day = searchParams.get("day")

    if (section && ["schedule", "sports", "food"].includes(section)) {
      setActiveSection(section)
    }
    if (day && ["day1", "day2", "day3"].includes(day)) {
      setActiveTab(day)
    }

    if (section || day) {
      const el = document.getElementById("schedule")
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 500)
      }
    }
  }, [searchParams])

  const handleSubcategoryChange = (sportTitle: string, value: "singles" | "doubles") => {
    setSportFilters(prev => ({ ...prev, [sportTitle]: value }))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F7FB] relative overflow-hidden" id="schedule">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase text-slate-900 drop-shadow-sm">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 italic">Roadmap</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Experience the pulse of the tournament.
          </p>
        </motion.div>

        {/* 1. Category Selection */}
        <div className="flex justify-center mb-10 gap-4 flex-wrap">
          <button
            onClick={() => setActiveSection("schedule")}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-300 border-2 shadow-lg ${activeSection === "schedule"
              ? "bg-gradient-to-r from-indigo-600 to-blue-600 border-transparent text-white scale-105 shadow-indigo-500/25 ring-2 ring-indigo-200 ring-offset-2"
              : "bg-white border-slate-100 text-slate-500 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-xl hover:-translate-y-1"
              }`}
          >
            <Calendar className="w-5 h-5" />
            Schedule
          </button>
          <button
            onClick={() => setActiveSection("sports")}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-300 border-2 shadow-lg ${activeSection === "sports"
              ? "bg-gradient-to-r from-orange-500 to-pink-600 border-transparent text-white scale-105 shadow-orange-500/25 ring-2 ring-orange-200 ring-offset-2"
              : "bg-white border-slate-100 text-slate-500 hover:border-orange-200 hover:text-orange-600 hover:shadow-xl hover:-translate-y-1"
              }`}
          >
            <Trophy className="w-5 h-5" />
            Sports
          </button>
          <button
            onClick={() => setActiveSection("food")}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-300 border-2 shadow-lg ${activeSection === "food"
              ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-transparent text-white scale-105 shadow-emerald-500/25 ring-2 ring-emerald-200 ring-offset-2"
              : "bg-white border-slate-100 text-slate-500 hover:border-emerald-200 hover:text-emerald-600 hover:shadow-xl hover:-translate-y-1"
              }`}
          >
            <Utensils className="w-5 h-5" />
            Dining
          </button>
        </div>

        {/* 2. Second Level Navigation (Days OR Gender) */}
        {activeSection === "sports" ? (
          // Gender Tabs for Sports
          <Tabs value={activeGender} onValueChange={setActiveGender} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-auto p-1.5 bg-white/50 backdrop-blur-sm border border-slate-200/60 shadow-inner rounded-2xl">
              <TabsTrigger
                value="men"
                className="py-3 text-sm sm:text-base font-black uppercase tracking-wider rounded-xl data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-lg text-slate-400 hover:text-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" /> Men's Events
              </TabsTrigger>
              <TabsTrigger
                value="women"
                className="py-3 text-sm sm:text-base font-black uppercase tracking-wider rounded-xl data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-slate-400 hover:text-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" /> Women's Events
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeGender}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {sportsRoadmap[activeGender as keyof typeof sportsRoadmap].map((sport, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all group border-l-[6px] ${activeGender === 'men' ? 'border-l-indigo-500 hover:shadow-indigo-500/10' : 'border-l-pink-500 hover:shadow-pink-500/10'}`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className={`font-bold text-xl ${activeGender === 'men' ? 'text-indigo-900 group-hover:text-indigo-600' : 'text-pink-900 group-hover:text-pink-600'} transition-colors`}>{sport.title}</h4>
                      {sport.hasSubcategories && (
                        <div className="flex bg-slate-100 rounded-lg p-1 gap-1">
                          <button
                            onClick={() => handleSubcategoryChange(sport.title, "singles")}
                            className={`px-2 py-1 text-[10px] uppercase font-bold rounded ${(!sportFilters[sport.title] || sportFilters[sport.title] === 'singles') ? 'bg-white shadow text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
                          >
                            Sgl
                          </button>
                          <button
                            onClick={() => handleSubcategoryChange(sport.title, "doubles")}
                            className={`px-2 py-1 text-[10px] uppercase font-bold rounded ${sportFilters[sport.title] === 'doubles' ? 'bg-white shadow text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
                          >
                            Dbl
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                        <Users className={`w-4 h-4 ${activeGender === 'men' ? 'text-indigo-400' : 'text-pink-400'}`} />
                        {/* Dynamic Team Info based on Filter */}
                        {sport.hasSubcategories ? (
                          <span>
                            {(!sportFilters[sport.title] || sportFilters[sport.title] === "singles")
                              ? "Singles Competition"
                              : "Doubles Competition"}
                          </span>
                        ) : (
                          <span>{sport.teams}</span>
                        )}
                      </p>
                    </div>

                    {/* Fixtures Button if available */}
                    {(() => {
                      const sportStart = sport as any;
                      const currentFilter = sportFilters[sport.title] || "singles";

                      // Determine which image to show
                      let displayImage = sportStart.fixturesImage;

                      if (sport.hasSubcategories && sportStart.fixturesImages) {
                        displayImage = sportStart.fixturesImages[currentFilter];
                      }

                      if (!displayImage) return null;

                      return (
                        <div className="mt-4 pt-3 border-t border-slate-50">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full text-xs font-bold uppercase tracking-wider border-slate-200 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                              >
                                View Fixtures {sport.hasSubcategories ? `(${currentFilter})` : ''}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-white border-none shadow-2xl text-slate-900 rounded-2xl">
                              <DialogTitle className="sr-only">{sport.title} Fixtures</DialogTitle>

                              {/* Header with Close Button */}
                              <div className="absolute top-2 right-2 z-50">
                                <DialogClose asChild>
                                  <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-black/10 hover:bg-black/20 text-black backdrop-blur-sm transition-all border border-black/5">
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Close</span>
                                  </Button>
                                </DialogClose>
                              </div>

                              {/* Scrollable Image Container */}
                              <div className="overflow-y-auto max-h-[90vh] w-full bg-slate-50 p-2 sm:p-4">
                                <div className="min-h-full flex items-center justify-center">
                                  <img
                                    src={displayImage}
                                    alt={`${sport.title} Fixtures`}
                                    className="w-full h-auto rounded-lg shadow-sm"
                                  />
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      );
                    })()}

                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </Tabs>
        ) : (
          // Day Tabs for Schedule & Food
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12 h-auto p-1.5 bg-white/50 backdrop-blur-sm border border-slate-200/60 shadow-inner rounded-2xl">
              {["day1", "day2", "day3"].map((day, idx) => (
                <TabsTrigger
                  key={day}
                  value={day}
                  className="py-3 text-sm sm:text-base font-black uppercase tracking-wider rounded-xl data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-lg text-slate-400 hover:text-slate-700 transition-all"
                >
                  Day {idx + 1}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection + activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Content Rendering based on Active Section & Tab */}
                {activeSection === "schedule" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {eventData[activeTab as keyof typeof eventData].schedule.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)] transition-all group border-l-[6px] border-l-indigo-500"
                      >
                        <h4 className="font-bold mb-2 text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">{event.title}</h4>
                        <div className="space-y-1.5">
                          <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-indigo-400" />
                            {event.time}
                          </p>

                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeSection === "food" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {eventData[activeTab as keyof typeof eventData].food.map((meal, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden border-none bg-white shadow-lg rounded-3xl group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 ring-1 ring-slate-100"
                      >
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={meal.image || "/placeholder.svg"}
                            alt={meal.meal}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                          <div className="absolute bottom-5 left-5">
                            <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/90 backdrop-blur-sm text-sm sm:text-base font-black text-white uppercase tracking-widest mb-2 shadow-lg">
                              {meal.meal}
                            </span>
                            <p className="text-base sm:text-lg text-white flex items-center gap-2 font-bold">
                              <Clock className="w-5 h-5 text-emerald-300" />
                              {meal.time}
                            </p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="space-y-4">
                            {meal.items.map((item, idx) => (
                              <div key={idx} className="group/item border-b border-dashed border-slate-100 last:border-0 pb-3 last:pb-0">
                                <h5 className="font-bold text-base sm:text-xl mb-1.5 text-slate-800 group-hover/item:text-emerald-600 transition-colors">
                                  {item.name}
                                </h5>
                                <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </Tabs>
        )
        }
      </div >
    </section >
  )
}

export function DayPlanner() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading Events...</div>}>
      <DayPlannerContent />
    </Suspense>
  )
}
