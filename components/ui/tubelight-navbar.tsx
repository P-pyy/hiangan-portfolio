"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // offset for navbar height

      for (let i = items.length - 1; i >= 0; i--) {
        const sectionId = items[i].url.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section && scrollY >= section.offsetTop) {
          setActiveTab(items[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div
      className={cn(
        "fixed bottom-1 sm:top-0 sm:bottom-auto left-1/2 -translate-x-1/2 z-50 sm:pt-6 pointer-events-none",
        className
      )}
    >
      <div className="inline-flex w-[min(88vw,20.75rem)] items-center justify-evenly gap-4 bg-white/10 border border-white/20 backdrop-blur-2xl py-0.5 px-4 rounded-full shadow-[0_10px_30px_rgba(210,40,40,0.18)] backdrop-saturate-150 pointer-events-auto dark:bg-[#080304]/60 dark:border-[#ff5a5a]/20">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white/70 transition-colors duration-300 hover:text-white",
                isActive && "text-[#ff4d4d]"
              )}
            >
              {isActive && (
                <>
                  <span className="absolute -top-3 -right-3 h-14 w-14 rounded-full opacity-90 blur-3xl active-navbar-glow" />
                  <span className="absolute inset-0 m-auto h-8 w-8 rounded-full bg-[#070707] ring-1 ring-white/10 shadow-[0_0_10px_rgba(0,0,0,0.35)]" />
                  <span className="absolute bottom-[-0.45rem] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ff3b3b] shadow-[0_0_10px_rgba(255,59,59,0.45)]" />
                </>
              )}

              <span className="relative z-10">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
