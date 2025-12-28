"use client";

import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/Button";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";

export default function MarketplacePage() {
  const items = [
    {
      id: 1,
      title: "MacBook Pro M1 2020",
      price: "$850",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
      seller: "Dave",
    },
    {
      id: 2,
      title: "Calculus Textbook",
      price: "$40",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
      seller: "Sarah",
    },
    {
      id: 3,
      title: "Sony WH-1000XM4",
      price: "$180",
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80",
      seller: "Mike",
    },
    {
      id: 4,
      title: "Dorm Mini Fridge",
      price: "$60",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80",
      seller: "Jenny",
    },
    {
      id: 5,
      title: "IKEA Desk Lamp",
      price: "$15",
      image:
        "https://images.unsplash.com/photo-1534073828943-f801091a7d58?w=400&q=80",
      seller: "Tom",
    },
  ];

  const categories = ["All", "Tech", "Books", "Furniture", "Clothing"];

  return (
    <AppLayout>
      <div className="p-4 bg-muted/20 min-h-screen">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <Button size="icon" className="rounded-full shadow-lg">
            <Plus size={22} />
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((cat, i) => (
            <Button
              key={cat}
              variant={i === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full whitespace-nowrap"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 pb-20">
          {items.map((item) => (
            <Link
              href={`/marketplace/${item.id}`}
              key={item.id}
              className="bg-background rounded-xl overflow-hidden shadow-sm border border-border group"
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md font-bold">
                  {item.price}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Sold by {item.seller}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
