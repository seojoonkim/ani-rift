"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Kanji decoration */}
      <div className="absolute top-[8%] right-[3%] text-[22vw] leading-none kanji-deco select-none">
        次元
      </div>
      <div className="absolute bottom-[5%] left-[2%] text-[18vw] leading-none kanji-deco select-none">
        裂
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex mb-6"
          >
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D8D] animate-pulse" />
              Now Streaming · 配信中
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] font-black tracking-tight mb-4"
          >
            <span className="block gradient-text">ANI</span>
            <span className="block gradient-text">RIFT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg sm:text-xl text-white/80 mb-3 font-light"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            次元を超えるアニメ体験。
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-white/60 mb-10 max-w-xl mx-auto lg:mx-0"
          >
            차원을 넘는 애니 체험. 숏폼 애니메이션 전용 OTT,{" "}
            <span className="text-white">매주 새로운 에피소드</span>가 당신을 기다립니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <button className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Start Watching · 今すぐ始める
            </button>
            <button className="btn-glass">
              Explore · 作品を見る
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 justify-center lg:justify-start text-sm text-white/50"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FF4D8D] to-[#6366F1] border-2 border-[#0a0a14]" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6366F1] to-[#06B6D4] border-2 border-[#0a0a14]" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] border-2 border-[#0a0a14]" />
              </div>
              <span>
                <span className="text-white font-semibold">120K+</span> watching now
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="text-[#FF4D8D]">★</span>
              <span><span className="text-white font-semibold">4.9</span> · 評価</span>
            </div>
          </motion.div>
        </div>

        {/* Right: floating glass posters */}
        <div className="relative h-[520px] lg:h-[600px] hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute left-[2%] top-[12%] w-[42%] float-1"
          >
            <div className="poster poster-2 poster-glow">
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                <span className="text-[10px] tracking-widest text-white/80 uppercase mb-1">Episode 03</span>
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>星の記憶</span>
                <span className="text-white/60 text-xs">별의 기억</span>
              </div>
              <div className="absolute inset-0 shimmer pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="absolute left-1/2 top-[4%] -translate-x-1/2 w-[48%] z-20 float-2"
          >
            <div className="poster poster-7 poster-glow">
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white">NEW · 新作</span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                <span className="text-[10px] tracking-widest text-white/80 uppercase mb-1">Featured</span>
                <span className="text-white font-black text-lg" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>桜夜の刃</span>
                <span className="text-white/70 text-xs">사쿠라 밤의 칼날</span>
              </div>
              <div className="absolute inset-0 shimmer pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="absolute right-[2%] top-[18%] w-[42%] float-3"
          >
            <div className="poster poster-3 poster-glow">
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                <span className="text-[10px] tracking-widest text-white/80 uppercase mb-1">Episode 07</span>
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>電脳東京2089</span>
                <span className="text-white/60 text-xs">전뇌 도쿄 2089</span>
              </div>
              <div className="absolute inset-0 shimmer pointer-events-none" />
            </div>
          </motion.div>

          {/* Glass info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="absolute bottom-[2%] left-1/2 -translate-x-1/2 glass-strong px-5 py-3 flex items-center gap-3 whitespace-nowrap"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4D8D] to-[#6366F1] flex items-center justify-center text-xs font-black">
              ▶
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-white/50">Playing Next</div>
              <div className="text-sm font-semibold">桜夜の刃 — EP.04</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[11px] tracking-[0.3em] uppercase flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
