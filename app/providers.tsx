// app/providers.tsx
'use client';

import React, { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

function EmberClicks() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const particleCount = 6;
      for (let i = 0; i < particleCount; i++) {
        const el = document.createElement('span');
        el.className = 'ember';

        const size = Math.round(8 + Math.random() * 10); // 8..18px
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;

        // random direction and shorter distance for subtle motion
        const angle = Math.random() * Math.PI * 2;
        const dist = 18 + Math.random() * 40; // px
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist - (6 + Math.random() * 12); // softer upward bias

        el.style.left = `${e.clientX - size / 2}px`;
        el.style.top = `${e.clientY - size / 2}px`;

        // duration
        const duration = 600 + Math.round(Math.random() * 700);
        el.style.setProperty('--tx', `${tx}px`);
        el.style.setProperty('--ty', `${ty}px`);
        el.style.setProperty('--d', `${duration}ms`);

        // color variation
        const r = 240 + Math.round(Math.random() * 15);
        const g = 80 - Math.round(Math.random() * 40);
        const b = 20;
        el.style.background = `radial-gradient(circle at 30% 30%, rgba(${r},${g},${b},1) 0%, rgba(${Math.max(r-80,160)},${Math.max(g-10,30)},${b},0.9) 50%, rgba(18,6,6,0.6) 100%)`;

        document.body.appendChild(el);

        // trigger animation in next frame
        requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('animate')));

        // cleanup after transition
        const onEnd = () => {
          el.removeEventListener('transitionend', onEnd);
          try {
            el.remove();
          } catch (err) {}
        };
        el.addEventListener('transitionend', onEnd);
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <EmberClicks />
      {children}
    </ThemeProvider>
  );
}
