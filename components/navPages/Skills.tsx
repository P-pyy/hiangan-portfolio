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
            { name: "Express.js", icon: "/express.svg", hoverColor: "group-hover:text-gray-500" },
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
            { name: "GitHub", icon: "/github.svg", hoverColor: "group-hover:text-gray-700 dark:group-hover:text-gray-300" },
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

            <div className="flex flex-col gap-12">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-8 items-start p-6 md:p-8 border-2 border-[#e8390d] dark:border-[#ff6347] rounded-2xl bg-gradient-to-br from-red-950/10 to-transparent dark:from-red-950/20">
                        {/* Left side - Category info */}
                        <div className="flex-shrink-0 md:w-1/3">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 border-2 border-[#e8390d] dark:border-[#ff6347] rounded-lg text-[#e8390d] dark:text-[#ff6347]">
                                        {category.icon}
                                    </div>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                                <div className="flex items-start gap-2">
                                    <span className="text-[#e8390d] dark:text-[#ff6347] text-lg mt-0.5">»</span>
                                    <p className="text-[#d97706] dark:text-[#fb923c] text-sm md:text-base leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Skills grid */}
                        <div className="flex-1 w-full">
                            <div className="flex flex-wrap gap-6 md:gap-8 justify-start md:justify-center">
                                {category.skills.map((skill, skillIdx) => (
                                    <SkillCard key={skillIdx} {...skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
