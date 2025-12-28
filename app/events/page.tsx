"use client";

import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Campus Music Festival",
      date: "Oct 24",
      time: "5:00 PM",
      location: "Main Quad",
      image:
        "https://images.unsplash.com/photo-1459749411177-287ce63e3ba6?w=800&q=80",
      interested: "2.4k",
    },
    {
      id: 2,
      title: "Tech Career Fair 2024",
      date: "Nov 02",
      time: "10:00 AM",
      location: "Student Center",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      interested: "850",
    },
  ];

  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Events</h1>

        {/* Filter Tags */}
        <div className="flex gap-2 pb-2 overflow-x-auto">
          <Button size="sm" className="rounded-full">
            All
          </Button>
          <Button size="sm" variant="outline" className="rounded-full">
            Parties
          </Button>
          <Button size="sm" variant="outline" className="rounded-full">
            Academic
          </Button>
          <Button size="sm" variant="outline" className="rounded-full">
            Sports
          </Button>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm group"
            >
              <div className="relative h-40">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/90 px-3 py-1 rounded-lg text-sm font-bold shadow-sm backdrop-blur-sm">
                  {event.date}
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg leading-tight">
                  {event.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                      >
                        <img src={`https://i.pravatar.cc/150?u=${i + 10}`} />
                      </div>
                    ))}
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-background bg-muted text-[10px] font-bold">
                      +{parseInt(event.interested)}
                    </div>
                  </div>
                  <Button size="sm">RSVP</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
