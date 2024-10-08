"use client";

import { animatePageIn } from "@/utils/transitions";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="fixed left-0 top-0 z-10 min-h-screen w-1/4 bg-custom-green" />
      <div
        id="banner-2"
        className="fixed left-1/4 top-0 z-10 min-h-screen w-1/4 bg-custom-orange" />
      <div
        id="banner-3"
        className="fixed left-2/4 top-0 z-10 min-h-screen w-1/4 bg-custom-green" />
      <div
        id="banner-4"
        className="fixed left-3/4 top-0 z-10 min-h-screen w-1/4 bg-custom-orange" />
      {children}
    </div>
  );
}