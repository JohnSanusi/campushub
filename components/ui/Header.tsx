"use client";

import { Bell, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-border md:hidden">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30">
            C
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            CampusHub
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted">
            <Search size={22} />
          </button>
          <button className="relative p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted">
            <Bell size={22} />
            <span className="absolute top-2 right-2 size-2 bg-destructive rounded-full border border-white dark:border-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
