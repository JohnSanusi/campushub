"use client";

import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  MessageSquare,
  Mic,
  MicOff,
  MoreVertical,
  PhoneOff,
  Video,
  VideoOff,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LiveClassPage() {
  const [micOn, setMicOn] = useState(false);
  const [videoOn, setVideoOn] = useState(true);

  return (
    <div className="h-screen bg-black flex flex-col text-white">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-center bg-gradient-to-b from-black/70 to-transparent">
        <Link href="/learning">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <ArrowLeft />
          </Button>
        </Link>
        <span className="font-semibold text-sm">
          CS 401: Advanced Algorithms
        </span>
        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold">
          Rec
        </div>
      </div>

      {/* Main Video Area */}
      <div className="flex-1 relative bg-zinc-900 flex items-center justify-center">
        <div className="text-center opacity-50">
          <div className="w-24 h-24 bg-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold">DS</span>
          </div>
          <p>Dr. Smith is speaking...</p>
        </div>

        {/* Grid of other students */}
        <div className="absolute bottom-20 right-4 w-32 h-48 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 shadow-xl">
          <img
            src="https://i.pravatar.cc/150?u=me"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-1 left-1 bg-black/50 text-[10px] px-1 rounded">
            You
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-zinc-900 p-6 pb-safe flex items-center justify-center gap-6 rounded-t-3xl">
        <button
          onClick={() => setMicOn(!micOn)}
          className={`p-4 rounded-full transition-colors ${
            micOn ? "bg-zinc-700" : "bg-red-500/20 text-red-500"
          }`}
        >
          {micOn ? <Mic /> : <MicOff />}
        </button>

        <button
          onClick={() => setVideoOn(!videoOn)}
          className={`p-4 rounded-full transition-colors ${
            videoOn ? "bg-zinc-700" : "bg-red-500/20 text-red-500"
          }`}
        >
          {videoOn ? <Video /> : <VideoOff />}
        </button>

        <Link href="/learning">
          <button className="p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30">
            <PhoneOff />
          </button>
        </Link>

        <button className="p-4 rounded-full bg-zinc-700">
          <MessageSquare />
        </button>

        <button className="p-4 rounded-full bg-zinc-700">
          <MoreVertical />
        </button>
      </div>
    </div>
  );
}
