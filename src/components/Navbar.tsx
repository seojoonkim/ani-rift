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
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E63946] to-[#F4A261] flex items-center justify-center text-base font-black text-[#FFF8F0] font-display">
            A
          </span>
          <span className="font-display tracking-tight text-[18px] text-[#FFF8F0]">
            Anirift
          </span>
          <span className="hidden sm:inline text-[11px] text-[#F4A261]/70 font-reggae ml-1">アニリフト</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm text-[#FFF8F0]/75 font-reggae">
          <a href="#featured" className="hover:text-[#F4A261] transition-colors">作品</a>
          <a href="#why" className="hover:text-[#F4A261] transition-colors">特徴</a>
          <a href="#popular" className="hover:text-[#F4A261] transition-colors">人気</a>
          <a href="#pricing" className="hover:text-[#F4A261] transition-colors">料金</a>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex text-sm text-[#FFF8F0]/75 hover:text-[#F4A261] px-3 py-1.5 transition-colors">
            Login
          </button>
          <button className="text-sm font-bold text-[#FFF8F0] bg-gradient-to-r from-[#E63946] to-[#C1121F] px-4 py-1.5 rounded-full shadow-[0_4px_16px_rgba(230,57,70,0.4)] hover:shadow-[0_6px_24px_rgba(244,162,97,0.55)] hover:from-[#F4A261] hover:to-[#E63946] transition-all">
            Start
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
