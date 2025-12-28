"use client";

import {
  Home,
  Compass,
  PlusSquare,
  MessageCircle,
  User,
  LogOut,
  Settings,
  Bell,
  BookOpen,
  Briefcase,
  ShoppingBag,
  Users as UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Discover", href: "/discover", icon: Compass },
    { name: "Events", href: "/events", icon: PlusSquare },
    { name: "Messages", href: "/messages", icon: MessageCircle },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
    { name: "Communities", href: "/groups", icon: UsersIcon },
    { name: "Classes", href: "/learning", icon: BookOpen },
    { name: "Jobs", href: "/jobs", icon: Briefcase },
    { name: "Profile", href: "/profile", icon: User },
  ];

  if (!user) return null;

  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-background border-r border-border sticky top-0 left-0 p-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30">
          C
        </div>
        <span className="font-bold text-xl tracking-tight text-foreground">
          CampusHub
        </span>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 space-y-1 overflow-y-auto hide-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                isActive
                  ? "bg-primary text-primary-foreground font-medium shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 2}
                className={cn(isActive && "scale-105")}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User & Actions */}
      <div className="mt-4 pt-4 border-t border-border space-y-4">
        <Button className="w-full gap-2 font-bold shadow-lg shadow-primary/20">
          <PlusSquare size={18} /> Create Post
        </Button>

        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted cursor-pointer transition-colors group relative">
          <div className="w-10 h-10 rounded-full bg-primary p-[2px]">
            <img
              src={user.avatar}
              className="rounded-full w-full h-full border-2 border-background object-cover"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <h4 className="font-bold text-sm truncate">{user.name}</h4>
            <p className="text-xs text-muted-foreground truncate">
              {user.handle}
            </p>
          </div>
          <Settings size={18} className="text-muted-foreground" />

          <button
            onClick={logout}
            className="absolute inset-0 w-full h-full"
            aria-label="Settings"
          ></button>
        </div>
      </div>
    </div>
  );
}
