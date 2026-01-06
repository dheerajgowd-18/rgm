"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Utensils, Trophy, CalendarDays } from "lucide-react"

const eventData = {
  day1: {
    date: "January 10, 2026",
    schedule: [
      { time: "08:00 AM", title: "Opening Ceremony", venue: "Main Stadium", type: "ceremony" },
      { time: "09:00 AM", title: "Registration & Check-in", venue: "Main Lobby", type: "admin" },
      { time: "10:00 AM", title: "Team Briefing", venue: "Conference Hall", type: "meeting" },
      { time: "12:30 PM", title: "Lunch Break", venue: "Dining Hall", type: "break" },
      { time: "02:00 PM", title: "Venue Tours", venue: "All Venues", type: "tour" },
      { time: "04:00 PM", title: "Practice Sessions", venue: "Various Courts", type: "practice" },
      { time: "06:00 PM", title: "Welcome Dinner", venue: "Dining Hall", type: "ceremony" },
    ],
    sports: [
      { time: "09:00 AM", title: "Basketball - Group Matches", venue: "Court 1", category: "Basketball" },
      { time: "09:00 AM", title: "Volleyball - Round 1", venue: "Indoor Arena", category: "Volleyball" },
      { time: "01:00 PM", title: "Table Tennis - Prelims", venue: "Hall B", category: "Table Tennis" },
      { time: "04:00 PM", title: "Badminton - Singles Rounds", venue: "Hall A", category: "Badminton" },
      { time: "11:00 AM", title: "Hand Ball - Group Stage", venue: "Court 2", category: "Hand Ball" },
      { time: "03:00 PM", title: "Kabaddi - Group Matches", venue: "Main Ground", category: "Kabaddi" },
    ],
    food: [
      {
        time: "07:00 - 09:00 AM",
        meal: "Breakfast",
        image: "/south-indian-breakfast-idli-vada.jpg",
        items: [
          { name: "Idli & Dosa with Sambar", description: "South Indian breakfast with chutneys" },
          { name: "Fresh Fruit Bowl", description: "Seasonal fruits, bananas, papaya" },
          { name: "Bread & Butter Toast", description: "With jam options" },
          { name: "Beverages", description: "Tea, coffee, milk" },
        ],
      },
      {
        time: "12:30 - 02:00 PM",
        meal: "Lunch",
        image: "/indian-lunch-buffet-biryani.jpg",
        items: [
          { name: "Biryani & Curry", description: "Chicken or veg biryani with raita" },
          { name: "Steamed Rice & Dal", description: "With sambar and rasam" },
          { name: "Mixed Vegetable Curry", description: "Fresh vegetables with spices" },
          { name: "Chapati & Roti", description: "Freshly made Indian bread" },
        ],
      },
      {
        time: "06:00 - 08:00 PM",
        meal: "Dinner",
        image: "/indian-dinner-thali-spread.jpg",
        items: [
          { name: "North Indian Thali", description: "Paneer curry, dal, rice" },
          { name: "South Indian Meals", description: "Rice with variety of curries" },
          { name: "Sweet Dish", description: "Gulab jamun or kheer" },
          { name: "Beverages", description: "Buttermilk, lime juice, water" },
        ],
      },
    ],
  },
  day2: {
    date: "January 11, 2026",
    schedule: [
      { time: "07:00 AM", title: "Morning Assembly", venue: "Main Ground", type: "meeting" },
      { time: "08:00 AM", title: "Competitions Begin", venue: "All Venues", type: "sport" },
      { time: "12:30 PM", title: "Lunch Break", venue: "Dining Hall", type: "break" },
      { time: "01:30 PM", title: "Afternoon Sessions", venue: "Various Venues", type: "sport" },
      { time: "05:00 PM", title: "Evening Review Meeting", venue: "Conference Hall", type: "meeting" },
      { time: "06:00 PM", title: "Dinner & Entertainment", venue: "Dining Hall", type: "ceremony" },
      { time: "08:00 PM", title: "Cultural Program", venue: "Auditorium", type: "entertainment" },
    ],
    sports: [
      { time: "09:00 AM", title: "Basketball - Quarter Finals", venue: "Court 1", category: "Basketball" },
      { time: "10:00 AM", title: "Football - Semi Finals", venue: "Football Ground", category: "Football" },
      { time: "01:00 PM", title: "Table Tennis - Finals", venue: "Hall B", category: "Table Tennis" },
      { time: "03:00 PM", title: "Volleyball - Semifinals", venue: "Indoor Arena", category: "Volleyball" },
      { time: "05:00 PM", title: "Badminton - Doubles", venue: "Hall A", category: "Badminton" },
      { time: "12:00 PM", title: "Hand Ball - Semifinals", venue: "Court 2", category: "Hand Ball" },
      { time: "04:00 PM", title: "Kabaddi - Knockout Rounds", venue: "Main Ground", category: "Kabaddi" },
    ],
    food: [
      {
        time: "07:00 - 09:00 AM",
        meal: "Breakfast",
        image: "/poha-upma-breakfast.jpg",
        items: [
          { name: "Poha & Upma", description: "Traditional breakfast varieties" },
          { name: "Sprouts Salad", description: "Fresh moong sprouts with lemon" },
          { name: "Omelette & Boiled Eggs", description: "Protein-rich options" },
          { name: "Hot Beverages", description: "Ginger tea, filter coffee" },
        ],
      },
      {
        time: "12:30 - 02:00 PM",
        meal: "Lunch",
        image: "/paneer-curry-rice-lunch.jpg",
        items: [
          { name: "Pulao & Curry", description: "Vegetable pulao with paneer curry" },
          { name: "Curd Rice", description: "South Indian comfort food" },
          { name: "Mixed Dal Fry", description: "Protein-rich lentil preparation" },
          { name: "Salad & Papad", description: "Fresh vegetables and crispy papad" },
        ],
      },
      {
        time: "06:00 - 08:00 PM",
        meal: "Dinner",
        image: "/roti-curry-dinner.jpg",
        items: [
          { name: "Roti & Curry", description: "Choice of veg or chicken curry" },
          { name: "Fried Rice", description: "Veg fried rice with manchurian" },
          { name: "Sambar Rice", description: "Traditional South Indian dish" },
          { name: "Ice Cream", description: "Assorted flavors dessert" },
        ],
      },
    ],
  },
  day3: {
    date: "January 12, 2026",
    schedule: [
      { time: "07:00 AM", title: "Final Day Assembly", venue: "Main Ground", type: "meeting" },
      { time: "09:00 AM", title: "Championship Matches", venue: "Main Stadium", type: "sport" },
      { time: "12:30 PM", title: "Championship Lunch", venue: "Dining Hall", type: "break" },
      { time: "02:00 PM", title: "Final Competitions", venue: "Various Venues", type: "sport" },
      { time: "06:00 PM", title: "Closing Ceremony", venue: "Main Stadium", type: "ceremony" },
      { time: "07:30 PM", title: "Awards Presentation", venue: "Main Stadium", type: "ceremony" },
      { time: "08:30 PM", title: "Farewell Gala Dinner", venue: "Banquet Hall", type: "ceremony" },
    ],
    sports: [
      { time: "09:00 AM", title: "Basketball - Finals", venue: "Main Stadium", category: "Basketball" },
      { time: "10:00 AM", title: "Badminton - Championship", venue: "Hall A", category: "Badminton" },
      { time: "02:00 PM", title: "Volleyball - Finals", venue: "Indoor Arena", category: "Volleyball" },
      { time: "11:00 AM", title: "Football - Finals", venue: "Football Ground", category: "Football" },
      { time: "03:00 PM", title: "Hand Ball - Finals", venue: "Court 2", category: "Hand Ball" },
      { time: "05:00 PM", title: "Kabaddi - Grand Finale", venue: "Main Ground", category: "Kabaddi" },
      { time: "04:00 PM", title: "Throw Ball - Finals", venue: "Court 3", category: "Throw Ball" },
      { time: "12:00 PM", title: "Rugby - Finals", venue: "Rugby Field", category: "Rugby" },
    ],
    food: [
      {
        time: "07:00 - 09:00 AM",
        meal: "Breakfast",
        image: "/indian-breakfast-dosa.jpg",
        items: [
          { name: "Masala Dosa", description: "Crispy dosa with potato filling" },
          { name: "Vada & Chutney", description: "Medu vada with coconut chutney" },
          { name: "Fresh Juice", description: "Orange or mixed fruit juice" },
          { name: "Toast & Jam", description: "Whole wheat bread options" },
        ],
      },
      {
        time: "12:30 - 02:00 PM",
        meal: "Championship Lunch",
        image: "/indian-biryani-lunch.jpg",
        items: [
          { name: "Special Biryani", description: "Hyderabadi dum biryani" },
          { name: "Tandoori Platter", description: "Assorted tandoori items" },
          { name: "Paneer Tikka Masala", description: "Rich and creamy curry" },
          { name: "Naan & Kulcha", description: "Butter naan and stuffed kulcha" },
        ],
      },
      {
        time: "08:30 - 11:00 PM",
        meal: "Gala Dinner",
        image: "/luxury-indian-gala-dinner-buffet.jpg",
        items: [
          { name: "Grand Buffet", description: "North & South Indian specialties" },
          { name: "Championship Cake", description: "Celebration cake for winners" },
          { name: "Dessert Variety", description: "Gulab jamun, jalebi, ice cream" },
          { name: "Mocktails", description: "Refreshing fruit-based drinks" },
        ],
      },
    ],
  },
}

