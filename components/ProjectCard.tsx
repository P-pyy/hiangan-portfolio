import Image from "next/image";
import React, { useEffect, useState } from "react";
import { techIconMap } from "./navPages/Projects";

interface ProjectCardProps {
    title: string;
    description: string;
    thumbnail: string;
    techStack: string[];
    gradient: string;
    onClick?: () => void;
}

export default function ProjectCard({
    title,
    description,
    thumbnail,
    techStack,
    gradient,
    onClick,
}: ProjectCardProps) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, []);

    const gradientClass = gradient === "#e8390d, rgb(8, 0, 10)" ? "alt" : "default";

    return (
        <div
            onClick={onClick}
            className={`relative cursor-pointer border-[10px] dark:border-slate-900 rounded-xl overflow-hidden group transition-all duration-300 project-card project-card-bg-${gradientClass} ${isDarkMode ? "project-card-shadow-dark" : "project-card-shadow-light"}`}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

            {/* Main content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-6 pt-4">
                {/* Text */}
                <div className="text-white w-full md:w-2/3">
                    <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                    <p className="mt-2 text-sm md:text-base text-white/80">{description}</p>
                </div>

                {/* Tech stack with overlapping icons */}
                <div className="flex justify-center md:justify-end transition-all duration-500 project-card-tech-stack">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center text-[24px] sm:text-[28px] shadow-md transition-all duration-500 -ml-4 group-hover:ml-0"
                        >
                            {techIconMap[tech] || null}
                        </div>
                    ))}
                </div>

            </div>

            {/* Thumbnail */}
            <div className="relative bottom-[-50px] w-full flex justify-center items-end z-10 max-h-[180px] sm:max-h-[300px] md:max-h-none">
                <Image
                    src={thumbnail}
                    alt="project"
                    width={400}
                    height={300}
                    className="duration-500 group-hover:-translate-y-4 object-contain rounded-t-2xl w-[80%]"
                />
            </div>
        </div>
    );
}
