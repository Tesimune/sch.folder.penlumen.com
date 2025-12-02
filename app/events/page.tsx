"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, MapPin, Users } from "lucide-react"
import { useState } from "react"

export default function Events() {
  const [events] = useState([
    {
      id: 1,
      title: "Annual Sports Day",
      date: "March 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "School Grounds",
      description:
        "Celebrate athletic excellence with our annual sports day featuring various competitions and team events.",
      attendees: "500+",
    },
    {
      id: 2,
      title: "Science Fair 2025",
      date: "April 20, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Science Block",
      description: "Students showcase their innovative scientific projects and research findings.",
      attendees: "300+",
    },
    {
      id: 3,
      title: "Annual Graduation Ceremony",
      date: "May 25, 2025",
      time: "5:00 PM - 8:00 PM",
      location: "School Auditorium",
      description: "Celebrate the achievements of our graduating students and their bright futures.",
      attendees: "1000+",
    },
    {
      id: 4,
      title: "Cultural Festival",
      date: "June 10, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Main Grounds",
      description: "Experience diverse cultures through performances, food, and artistic displays.",
      attendees: "400+",
    },
    {
      id: 5,
      title: "Back to School Night",
      date: "August 5, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "School Building",
      description: "Meet teachers and learn about curriculum and school programs for the new academic year.",
      attendees: "600+",
    },
    {
      id: 6,
      title: "Debate Tournament",
      date: "September 12, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Auditorium & Halls",
      description: "Students from various schools compete in friendly debate competitions.",
      attendees: "200+",
    },
  ])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 bg-primary/10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">School Events</h1>
            <p className="text-xl text-muted-foreground">Join us for exciting events throughout the year</p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-sm border border-border hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="bg-primary/10 h-32 flex items-center justify-center">
                    <Calendar className="text-primary" size={48} />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground">{event.title}</h3>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{event.attendees} expected</span>
                      </div>
                    </div>

                    <p className="text-foreground">{event.time}</p>
                    <p className="text-muted-foreground text-sm">{event.description}</p>

                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
