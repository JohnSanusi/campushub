"use client";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function MessagesPage() {
  const chats = [
    {
      id: 1,
      user: "Sarah Williams",
      message: "Hey! Did you get the notes?",
      time: "2m",
      unread: 2,
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      id: 2,
      user: "David Chen",
      message: "See you at the library",
      time: "1h",
      unread: 0,
      avatar: "https://i.pravatar.cc/150?u=david",
    },
    {
      id: 3,
      user: "Basketball Team",
      message: "Practice cancelled today",
      time: "4h",
      unread: 0,
      isGroup: true,
      avatar: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=200",
    },
    {
      id: 4,
      user: "Mike Ross",
      message: "Thanks man!",
      time: "1d",
      unread: 0,
      avatar: "https://i.pravatar.cc/150?u=mike",
    },
  ];

  return (
    <AppLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>

        <div className="space-y-1">
          {chats.map((chat) => (
            <Link
              key={chat.id}
              href={`/messages/${chat.id}`}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors active:scale-[0.99]"
            >
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.user}
                  className="w-12 h-12 rounded-full object-cover bg-muted"
                />
                {chat.unread > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-background">
                    {chat.unread}
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-semibold truncate">{chat.user}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {chat.time}
                  </span>
                </div>
                <p
                  className={`text-sm truncate ${
                    chat.unread > 0
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {chat.message}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
