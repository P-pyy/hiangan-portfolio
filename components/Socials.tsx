import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaFacebook } from "react-icons/fa";
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Socials() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && resolvedTheme === 'dark';

  const hoverClass = isDarkMode
    ? 'hover:brightness-200'
    : 'hover:brightness-90';

  const cardShadowClass = isDarkMode
    ? 'shadow-lg shadow-white/15'
    : 'shadow-2xl shadow-red-600/20';

  const cardBg = isDarkMode ? '#000000' : 'rgba(255,255,255,0.7)';

  return (
    <div className="mt-6 flex gap-4">
      <a
        href="https://github.com/P-pyy"
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: cardBg }}
        className={`p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-[4px] dark-solid-card ${hoverClass} ${cardShadowClass}`}
      >
        <FiGithub className="w-6 h-6" />
      </a>

      <a
        href="https://www.linkedin.com/in/chrestine-hiangan-26146a384/"
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: cardBg }}
        className={`p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-[4px] dark-solid-card ${hoverClass} ${cardShadowClass}`}
      >
        <FiLinkedin className="w-6 h-6" />
      </a>

      <a
        href="https://www.facebook.com/chrest.hiangan/"
        title="Facebook"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: cardBg }}
        className={`p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-[4px] dark-solid-card ${hoverClass} ${cardShadowClass}`}
      >
        <FaFacebook className="w-6 h-6" />
      </a>
    </div>
  );
}
