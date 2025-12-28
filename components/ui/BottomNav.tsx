"use client";

import { Home, Compass, PlusSquare, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Discover", href: "/discover", icon: Compass },
    { name: "Events", href: "/events", icon: PlusSquare },
    { name: "Chat", href: "/messages", icon: MessageCircle },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-border pb-safe md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1",
                isActive
                  ? "text-primary dark:text-primary"
                  : "text-muted-foreground hover:text-foreground transition-colors"
              )}
            >
              <Icon
                size={24}
                strokeWidth={isActive ? 2.5 : 2}
                className={cn(
                  isActive && "scale-110 transition-transform duration-200"
                )}
              />
              {/* Optional labels or indicator implementation */}
              {/* <span className="text-[10px] font-medium">{item.name}</span> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
