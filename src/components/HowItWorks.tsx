"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    jp: "登録する",
    ko: "가입하기",
    desc: "30초면 끝. 이메일만 있으면 OK.",
  },
  {
    num: "02",
    jp: "好みを選ぶ",
    ko: "취향 선택",
    desc: "좋아하는 장르 몇 개만 체크. AI가 나머지를 책임집니다.",
  },
  {
    num: "03",
    jp: "楽しむ",
    ko: "즐기기",
    desc: "매일 쏟아지는 새 에피소드. 5분만 투자하세요.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
            How It Works · 使い方
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>3ステップで</span>
            <span className="gradient-text"> 始める</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-5">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[46px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              <div className="glass-card p-7 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-full glass flex items-center justify-center text-sm font-black relative z-10">
                    <span className="gradient-text">{step.num}</span>
                  </div>
                  <div className="text-3xl opacity-40">
                    {i === 0 ? "✍️" : i === 1 ? "💫" : "▶️"}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  {step.jp}
                </h3>
                <div className="text-sm text-white/50 uppercase tracking-wider mb-3">{step.ko}</div>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
