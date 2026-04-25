"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    icon: "⚡",
    jp: "ショートフォーム専用",
    ko: "숏폼 전용",
    desc: "5분 안에 끝나는 한 화. 출퇴근길, 쉬는 시간. 언제든 가볍게 몰입하세요.",
    accent: "from-[#FF4D8D] to-[#F59E0B]",
  },
  {
    icon: "✨",
    jp: "AIレコメンド",
    ko: "AI 추천",
    desc: "당신의 취향을 학습하는 AI 큐레이터. 다음 에피소드는 언제나 당신의 것.",
    accent: "from-[#6366F1] to-[#8B5CF6]",
  },
  {
    icon: "🌐",
    jp: "すべてのデバイスで",
    ko: "크로스 디바이스",
    desc: "모바일·태블릿·TV·비전프로까지. 한 번 로그인하면 어디서든 이어보기.",
    accent: "from-[#06B6D4] to-[#10B981]",
  },
];

export default function Features() {
  return (
    <section id="why" className="relative py-28 overflow-hidden">
      <div className="absolute top-[10%] right-[3%] text-[20vw] leading-none kanji-deco">特</div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
            Why Anirift · 特徴
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">
            <span className="gradient-text">새로운 방식으로</span>
            <br />
            <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>アニメを楽しむ</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            긴 호흡이 부담스러운 시대. Anirift는 짧고 강렬한 에피소드로 애니의 본질만 전합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.ko}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Accent glow */}
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${item.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
              />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-1.5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                {item.jp}
              </h3>
              <div className="text-sm text-white/50 mb-4 tracking-wider uppercase">{item.ko}</div>
              <p className="text-white/70 leading-relaxed text-sm">
                {item.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-white/50 group-hover:text-white transition-colors">
                詳しく見る
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
