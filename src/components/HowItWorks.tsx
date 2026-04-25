"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    titleJa: "登録",
    titleKo: "가입",
    desc: "1분이면 끝! SNS 계정으로 간편 가입",
    icon: "📝",
  },
  {
    num: "02",
    titleJa: "探索",
    titleKo: "탐색",
    desc: "AI가 추천하는 맞춤 애니메이션 발견",
    icon: "🔍",
  },
  {
    num: "03",
    titleJa: "視聴",
    titleKo: "시청",
    desc: "3분 숏폼으로 부담 없이 정주행 시작!",
    icon: "▶️",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          使い方
        </span>{" "}
        <span className="text-gray-400">/ How It Works</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="text-center flex-1 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <div
              className="text-5xl font-black mb-2"
              style={{ color: "#FF2D78", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {step.num}
            </div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {step.titleJa}
            </h3>
            <p className="text-sm text-gray-400 mb-1">{step.titleKo}</p>
            <p className="text-gray-300 text-sm">{step.desc}</p>

            {i < steps.length - 1 && (
              <div className="hidden md:block absolute -right-4 top-1/2 text-2xl text-[#8B5CF6]">
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
