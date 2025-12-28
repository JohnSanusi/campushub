"use client";

import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/Button";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  PlayCircle,
  Video,
} from "lucide-react";
import Link from "next/link";

export default function LearningPage() {
  const classes = [
    {
      id: 1,
      name: "Advanced Algorithms",
      code: "CS 401",
      time: "10:00 AM",
      instructor: "Dr. Smith",
      live: true,
    },
    {
      id: 2,
      name: "Database Systems",
      code: "CS 350",
      time: "2:00 PM",
      instructor: "Prof. Johnson",
      live: false,
    },
    {
      id: 3,
      name: "Web Development",
      code: "CS 200",
      time: "Thu 11:00 AM",
      instructor: "Mr. Davis",
      live: false,
    },
  ];

  return (
    <AppLayout>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold">My Classes</h1>

        {/* Next Class Card */}
        <div className="bg-primary text-primary-foreground p-5 rounded-2xl shadow-lg shadow-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-white/20 px-2 py-1 rounded-md text-xs font-bold">
                LIVE NOW
              </span>
              <Video className="animate-pulse" />
            </div>
            <h2 className="text-xl font-bold mb-1">Advanced Algorithms</h2>
            <p className="opacity-90 text-sm mb-4">CS 401 • Dr. Smith</p>

            <Link href="/learning/live">
              <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold border-0">
                Join Class
              </Button>
            </Link>
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Schedule</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              View Calendar
            </Button>
          </div>

          <div className="space-y-3">
            {classes.map(
              (cls) =>
                !cls.live && (
                  <div
                    key={cls.id}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
                  >
                    <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                      <BookOpen size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{cls.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cls.code} • {cls.time}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronRight
                        size={20}
                        className="text-muted-foreground"
                      />
                    </Button>
                  </div>
                )
            )}
          </div>
        </div>

        {/* Recorded Sessions */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg">Recorded Sessions</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="min-w-[200px] rounded-xl overflow-hidden border border-border relative"
              >
                <div className="h-28 bg-muted relative flex items-center justify-center group">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      1500000000000 + i
                    }?w=400`}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <PlayCircle size={32} className="text-white relative z-10" />
                </div>
                <div className="p-3">
                  <div className="font-semibold text-sm">
                    Lecture {i}: Intro
                  </div>
                  <div className="text-xs text-muted-foreground">45 mins</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
