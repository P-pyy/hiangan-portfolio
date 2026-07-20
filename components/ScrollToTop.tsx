'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';

export default function ScrollToTopBtn() {
  const [showButton, setShowButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.button
            key="chat-toggle"
            onClick={toggleChat}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 sm:bottom-12 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:bg-zinc-900 dark:text-white border border-gray-200 dark:border-zinc-700 hover:scale-110 transition-transform"
            aria-label="Open chat"
          >
            <MessageCircle className="w-7 h-7" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[320px] max-w-sm rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between rounded-t-3xl border-b border-white/10 bg-slate-900/95 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white shadow-inner">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">PIPS AI Assistant</p>
                  <p className="text-[11px] text-slate-400">Active now</p>
                </div>
              </div>
              <button
                className="rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white"
                onClick={toggleChat}
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-4 py-3">
              <div className="rounded-3xl bg-white/5 p-3 text-sm text-slate-200 shadow-inner">
                <p className="chat-title text-[10px] text-slate-200">Hey there! 👋 I&apos;m PIPS&apos; AI Assistant.</p>
                <p className="mt-1 text-[10px] leading-5 text-slate-200">I&apos;m here to help you explore more about Chrestine Hiangan — her projects, skills, experience, and how we can connect.</p>
                <p className="mt-1 text-[10px] text-[#fb471a]">What would you like to know?</p>
              </div>

              <div className="mt-4 grid gap-2">
                {['About Me', 'Education', 'My Projects', 'Experience'].map((label) => (
                  <button
                    key={label}
                    className="chat-action rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left text-[13px] text-slate-100 transition hover:border-[#fb471a] hover:bg-[#fb471a]/10"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-b-3xl border-t border-white/10 bg-slate-900/95 px-4 py-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-2">
                <input
                  type="text"
                  placeholder="Ask me anything about Chrestine..."
                  className="w-full bg-transparent text-xs text-slate-100 outline-none placeholder:text-slate-500"
                />
                <button className="rounded-full bg-[#fb471a] p-2 text-white shadow-lg shadow-[#fb471a]/20">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
