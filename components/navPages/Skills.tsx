"use client";
import { FaGitAlt } from "react-icons/fa6";
import SkillCard from "../SkillCard";
import { jetbrainsMono } from "@/app/font";
import { Code2, Database, Zap } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        description: "Building the visual and interactive experiences.",
        icon: <Code2 className="w-8 h-8" />,
        skills: [
            { name: "HTML5", icon: "/html.svg", hoverColor: "group-hover:text-orange-500" },
            { name: "CSS3", icon: "/css.svg", hoverColor: "group-hover:text-blue-500" },
            { name: "JavaScript", icon: "/javascript.svg", hoverColor: "group-hover:text-yellow-400" },
            { name: "TypeScript", icon: "/typescript.svg", hoverColor: "group-hover:text-sky-500" },
            { name: "React", icon: "/react.svg", hoverColor: "group-hover:text-cyan-300" },
            { name: "Next.js", icon: "/nextjs.svg", hoverColor: "group-hover:text-black dark:group-hover:text-white" },
            { name: "Tailwind CSS", icon: "/tailwind.svg", hoverColor: "group-hover:text-cyan-400" },
            { name: "Bootstrap", icon: "/bootstrap.svg", hoverColor: "group-hover:text-purple-600" },
        ]
    },
    {
        title: "Backend",
        description: "Powering the logic, database, and server-side functionalities.",
        icon: <Database className="w-8 h-8" />,
        skills: [
            { name: "Node.js", icon: "/nodejs.svg", hoverColor: "group-hover:text-green-600" },
            { name: "Express.js", icon: "/expressjs.svg", hoverColor: "group-hover:text-gray-500" },
            { name: "MongoDB", icon: "/mongo.svg", hoverColor: "group-hover:text-green-500" },
            { name: "MySQL", icon: "/mysql.svg", hoverColor: "group-hover:text-blue-600" },
            { name: "Firebase", icon: "/firebase.svg", hoverColor: "group-hover:text-yellow-500" },
            { name: "Supabase", icon: "/supabase.svg", hoverColor: "group-hover:text-emerald-500" },
            { name: "VB.NET", icon: "/vbnet.svg", hoverColor: "group-hover:text-blue-500" },
        ]
    },
    {
        title: "Tools & Technologies",
        description: "Tools and platforms that enhance productivity and development.",
        icon: <Zap className="w-8 h-8" />,
        skills: [
            { name: "Git", icon: "/git.svg", hoverColor: "group-hover:text-orange-600" },
            { name: "GitHub", icon: "/github.svg", hoverColor: "text-white group-hover:text-gray-400 dark:group-hover:text-gray-400" },
            { name: "Figma", icon: "/figma.svg", hoverColor: "group-hover:text-purple-500" },
            { name: "VS Code", icon: "/vscode.svg", hoverColor: "group-hover:text-blue-500" },
            { name: "Vercel", icon: "/vercel.svg", hoverColor: "group-hover:text-black dark:group-hover:text-white" },
            { name: "npm", icon: "/npm.svg", hoverColor: "group-hover:text-red-600" },
        ]
    }
];

export default function SkillsSection() {
    return (
        <section id="skills" className={`${jetbrainsMono.className} flex flex-col gap-16 py-16 px-4 max-w-6xl mx-auto`}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-4xl md:text-6xl text-center font-bold">
                    My <span className="text-[#e8390d] dark:text-[#ff6347]">Skills</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                    The tools and technologies I use to bring ideas to life.
                </p>
            </div>

            <div className="flex flex-col gap-8 sm:gap-12">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="relative flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start p-4 sm:p-6 lg:p-8 border-2 border-[#a10c0c] dark:border-[#ff3c30] rounded-2xl bg-gradient-to-br from-[#a10c0c]/20 to-transparent dark:from-[#ff3c30]/20 overflow-hidden">
                        <span className="pointer-events-none absolute top-3 right-3 h-0.5 w-8 bg-[#e8390d] dark:bg-[#ff6347] rounded-full" />
                        <span className="pointer-events-none absolute top-3 right-3 w-0.5 h-8 bg-[#e8390d] dark:bg-[#ff6347] rounded-full" />
                        <span className="pointer-events-none absolute bottom-3 left-3 h-0.5 w-8 bg-[#e8390d] dark:bg-[#ff6347] rounded-full" />
                        <span className="pointer-events-none absolute bottom-3 left-3 w-0.5 h-8 bg-[#e8390d] dark:bg-[#ff6347] rounded-full" />
                        {/* Left side - Category info */}
                        <div className="flex-shrink-0 w-full sm:w-auto lg:w-1/3">
                            <div className="flex flex-col gap-2 sm:gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 sm:p-3 border-2 border-[#e8390d] dark:border-[#ff6347] rounded-lg text-[#e8390d] dark:text-[#ff6347]">
                                        {category.icon}
                                    </div>
                                    <h2 className={category.title === "Tools & Technologies" ? "text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap" : "text-xl sm:text-2xl lg:text-3xl font-bold"}>
                                        {category.title}
                                    </h2>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#e8390d] dark:text-[#ff6347] text-lg mt-0.5 flex-shrink-0">»</span>
                                    <p className="text-[#d97706] dark:text-[#fb923c] text-xs sm:text-sm lg:text-base leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Skills grid */}
                        <div className="flex-1 w-full">
                            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className="flex justify-center">
                                        <SkillCard {...skill} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
