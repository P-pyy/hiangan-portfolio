import { Heart, ExternalLink, Rocket } from "lucide-react";
import Image from "next/image";
import React, { JSX, useState, useEffect } from "react";
import ProjectModal from "../ProjectModal"; // ⬅️ You must have this file
import { jetbrainsMono } from "@/app/font";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiPostgresql } from "react-icons/si";

export const techIconMap: Record<string, JSX.Element> = {
  react: <FaReact className="text-cyan-300" />,
  node: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-white" />,
  mongo: <SiMongodb className="text-green-400" />,
  ts: <SiTypescript className="text-blue-500" />,
  next: <SiNextdotjs className="text-white" />,
  postgres: <SiPostgresql className="text-sky-500" />,
};

type ProjectCategory = "all" | "websites" | "webapps" | "other";

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  video: string;
  techStack: string[];
  gradient: string;
  github: string;
  live: string;
  category: ProjectCategory;
  icon: string; // emoji or icon identifier
}

const projects: Project[] = [
  {
    title: "Reigi",
    description: "A website that provides assistant to students regarding registrar-related student problems",
    thumbnail: "/reigi_website1.png",
    images: ["/reigi_website1.png", "/reigi_website2.png"],
    video: "",
    techStack: ["node", "express"],
    gradient: "#e8390d 0%, rgba(110, 9, 7, 0.65) 35%, rgba(0, 0, 0, 0.95) 100%",
    github: "https://github.com/P-pyy/REIGI",
    live: "https://reigi.vercel.app/",
    category: "websites",
    icon: "🌐",
  },

  {
    title: "Reigi Kiosk",
    description: "A kiosk website that provides assistant to students regarding registrar-related student problems",
    thumbnail: "/reigi_kiosk1.png",
    images: ["/reigi_kiosk1.png", "/reigi_kiosk2.png", "/reigi_kiosk3.png", "/reigi_kiosk4.png", "/reigi_kiosk5.png"],
    video: "",
    techStack: ["node", "express"],
    gradient: "#e8390d, rgb(8, 0, 10)",
    github: "https://github.com/P-pyy/REIGI",
    live: "https://reigi.vercel.app/kiosk/",
    category: "webapps",
    icon: "🏪",
  },

  {
    title: "Dream PC Build & IT Solutions",
    description: "A website that provides assistant to students regarding registrar-related student problems",
    thumbnail: "/dpc_website1.png",
    images: ["/dpc_website1.png", "/dpc_website2.png", "/dpc_website3.png", "/dpc_website4.png", "/dpc_website5.png"],
    video: "",
    techStack: ["node", "express"],
    gradient: "#e8390d 0%, rgba(110, 9, 7, 0.65) 35%, rgba(0, 0, 0, 0.95) 100%",
    github: "https://github.com/auxclark/dreampcbuildanditsolutionsinc",
    live: "https://dreampcbuild.com/",
    category: "websites",
    icon: "💻",
  },

  {
    title: "DPC Management System",
    description: "A management system for tracking and organizing business operations",
    thumbnail: "/dpc_management1.png",
    images: ["/dpc_management1.png", "/dpc_management2.png", "/dpc_management3.png"],
    video: "",
    techStack: ["node", "express"],
    gradient: "#e8390d 0%, rgba(110, 9, 7, 0.65) 35%, rgba(0, 0, 0, 0.95) 100%",
    github: "https://github.com/Dream-PC-Build-and-I-T-Solutions/DPC",
    live: "https://reigi.vercel.app/",
    category: "webapps",
    icon: "📊",
  },
];

const filterOptions: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "Web Apps", value: "webapps" },
  { label: "Other", value: "other" },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = document.querySelectorAll(".fade-in-element");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <div id="projects" className={`${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pb-20 w-full max-w-5xl`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        
        <h1 className="text-4xl md:text-6xl text-center font-bold">
          My Projects
        </h1>
        <p className="text-center text-gray-400 text-sm md:text-base max-w-2xl">
          A collection of websites and apps I've{"\u00A0"}built with passion.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 flex-wrap justify-center">
        {filterOptions.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === filter.value
                ? "bg-[#e8390d] text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full`}>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className={`fade-in-element ${index % 2 === 0 ? "from-left" : "from-right"} group cursor-pointer bg-gradient-to-br from-black via-slate-950 to-[#6c0505] border border-gray-800 rounded-3xl p-6 hover:border-gray-700 hover:shadow-lg hover:shadow-[#e8390d]/25 will-change-transform project-card-delay-${index}`}
          >
            <div className="grid gap-6 md:grid-cols-[1fr_auto] items-start">
              <div>
                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#e8390d] transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.techStack.map((tech, idx) => (
                    <div key={idx} className="text-lg">
                      {techIconMap[tech]}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex w-full max-w-[320px] flex-col gap-4">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    width={400}
                    height={260}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e8390d] bg-black/70 px-4 py-3 text-[#e8390d] text-sm font-semibold hover:bg-[#1c0a0a] hover:text-white transition-all duration-300"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="flex flex-col items-center justify-center gap-2 pt-6 text-center text-gray-400">
        <div className="inline-flex items-center gap-2 text-[#e8390d] text-sm font-semibold">
          <Rocket className="w-4 h-4" />
          More projects coming soon!
        </div>
        <p className="text-sm">I'm always building and learning.</p>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
