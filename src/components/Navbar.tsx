"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[min(92%,880px)]"
    >
      <div className="glass-nav flex items-center justify-between px-5 py-2.5">
        <a href="#" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF4D8D] via-[#6366F1] to-[#06B6D4] flex items-center justify-center text-sm font-black">
            A
          </span>
          <span className="font-bold tracking-tight text-[15px]">
            Anirift
          </span>
          <span className="hidden sm:inline text-[11px] text-white/50 font-jp ml-1">アニリフト</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#featured" className="hover:text-white transition-colors">作品</a>
          <a href="#why" className="hover:text-white transition-colors">特徴</a>
          <a href="#popular" className="hover:text-white transition-colors">人気</a>
          <a href="#pricing" className="hover:text-white transition-colors">料金</a>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex text-sm text-white/70 hover:text-white px-3 py-1.5 transition-colors">
            Login
          </button>
          <button className="text-sm font-semibold text-white bg-gradient-to-r from-[#FF4D8D] to-[#6366F1] px-4 py-1.5 rounded-full shadow-[0_4px_16px_rgba(255,77,141,0.3)] hover:shadow-[0_6px_24px_rgba(255,77,141,0.5)] transition-shadow">
            Start
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
