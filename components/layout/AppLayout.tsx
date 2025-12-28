"use client";

import BottomNav from "@/components/ui/BottomNav";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import AIAssistant from "@/components/ui/AIAssistant";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30 dark:bg-black font-sans pb-20 md:pb-0">
      <div className="flex justify-center min-h-screen">
        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="w-full md:w-auto md:flex-1 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl md:px-6 md:py-8">
          <div className="w-full max-w-md mx-auto md:max-w-none bg-background shadow-2xl md:shadow-none overflow-hidden md:overflow-visible border-x border-border/50 md:border-none relative min-h-screen md:min-h-0 md:bg-transparent">
            <Header />
            <main className="animate-fade-in relative md:bg-background md:rounded-3xl md:border md:border-border md:shadow-sm md:min-h-[95vh]">
              {children}
            </main>
            <AIAssistant />
            <BottomNav />
          </div>
        </div>

        {/* Desktop Right Sidebar (Trending/Suggestions) - Optional, can stay fully dynamic or be added later */}
        {/* For now, just centering the main feed is good enough as requested "dedicated desktop version" */}
      </div>
    </div>
  );
}
