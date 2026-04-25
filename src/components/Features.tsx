"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    titleJa: "ショートフォーム",
    titleKo: "숏폼 연재",
    desc: "3~5분 에피소드로 언제 어디서나 가볍게",
    color: "#FF2D78",
  },
  {
    icon: "📱",
    titleJa: "オフライン",
    titleKo: "오프라인 다운로드",
    desc: "지하철에서도, 비행기에서도 OK",
    color: "#00D4FF",
  },
  {
    icon: "🤖",
    titleJa: "AI推薦",
    titleKo: "AI 추천",
    desc: "당신의 취향을 학습하는 스마트 큐레이션",
    color: "#8B5CF6",
  },
  {
    icon: "🌍",
    titleJa: "グローバル",
    titleKo: "글로벌 동시 방영",
    desc: "일본 본방과 동시에, 자막은 자동으로",
    color: "#39FF14",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function Features() {
  return (
    <section className="relative py-24 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          特徴
        </span>{" "}
        <span className="text-gray-400">/ Features</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((f, i) => (
          <motion.div
            key={f.titleJa}
            className="anime-card rounded-xl p-6 relative overflow-hidden"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{ background: f.color }}
            />
            <span className="text-4xl mb-4 block">{f.icon}</span>
            <h3
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", color: f.color }}
            >
              {f.titleJa}
            </h3>
            <p className="text-sm text-gray-400 mb-2">{f.titleKo}</p>
            <p className="text-gray-300 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
