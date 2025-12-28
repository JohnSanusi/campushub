"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Bot, Sparkles, X } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-20 right-4 z-40">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition-transform"
          onClick={() => setIsOpen(true)}
        >
          <Bot size={28} className="text-white" />
        </Button>
      </div>

      {/* Dialog Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-background w-full max-w-sm rounded-3xl shadow-2xl border border-border overflow-hidden animate-slide-in-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Campus AI</h3>
                  <p className="text-xs opacity-90">Your personal guide</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Daily Tip */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 p-4 rounded-xl">
                <h4 className="font-bold text-indigo-700 dark:text-indigo-400 text-sm mb-1 uppercase tracking-wide">
                  Daily Tip
                </h4>
                <p className="text-sm">
                  "Study Hack: The library is least crowded between 8 AM and 10
                  AM. Grab a coffee and get your best work done early!"
                </p>
              </div>

              {/* Chat Bubbles */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-muted p-3 rounded-2xl rounded-tl-none text-sm">
                    Hi Alex! How can I help you navigate campus today?
                  </div>
                </div>

                <div className="flex gap-2 text-xs font-medium overflow-x-auto pb-2">
                  <button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    📅 Upcoming Events
                  </button>
                  <button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    🚌 Bus Schedule
                  </button>
                  <button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    🍕 Food near me
                  </button>
                </div>
              </div>
            </div>

            {/* Input Placeholer */}
            <div className="p-3 border-t border-border">
              <div className="h-10 bg-muted rounded-full w-full px-4 flex items-center text-muted-foreground text-sm">
                Ask anything...
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
