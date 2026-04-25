"use client";

import { motion } from "framer-motion";

const plans = [
  {
    nameJa: "フリー",
    nameKo: "Free",
    price: "₩0",
    period: "/월",
    color: "#39FF14",
    features: ["광고 포함 시청", "720p 화질", "하루 5편 제한", "기본 추천"],
    popular: false,
  },
  {
    nameJa: "ベーシック",
    nameKo: "Basic",
    price: "₩7,900",
    period: "/월",
    color: "#00D4FF",
    features: ["광고 없음", "1080p 화질", "무제한 시청", "AI 추천", "오프라인 10편"],
    popular: true,
  },
  {
    nameJa: "プレミアム",
    nameKo: "Premium",
    price: "₩14,900",
    period: "/월",
    color: "#FF2D78",
    features: [
      "광고 없음",
      "4K + HDR",
      "무제한 시청",
      "AI 추천 + 분석",
      "오프라인 무제한",
      "얼리 액세스",
      "굿즈 할인",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          料金プラン
        </span>{" "}
        <span className="text-gray-400">/ Pricing</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.nameJa}
            className={`anime-card rounded-xl p-6 relative ${
              plan.popular ? "ring-2" : ""
            }`}
            style={{
              borderColor: plan.popular ? plan.color : undefined,
              boxShadow: plan.popular
                ? `0 0 20px ${plan.color}33`
                : undefined,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            {plan.popular && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                style={{ background: plan.color, color: "#0a0a0f" }}
              >
                人気 / 인기
              </div>
            )}

            <h3
              className="text-2xl font-bold mb-1"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                color: plan.color,
              }}
            >
              {plan.nameJa}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{plan.nameKo}</p>

            <div className="mb-6">
              <span className="text-4xl font-black" style={{ color: plan.color }}>
                {plan.price}
              </span>
              <span className="text-gray-400 text-sm">{plan.period}</span>
            </div>

            <ul className="space-y-2 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="text-sm text-gray-300 flex items-center gap-2">
                  <span style={{ color: plan.color }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="w-full py-3 rounded-lg font-bold text-sm transition-all hover:opacity-80"
              style={{
                background: plan.popular ? plan.color : "transparent",
                color: plan.popular ? "#0a0a0f" : plan.color,
                border: plan.popular ? "none" : `1px solid ${plan.color}`,
              }}
            >
              始める / 시작하기
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
