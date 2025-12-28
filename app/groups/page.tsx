"use client";

import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/Button";
import { Users } from "lucide-react";

export default function GroupsPage() {
  const groups = [
    {
      id: 1,
      name: "Computer Science Dept",
      members: "1.2k",
      active: "25",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200",
    },
    {
      id: 2,
      name: "Photography Club",
      members: "840",
      active: "12",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200",
    },
    {
      id: 3,
      name: "Dance Team",
      members: "150",
      active: "5",
      img: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=200",
    },
    {
      id: 4,
      name: "Debate Society",
      members: "120",
      active: "8",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=200",
    },
    {
      id: 5,
      name: "Gaming Club",
      members: "600",
      active: "105",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200",
    },
  ];

  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Communities</h1>
          <Button size="sm">Create Group</Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {groups.map((group) => (
            <div
              key={group.id}
              className="p-4 rounded-xl border border-border bg-card flex flex-col items-center text-center gap-2 hover:border-primary/50 transition-colors"
            >
              <img
                src={group.img}
                alt={group.name}
                className="w-16 h-16 rounded-full bg-muted object-cover mb-1"
              />
              <h3 className="font-semibold text-sm leading-tight">
                {group.name}
              </h3>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Users size={12} /> {group.members}
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full mt-2 h-8 text-xs"
              >
                Join
              </Button>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
