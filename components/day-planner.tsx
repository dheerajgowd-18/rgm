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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F7FB]" id="schedule">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-6xl font-black mb-4 tracking-tighter uppercase text-slate-900">
            Event <span className="text-secondary italic">Roadmap</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Plan your tournament experience with our comprehensive 3-day schedule.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-10 h-auto p-1.5 bg-blue-50/50 border border-blue-100 shadow-sm rounded-2xl">
            {["day1", "day2", "day3"].map((day, idx) => (
              <TabsTrigger
                key={day}
                value={day}
                className="py-3 text-sm sm:text-base font-black uppercase tracking-wider rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg text-slate-600 hover:text-primary transition-all"
              >
                <CalendarDays className="w-4 h-4 mr-2" />
                Day {idx + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex justify-center mb-12 gap-3 flex-wrap">
            <button
              onClick={() => setActiveSection("schedule")}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all border-2 ${
                activeSection === "schedule"
                  ? "bg-primary border-primary text-white shadow-xl scale-105"
                  : "bg-white border-slate-200 text-slate-700 hover:border-primary/30 hover:bg-slate-50"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Schedule
            </button>
            <button
              onClick={() => setActiveSection("sports")}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all border-2 ${
                activeSection === "sports"
                  ? "bg-primary border-primary text-white shadow-xl scale-105"
                  : "bg-white border-slate-200 text-slate-700 hover:border-primary/30 hover:bg-slate-50"
              }`}
            >
              <Trophy className="w-4 h-4" />
              Sports
            </button>
            <button
              onClick={() => setActiveSection("food")}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all border-2 ${
                activeSection === "food"
                  ? "bg-emerald-600 border-emerald-600 text-white shadow-xl scale-105"
                  : "bg-white border-slate-200 text-slate-700 hover:border-emerald-500/30 hover:bg-slate-50"
              }`}
            >
              <Utensils className="w-4 h-4" />
              Dining
            </button>
          </div>

          {Object.entries(eventData).map(([day, data]) => (
            <TabsContent key={day} value={day}>
              <AnimatePresence mode="wait">
                {activeSection === "food" && (
                  <motion.div
                    key="food"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-emerald-50 rounded-xl">
                        <Utensils className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 uppercase">Food & Dining</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {data.food.map((meal, index) => (
                        <Card
                          key={index}
                          className="overflow-hidden border-none bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] rounded-2xl group hover:shadow-2xl transition-all duration-500"
                        >
                          <div className="relative h-44 sm:h-64 overflow-hidden">
                            <img
                              src={meal.image || "/placeholder.svg"}
                              alt={meal.meal}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-5 left-5">
                              <span className="inline-block px-3 py-1 rounded-lg bg-emerald-600 text-xs font-black text-white uppercase tracking-widest mb-3">
                                {meal.meal}
                              </span>
                              <p className="text-sm text-white flex items-center gap-2 font-black">
                                <Clock className="w-4 h-4 text-emerald-400" />
                                {meal.time}
                              </p>
                            </div>
                          </div>
                          <div className="p-5">
                            <div className="space-y-4">
                              {meal.items.map((item, idx) => (
                                <div key={idx} className="group border-b border-border/50 last:border-0 pb-3 last:pb-0">
                                  <h5 className="font-bold text-sm mb-1 text-foreground group-hover:text-emerald-600 transition-colors">
                                    {item.name}
                                  </h5>
                                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeSection === "schedule" && (
                  <motion.div
                    key="schedule"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-2 bg-secondary/20 rounded-lg">
                        <Calendar className="w-5 h-5 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold">Event Schedule</h3>
                    </div>
                    <Card className="p-5 bg-card shadow-xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {data.schedule.map((event, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                            className="p-4 rounded-lg bg-gradient-to-r from-secondary/10 to-transparent hover:from-secondary/20 transition-all border-l-4 border-secondary shadow-sm hover:shadow-md"
                          >
                            <h4 className="font-bold mb-2 text-base text-foreground">{event.title}</h4>
                            <div className="space-y-2">
                              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                                <span className="font-semibold">{event.time}</span>
                              </p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                                {event.venue}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                )}

                {activeSection === "sports" && (
                  <motion.div
                    key="sports"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        <Trophy className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold">Sports Schedule</h3>
                    </div>
                    <Card className="p-5 bg-card shadow-xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {data.sports.map((sport, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                            className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-transparent hover:from-accent/20 transition-all border-l-4 border-accent shadow-sm hover:shadow-md"
                          >
                            <h4 className="font-bold mb-2 text-base text-foreground">{sport.title}</h4>
                            <div className="space-y-2">
                              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                                <span className="font-semibold">{sport.time}</span>
                              </p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                                {sport.venue}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
