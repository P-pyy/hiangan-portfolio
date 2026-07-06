"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function LightPullThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <div className="fixed top-4 right-1 z-50 flex justify-end px-4 sm:px-0 sm:right-8">
      <div className="flex flex-col items-center gap-2 text-xs sm:text-sm text-foreground font-medium select-none">
        <div className="p-6">
          <motion.div
            drag="y"
            dragDirectionLock
            onDragEnd={(event, info) => {
              if (info.offset.y > 0) {
                toggleDarkMode()
              }
            }}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
            dragElastic={0.075}
            whileDrag={{ cursor: "grabbing" }}
            className="relative bottom-0 w-8 h-8 rounded-full cursor-grab
              bg-[radial-gradient(circle_at_center,var(--primary),var(--primary-foreground),var(--ring))]
              shadow-[0_0_20px_8px_var(--ring)]"
          >
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-[9999px] bg-[var(--secondary-foreground)]" />
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <div className="relative bottom-5 flex flex-col items-center text-center leading-tight tracking-tight">
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            {/* Pull down to change theme */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
