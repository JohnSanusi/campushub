"use client";

import { Button } from "@/components/ui/Button";
import { ArrowLeft, Flag, Heart, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";

export default function ItemDetailPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header Image */}
      <div className="relative h-[400px] bg-muted">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
          alt="Product"
          className="w-full h-full object-cover"
        />
        <Link
          href="/marketplace"
          className="absolute top-4 left-4 p-2 rounded-full bg-black/30 text-white backdrop-blur-md"
        >
          <ArrowLeft size={24} />
        </Link>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 rounded-full bg-black/30 text-white backdrop-blur-md">
            <Share2 size={24} />
          </button>
          <button className="p-2 rounded-full bg-black/30 text-white backdrop-blur-md">
            <Heart size={24} />
          </button>
        </div>
      </div>

      <div className="p-4 -mt-6 relative bg-background rounded-t-3xl shadow-xl">
        <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-4" />

        <div className="flex justify-between items-start mb-2">
          <div>
            <h1 className="text-2xl font-bold">MacBook Pro M1 2020</h1>
            <p className="text-muted-foreground">Posted 2 hours ago</p>
          </div>
          <div className="text-2xl font-bold text-primary">$850</div>
        </div>

        <div className="flex items-center gap-3 py-4 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=dave" alt="Seller" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">Dave Miller</p>
            <p className="text-xs text-muted-foreground">
              Computer Engineering • Year 4
            </p>
          </div>
          <Button variant="outline" size="sm">
            View Profile
          </Button>
        </div>

        <div className="py-4 space-y-3">
          <h3 className="font-bold">Description</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Barely used MacBook Pro M1 with 8GB RAM and 256GB SSD. Selling
            because I upgraded to the M3. battery health is 98%. Comes with
            original charger and box.
          </p>
        </div>

        <div className="flex gap-2 mt-4">
          <Button className="flex-1 gap-2" size="lg">
            <MessageCircle size={20} />
            Chat with Seller
          </Button>
          <Button variant="outline" size="lg">
            Make Offer
          </Button>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="text-destructive text-sm flex items-center gap-2">
            <Flag size={14} /> Report Listing
          </button>
        </div>
      </div>
    </div>
  );
}
