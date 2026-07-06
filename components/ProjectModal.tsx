"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { jetbrainsMono } from "@/app/font";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { techIconMap } from "./navPages/Projects";

interface ProjectModalProps {
  title: string;
  description: string;
  thumbnail?: string;
  images?: (string | StaticImageData)[];
  video?: string; // video URL or src
  techStack: string[];
  gradient: string;
  github: string;
  live: string;
  onClose: () => void;
}

export default function ProjectModal({
  title,
  description,
  thumbnail,
  images = [],
  video,
  techStack,
  gradient,
  github,
  live,
  onClose,
}: ProjectModalProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [tab, setTab] = useState<"images" | "video">("images");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    // reset index when images change
    setIndex(0);
  }, [images]);

  const lightShadow = {
    boxShadow: `
      rgba(0, 0, 0, 0.5) 0px 20px 30px,
      rgba(0, 0, 0, 0.4) 0px 12px 18px
    `,
  };

  const darkShadow = {
    boxShadow: `
      rgba(255, 255, 255, 0.2) 0px 4px 12px,
      rgba(255, 255, 255, 0.1) 0px 8px 24px
    `,
  };

  const showVideoTab = Boolean(video);
  const hasImages = images && images.length > 0;

  const prev = () => {
    if (!hasImages) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    if (!hasImages) return;
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center px-5 sm:px-4"
      onClick={onClose}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={false}
        className="relative w-full max-w-3xl rounded-xl overflow-hidden group transition-all duration-300"
        style={{
          ...(isDarkMode ? lightShadow : darkShadow),
          background: `radial-gradient(circle at 50% 0%, ${gradient})`,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full z-50"
        >
          <X size={20} />
        </button>

        {/* Text + Tech + Links */}
        <div className="relative z-10 flex flex-col gap-4 text-white p-4 sm:p-6">
          <h2 className={`${jetbrainsMono.className} text-xl sm:text-2xl md:text-3xl font-bold`}>
            {title}
          </h2>
          <p className="text-sm sm:text-base text-white/80">{description}</p>

          {/* Media area */}
          <div className="w-full flex flex-col items-center gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-2 bg-white/10 rounded-full p-1">
              <button
                onClick={() => setTab("images")}
                className={`px-3 py-1 rounded-full ${tab === "images" ? "bg-white text-black" : "text-white/80"}`}
              >
                Images
              </button>
              {showVideoTab && (
                <button
                  onClick={() => setTab("video")}
                  className={`px-3 py-1 rounded-full ${tab === "video" ? "bg-white text-black" : "text-white/80"}`}
                >
                  Video
                </button>
              )}
            </div>

            <div className="relative w-full min-h-[220px] sm:min-h-[420px] flex items-center justify-center px-2 sm:px-0">
              {/* Left arrow (larger on mobile for touch) */}
              {hasImages && tab === "images" && (
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-2 sm:left-3 z-40 w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:scale-105"
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              {/* Media */}
              <div className="rounded-2xl overflow-hidden w-[95%] sm:w-[85%] md:w-[680px]">
                {tab === "images" && hasImages && (
                  <div className="relative w-full h-[240px] sm:h-[420px] md:h-[480px] bg-black/10 flex items-center justify-center">
                    <Image
                      src={images[index]}
                      alt={`${title} image ${index + 1}`}
                      width={1200}
                      height={700}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

                {tab === "images" && !hasImages && thumbnail && (
                  <div className="relative w-full h-[240px] sm:h-[420px] md:h-[480px] bg-black/10 flex items-center justify-center">
                    <Image src={thumbnail} alt={title} width={1200} height={700} className="object-cover w-full h-full" />
                  </div>
                )}

                {tab === "video" && showVideoTab && (
                  <div className="w-full h-[240px] sm:h-[420px] md:h-[480px] bg-black/10 flex items-center justify-center">
                    <video src={video} controls className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              {/* Right arrow (larger on mobile for touch) */}
              {hasImages && tab === "images" && (
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-2 sm:right-3 z-40 w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:scale-105"
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>

            {/* Dots */}
            {hasImages && tab === "images" && (
              <div className="flex items-center gap-2 mt-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                    className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
                  />
                ))}
              </div>
            )}

            {/* Thumbnail strip */}
            {hasImages && tab === "images" && (
              <div className="w-full overflow-x-auto py-2 px-2">
                <div className="flex gap-2 items-center">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                      className={`flex-shrink-0 rounded-md overflow-hidden border ${i === index ? "border-white" : "border-transparent"}`}
                    >
                      <Image src={src} alt={`thumb-${i}`} width={140} height={80} className={`object-cover ${i === index ? "opacity-100" : "opacity-80"}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Links & Tech Stack */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black font-semibold px-4 py-2 rounded-3xl hover:opacity-80 transition"
              >
                <ExternalLink size={18} /> Live Preview
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black font-semibold px-4 py-2 rounded-3xl hover:opacity-80 transition"
              >
                <FiGithub size={18} /> GitHub
              </a>
            </div>

            <div className="flex justify-center md:justify-end transition-all duration-500">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center text-[24px] sm:text-[28px] shadow-md transition-all duration-500`}
                  style={{ zIndex: techStack.length - index }}
                >
                  {techIconMap[tech] || null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
