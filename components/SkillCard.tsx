"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode | string;
  hoverColor?: string; // e.g., "group-hover:text-cyan-300"
}

export default function SkillCard({
  name,
  icon,
  hoverColor = "group-hover:text-black dark:group-hover:text-white",
}: SkillCardProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && resolvedTheme === "dark";

  const lightShadow = {
    boxShadow: `
      rgba(0, 0, 0, 0.5) 0px 15px 25px,
      rgba(0, 0, 0, 0.35) 0px 10px 15px,
      rgba(0, 0, 0, 0.25) 0px 4px 6px
    `,
  };

  const darkShadow = {
    boxShadow: `
      rgba(200, 200, 200, 0.2) 2px 2px 6px,
      rgba(160, 160, 160, 0.15) 0px 6px 10px
    `,
  };

  // Extract the color class from hoverColor string
  // e.g., "group-hover:text-cyan-300" -> "text-cyan-300"
  const colorClass = hoverColor.replace("group-hover:", "").replace("dark:group-hover:", "");
  
  // Create responsive color classes
  // Mobile: always show color, Desktop: only on hover
  const responsiveColorClass = hoverColor
    .split(" ")
    .map(color => {
      if (color.startsWith("dark:group-hover:")) {
        const darkColor = color.replace("dark:group-hover:", "");
        return `dark:${darkColor} dark:md:${color}`;
      } else if (color.startsWith("group-hover:")) {
        const baseColor = color.replace("group-hover:", "");
        return `${baseColor} md:${color}`;
      }
      return color;
    })
    .join(" ");

  const iconClasses = cn(
    "transition-all duration-300 group-hover:-translate-y-2",
    responsiveColorClass
  );

  return (
    <div
      className="group w-24 sm:w-28 h-16 sm:h-20 rounded-lg flex flex-col items-center justify-center transition-all duration-300"
      style={isDarkMode ? { backgroundColor: '#000000', border: '1px solid rgba(255,255,255,0.1)', ...darkShadow } : { backgroundColor: 'rgba(255,255,255,0.7)', ...lightShadow }}
    >
      {typeof icon === "string" ? (
        <Image
          src={icon}
          alt={name}
          width={28}
          height={28}
          style={
            name === "GitHub" ? {
              filter: isDarkMode ? "invert(1)" : "none"
            } : name === "Vercel" ? {
              filter: !isDarkMode ? "invert(1)" : "none"
            } : name === "Express.js" ? {
              filter: !isDarkMode ? "invert(1)" : "none"
            } : name === "Figma" ? {
              filter: !isDarkMode ? "invert(1)" : "none"
            } : {}
          }
          className={iconClasses}
        />
      ) : (
        <div className={cn("text-2xl sm:text-3xl", iconClasses)}>{icon}</div>
      )}
      <span className="text-[8px] sm:text-[9px] md:text-[10px] mt-2 text-foreground">
        {name}
      </span>
    </div>
  );
}
