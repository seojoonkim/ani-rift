"use client";

import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Free",
    jp: "無料",
    price: "₩0",
    period: "/月",
    desc: "일단 가볍게 시작",
    features: ["주 3편 무료 시청", "720p 화질", "광고 포함", "모바일 전용"],
    highlight: false,
  },
  {
    name: "Premium",
    jp: "プレミアム",
    price: "₩9,900",
    period: "/月",
    desc: "애니 팬을 위한 표준",
    features: ["무제한 시청", "1080p Full HD", "광고 없음", "모든 디바이스", "오프라인 저장"],
    highlight: true,
  },
  {
    name: "Premium+",
    jp: "プレミアム+",
    price: "₩14,900",
    period: "/月",
    desc: "진짜 오타쿠의 선택",
    features: ["무제한 시청", "4K HDR", "광고 없음", "모든 디바이스", "오프라인 저장", "신작 우선 공개", "한정 굿즈 할인"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="absolute top-[5%] left-[3%] text-[20vw] leading-none kanji-deco">料</div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />
            Pricing · 料金
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">
            <span className="gradient-text">シンプルな価格設定</span>
          </h2>
          <p className="text-white/60">심플한 가격. 복잡한 거 싫어하니까.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative ${plan.highlight ? "md:-translate-y-4" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#E63946] to-[#F4A261] text-xs font-bold tracking-widest shadow-[0_6px_20px_rgba(230,57,70,0.4)]">
                    人気 · POPULAR
                  </span>
                </div>
              )}

              <div
                className={`glass-card p-7 h-full flex flex-col relative overflow-hidden ${
                  plan.highlight ? "border-[#E63946]/40" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E63946]/10 via-transparent to-[#F4A261]/10 pointer-events-none" />
                )}

                <div className="relative">
                  <div className="mb-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-1">{plan.jp}</div>
                    <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
                    <p className="text-sm text-white/60">{plan.desc}</p>
                  </div>

                  <div className="mb-7 flex items-baseline gap-1">
                    <span className={`text-4xl font-black ${plan.highlight ? "gradient-text" : ""}`}>
                      {plan.price}
                    </span>
                    <span className="text-white/50 text-sm">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0 mt-0.5 text-[#2A9D8F]" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className={plan.highlight ? "btn-primary w-full justify-center" : "btn-glass w-full justify-center"}>
                    {plan.highlight ? "始める · Start Now" : "選ぶ · Choose"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/40 text-xs mt-10">
          언제든 해지 가능 · いつでもキャンセル可能 · VAT 포함
        </p>
      </div>
    </section>
  );
}
