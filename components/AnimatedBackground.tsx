'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;
  const parallaxOffset = scrollY * 0.08;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className={isDark ? "absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#0c0c0c]" : "absolute inset-0 bg-gradient-to-b from-[#f8f8f8] via-[#f0f0f0] to-[#e5e5e5]"}
      />

      <div
        className={isDark ? "absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,22,68,0.16),_transparent_26%),radial-gradient(circle_at_80%_18%,_rgba(255,72,88,0.1),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(255,24,58,0.14),_transparent_26%)]" : "absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,22,68,0.11),_transparent_26%),radial-gradient(circle_at_80%_18%,_rgba(255,72,88,0.08),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(255,24,58,0.12),_transparent_26%)]"}
      />



      <div
        className={isDark ? "absolute inset-0 opacity-35" : "absolute inset-0 opacity-6"}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='70' viewBox='0 0 80 70'%3E%3Cg fill='none' stroke='%23222222' stroke-width='1'%3E%3Cpath d='M40 0l40 20v30l-40 20-40-20V20Z'/%3E%3Cpath d='M0 20l40 20 40-20'/%3E%3Cpath d='M0 40l40 20 40-20'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 70px',
        }}
      />

    </div>
  );
}
