"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowLeft, MoreVertical, Phone, Send, Video } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ChatRoomPage() {
  const { id } = useParams();

  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Hey! Are you going to the event tonight?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Yeah, I think so. What time does it start?",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "them",
      text: "Around 7 PM. access is free for students.",
      time: "10:33 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "Awesome! I'll meet you there.",
      time: "10:35 AM",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="flex items-center gap-2 p-3 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/messages">
          <Button variant="ghost" size="icon" className="-ml-2">
            <ArrowLeft size={22} />
          </Button>
        </Link>
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=sarah" alt="User" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Sarah Williams</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Phone size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Video size={20} />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                msg.sender === "me"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-muted text-foreground rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <span
                className={`text-[10px] opacity-70 mt-1 block ${
                  msg.sender === "me" ? "text-right" : "text-left"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 bg-background border-t border-border">
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 text-muted-foreground"
          >
            <MoreVertical size={20} />
          </Button>
          <Input
            placeholder="Type a message..."
            className="rounded-full bg-muted border-transparent focus-visible:bg-background"
          />
          <Button size="icon" className="shrink-0 rounded-full">
            <Send size={18} />
          </Button>
        </form>
      </div>
    </div>
  );
}
