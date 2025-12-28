"use client";

import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/Button";
import { Grid, List, MapPin, Settings, Camera } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { db, Post } from "@/lib/db";

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!isLoading && !user) {
      const fallback = db.getCurrentUser();
      if (!fallback) {
        redirect("/login");
      }
    }
  }, [user, isLoading]);

  useEffect(() => {
    if (user) {
      setPosts(db.getUserPosts(user.id));
    }
  }, [user]);

  if (isLoading || !user) return null;

  return (
    <AppLayout>
      {/* Header Info */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl p-1 bg-primary">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full rounded-xl object-cover bg-background border-2 border-background"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full border-2 border-background shadow-sm">
              Lvl {user.level}
            </div>
          </div>
          <Button variant="outline" size="sm" className="rounded-full">
            <Settings size={18} />
          </Button>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">{user.name}</h1>
            <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              {user.role}
            </span>
          </div>
          <p className="text-muted-foreground font-medium">{user.handle}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <MapPin size={14} />
            <span>Campus</span>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed">{user.bio}</p>

        {/* Stats */}
        <div className="flex items-center justify-between mt-6 px-2 py-3 bg-muted/50 rounded-xl border border-border/50">
          <div className="text-center">
            <div className="font-bold text-lg">{user.posts}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              Posts
            </div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-bold text-lg">{user.followers}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              Followers
            </div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-bold text-lg">{user.following}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              Following
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Button>Edit Profile</Button>
          <Button variant="outline">Share Profile</Button>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="mt-2 border-t border-border">
        <div className="flex">
          <button className="flex-1 flex justify-center py-3 border-b-2 border-foreground">
            <Grid size={22} />
          </button>
          <button className="flex-1 flex justify-center py-3 border-b-2 border-transparent text-muted-foreground">
            <List size={22} />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5 mt-0.5 pb-20">
        {posts.map((post) => (
          <div
            key={post.id}
            className="aspect-square bg-muted relative overflow-hidden group cursor-pointer"
          >
            {post.image ? (
              <img
                src={post.image}
                alt="Post"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground p-2">
                <p className="text-[10px] text-center line-clamp-3">
                  {post.content}
                </p>
              </div>
            )}
          </div>
        ))}
        {posts.length === 0 && (
          <div className="col-span-3 flex flex-col items-center justify-center py-12 text-muted-foreground gap-2">
            <div className="p-4 bg-muted rounded-full mb-2">
              <Camera size={24} />
            </div>
            <p>No posts yet</p>
            <Button size="sm" variant="outline">
              Create your first post
            </Button>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