export function DayPlanner() {
  const [activeTab, setActiveTab] = useState("day1")
  const [activeSection, setActiveSection] = useState("schedule") // Default to schedule

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F7FB] relative overflow-hidden" id="schedule">
      {/* Background Elements for YuvaYuva3k Vibe */}
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

        {/* 1. Category Selection (First Level) */}
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

        {/* 2. Day Selection (Second Level) via Tabs */}
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
                        <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-indigo-400" />
                          {event.venue}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeSection === "sports" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {eventData[activeTab as keyof typeof eventData].sports.map((sport, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)] transition-all group border-l-[6px] border-l-orange-500"
                    >
                      <h4 className="font-bold mb-2 text-lg text-slate-900 group-hover:text-orange-600 transition-colors">{sport.title}</h4>
                      <div className="space-y-1.5">
                        <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-orange-400" />
                          {sport.time}
                        </p>
                        <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-orange-400" />
                          {sport.venue}
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
                          <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/90 backdrop-blur-sm text-xs font-black text-white uppercase tracking-widest mb-2 shadow-lg">
                            {meal.meal}
                          </span>
                          <p className="text-sm text-white flex items-center gap-2 font-bold">
                            <Clock className="w-4 h-4 text-emerald-300" />
                            {meal.time}
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="space-y-4">
                          {meal.items.map((item, idx) => (
                            <div key={idx} className="group/item border-b border-dashed border-slate-100 last:border-0 pb-3 last:pb-0">
                              <h5 className="font-bold text-sm mb-1 text-slate-800 group-hover/item:text-emerald-600 transition-colors">
                                {item.name}
                              </h5>
                              <p className="text-xs text-slate-400 font-medium">{item.description}</p>
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
      </div>
    </section>
  )
}
