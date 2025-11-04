"use client";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { jetbrainsMono } from "@/app/font";

export default function Footer() {
  return (
    <footer
      className={`${jetbrainsMono.className} w-full text-muted-foreground border-t border-border py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm`}
    >
      <p className="text-center">
        © {new Date().getFullYear()} Hiangan, Chrestine. All rights reserved.
      </p>

      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/P-pyy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          <FiGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/chrestine-hiangan-26146a384/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:chrestinehiangan15@gmail.com"
          className="hover:text-foreground transition-colors"
        >
          <FiMail className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
