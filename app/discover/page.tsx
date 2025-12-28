"use client";

import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Search, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function DiscoverPage() {
  const trending = [1, 2, 3, 4, 5];
  const groups = [
    {
      id: 1,
      name: "Computer Science Dept",
      members: "1.2k members",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Photography Club",
      members: "840 members",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "University Basketball",
      members: "3.5k members",
      img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Debate Society",
      members: "120 members",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=200&h=200&fit=crop",
    },
  ];

  return (
    <AppLayout>
      <div className="p-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-3 top-3 text-muted-foreground"
            size={18}
          />
          <Input
            placeholder="Search students, groups, events..."
            className="pl-10 rounded-full bg-muted border-transparent"
          />
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-4 gap-2">
          <Link
            href="/marketplace"
            className="flex flex-col items-center gap-1 p-2"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <span className="text-[10px] font-medium">Market</span>
          </Link>
          <Link
            href="/learning"
            className="flex flex-col items-center gap-1 p-2"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="text-[10px] font-medium">Classes</span>
          </Link>
          <Link href="/jobs" className="flex flex-col items-center gap-1 p-2">
            <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <span className="text-[10px] font-medium">Jobs</span>
          </Link>
          <Link href="/groups" className="flex flex-col items-center gap-1 p-2">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
              <Users size={20} />
            </div>
            <span className="text-[10px] font-medium">Groups</span>
          </Link>
        </div>

        {/* Trending Students */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-primary" />
            <h2 className="font-bold text-lg">Trending Students</h2>
          </div>

          <div className="overflow-x-auto hide-scrollbar -mx-4 px-4 pb-2">
            <div className="flex gap-4">
              {trending.map((i) => (
                <div
                  key={i}
                  className="min-w-[140px] p-3 rounded-xl border border-border bg-card flex flex-col items-center gap-2 shadow-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-sm">Student {i}</div>
                    <div className="text-xs text-muted-foreground">
                      Engineering
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full h-8 text-xs rounded-full"
                  >
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Suggested Groups */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Users size={20} className="text-primary" />
            <h2 className="font-bold text-lg">Suggested Communities</h2>
          </div>

          <div className="space-y-3">
            {groups.map((group) => (
              <div
                key={group.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border shadow-sm"
              >
                <img
                  src={group.img}
                  alt={group.name}
                  className="w-14 h-14 rounded-lg object-cover bg-muted"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{group.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {group.members}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary font-semibold"
                >
                  Join
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
