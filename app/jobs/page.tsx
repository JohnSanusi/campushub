"use client";

import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/Button";
import { Briefcase, Building, DollarSign, MapPin } from "lucide-react";

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp",
      type: "Internship",
      salary: "$25/hr",
      location: "Remote",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Campus Brand Ambassador",
      company: "RedBull",
      type: "Part-time",
      salary: "$18/hr",
      location: "On Campus",
      color: "bg-red-500",
    },
    {
      id: 3,
      title: "Library Assistant",
      company: "University Library",
      type: "Part-time",
      salary: "$15/hr",
      location: "Library",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Graphic Designer",
      company: "Creative Studios",
      type: "Freelance",
      salary: "$30/hr",
      location: "Remote",
      color: "bg-purple-500",
    },
  ];

  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Jobs & Internships</h1>

        <div className="p-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white mb-4">
          <h2 className="font-bold text-lg mb-1">Boost your Resume</h2>
          <p className="text-sm opacity-90 mb-3">
            Find internships and part-time jobs tailored for students.
          </p>
          <Button
            size="sm"
            variant="outline"
            className="text-white hover:text-black border-white/50"
          >
            Upload Resume
          </Button>
        </div>

        <div className="space-y-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-2">
                <div
                  className={`w-10 h-10 rounded-lg ${job.color} flex items-center justify-center text-white font-bold`}
                >
                  {job.company[0]}
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded bg-muted">
                  {job.type}
                </span>
              </div>

              <h3 className="font-bold text-lg">{job.title}</h3>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                <Building size={14} />
                <span>{job.company}</span>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin size={14} /> {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign size={14} /> {job.salary}
                </div>
              </div>

              <Button className="w-full mt-4" variant="outline">
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
