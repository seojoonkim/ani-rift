"use client";

import { motion } from "framer-motion";

export default function Trending() {
  return (
    <section id="popular" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="section-label mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D8D]" />
              Popular This Week · 今週の人気
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>今</span>
              <span className="text-white/60 mx-2">,</span>
              <span className="gradient-text">みんなが観てる</span>
            </h2>
            <p className="mt-2 text-white/60">지금 모두가 보고 있는 작품</p>
          </div>
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">全て見る →</a>
        </div>

        <div className="grid grid-cols-6 grid-rows-2 gap-4 auto-rows-fr">
          {/* Large featured */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-6 md:col-span-4 row-span-2 relative group cursor-pointer"
          >
            <div className="glass-card p-0 overflow-hidden h-full min-h-[420px] relative">
              <div className="absolute inset-0 poster-7" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 shimmer pointer-events-none opacity-30" />

              <div className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-10">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold tracking-wider text-white border border-white/20">
                    #1 TRENDING
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FF4D8D]/80 backdrop-blur-md text-[10px] font-bold tracking-wider text-white">
                    人気 · HOT
                  </span>
                </div>

                <div>
                  <div className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3">Episode 04 · 最新話</div>
                  <h3 className="text-4xl sm:text-6xl font-black mb-2 leading-[0.95]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    桜夜の刃
                  </h3>
                  <p className="text-white/70 text-lg mb-5">사쿠라 밤의 칼날 — 벚꽃 흩날리는 밤, 칼은 운명을 갈랐다.</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Action", "Historical", "Drama"].map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs text-white/80 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="btn-primary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    Watch Now · 視聴する
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {[
            { jp: "星の記憶", ko: "별의 기억", ep: "EP.03", cls: "poster-2", rank: "02" },
            { jp: "電脳東京2089", ko: "전뇌 도쿄 2089", ep: "EP.07", cls: "poster-3", rank: "03" },
            { jp: "深海のクジラ", ko: "심해의 고래", ep: "EP.02", cls: "poster-4", rank: "04" },
            { jp: "夢喰い少女", ko: "꿈을 먹는 소녀", ep: "EP.05", cls: "poster-5", rank: "05" },
          ].map((item, i) => (
            <motion.div
              key={item.jp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="col-span-3 md:col-span-1 relative group cursor-pointer"
            >
              <div className={`poster ${item.cls} poster-glow h-full`}>
                <div className="absolute top-2.5 right-2.5 z-10 text-3xl font-black text-white/90 leading-none"
                     style={{ WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}>
                  {item.rank}
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                  <div className="text-[9px] tracking-widest uppercase text-white/70 mb-0.5">{item.ep}</div>
                  <div className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {item.jp}
                  </div>
                  <div className="text-white/60 text-[10px] leading-tight">{item.ko}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
