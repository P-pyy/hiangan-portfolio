"use client";

import React, { useState } from "react";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import scrollDownAnimation from "@/public/scroll-down.json";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { jetbrainsMono } from "@/app/font"; // optional if you use custom fonts
import Socials from "../Socials";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

import chrestine1 from "@/public/chrestine1.jpg";
import chrestine2 from "@/public/chrestine2.jpg";

export function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Chrestine_Hiangan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="w-full max-w-5xl flex flex-col items-center justify-center px-6 pt-20 pb-24 sm:min-h-screen relative"
    >
      {/* Main content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
        {/* Left section */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Hi, I’m{" "}
              <span className="text-[#e8390d] dark:text-[#ff6347]">
                Chrestine
              </span>
            </h1>
            <span
              className="text-4xl sm:text-5xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transformOrigin: "70% 70%",
                animation: isHovered
                  ? "wave 1.2s ease-in-out infinite"
                  : "none",
                display: "inline-block",
              }}
            >
              👋
            </span>
          </div>

          <p
            className={`${
              jetbrainsMono?.className || ""
            } flex items-center mt-4 text-[#dd431d] gap-2 text-sm sm:text-lg`}
          >
            <MapPin />
            Teresa, Rizal, Philippines
          </p>

          {/* Typewriter animation */}
          <span className="mt-4 text-lg sm:text-3xl font-medium block text-zinc-800 dark:text-zinc-200">
            <Typewriter
              options={{
                strings: [
                  "A Passionate Developer 💻",
                  "A Creative Thinker 🎨",
                  "A Tech Enthusiast 🚀",
                ],
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 10,
              }}
            />
          </span>

          {/* Description */}
          <p className="max-w-md text-gray-600 dark:text-gray-400 leading-relaxed mt-6 mx-auto md:mx-0">
            I love building colorful, fun, and interactive web experiences using{" "}
            <b>Next.js</b>, <b>Tailwind CSS</b>, and my imagination 💡
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start mt-6">
            <InteractiveHoverButton onClick={handleDownload}>
              📄 Download Resume
            </InteractiveHoverButton>
            <a
              href="#contact"
              className="border-2 border-[#e8390d] text-[#e8390d] hover:bg-[#e8390d] hover:text-white px-6 py-3 rounded-full transition-all hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex justify-center md:justify-start">
            <Socials />
          </div>
        </div>

        {/* Right section - Hover Image */}
        <div
          className="w-48 h-48 sm:w-72 sm:h-72 relative shrink-0 rounded-full overflow-hidden transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Base image */}
          <Image
            src={chrestine1}
            alt="Chrestine Hiangan"
            fill
            className={`object-cover rounded-full transition-opacity duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Hover image */}
          <Image
            src={chrestine2}
            alt="Chrestine Hiangan Hover"
            fill
            className={`object-cover rounded-full absolute top-0 left-0 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Scroll Down Animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 z-10 hidden md:block">
        <Lottie animationData={scrollDownAnimation} loop />
      </div>
    </section>
  );
}

