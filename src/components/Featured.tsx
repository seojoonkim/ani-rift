"use client";

import { motion } from "framer-motion";

const FEATURED = [
  { jp: "桜夜の刃", ko: "사쿠라 밤의 칼날", ep: "EP.04 · NEW", tag: "Action", cls: "poster-7" },
  { jp: "星の記憶", ko: "별의 기억", ep: "EP.03", tag: "Drama", cls: "poster-2" },
  { jp: "電脳東京2089", ko: "전뇌 도쿄 2089", ep: "EP.07", tag: "Sci-Fi", cls: "poster-3" },
  { jp: "深海のクジラ", ko: "심해의 고래", ep: "EP.02", tag: "Fantasy", cls: "poster-4" },
  { jp: "夢喰い少女", ko: "꿈을 먹는 소녀", ep: "EP.05", tag: "Mystery", cls: "poster-5" },
  { jp: "銀河のカレー屋", ko: "은하 카레집", ep: "EP.09", tag: "Comedy", cls: "poster-6" },
  { jp: "月光のピアノ", ko: "월광의 피아노", ep: "EP.01 · NEW", tag: "Slice", cls: "poster-8" },
  { jp: "機械仕掛けの花", ko: "기계장치의 꽃", ep: "EP.06", tag: "Mecha", cls: "poster-1" },
];

export default function Featured() {
  return (
    <section id="featured" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="section-label mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
            Featured Anime · 注目作品
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>注目の作品</span>
          </h2>
          <p className="mt-2 text-white/60">큐레이션이 직접 고른 이번 주의 하이라이트</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/60">
          <button className="glass px-3 py-2 hover:text-white transition-colors" aria-label="Previous">←</button>
          <button className="glass px-3 py-2 hover:text-white transition-colors" aria-label="Next">→</button>
          <a href="#" className="ml-2 hover:text-white transition-colors">もっと見る →</a>
        </div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar pb-6">
          <div className="flex gap-5 min-w-max">
            {FEATURED.map((item, i) => (
              <motion.div
                key={item.jp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="w-[220px] sm:w-[240px] shrink-0"
              >
                <div className={`poster ${item.cls} poster-glow tilt`}>
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/10">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="text-[10px] tracking-widest uppercase text-white/70 mb-0.5">{item.ep}</div>
                    <div className="text-white font-bold" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                      {item.jp}
                    </div>
                    <div className="text-white/60 text-xs">{item.ko}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a14] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a14] to-transparent" />
      </div>
    </section>
  );
}
