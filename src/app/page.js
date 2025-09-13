"use client";

import Hero from "@/components/home/hero/Hero";
import { useRevealer } from "@/hooks/useRevealer";

export default function Home() {
  useRevealer();
  return (
    <div className="home-page">
    <div className="revealer"></div>
    <Hero />
    </div>
  );
}
