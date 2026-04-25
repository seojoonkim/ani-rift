"use client";

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
    <section id="pricing" className="relative py-24 overflow-hidden bg-cream border-b-4 border-black">
      <div className="absolute top-[5%] left-[3%] text-[20vw] leading-none kanji-deco">料</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="section-label mb-4">
            <span className="w-2 h-2 bg-red" />
            Pricing · 料金
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-3 text-black font-display">
            シンプルな価格設定
          </h2>
          <p className="text-navy font-bold">심플한 가격. 복잡한 거 싫어하니까.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.highlight ? "md:-translate-y-4" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1.5 bg-red border-3 border-black border-2 text-xs font-black tracking-widest text-white">
                    人気 · POPULAR
                  </span>
                </div>
              )}

              <div
                className={`pop-card p-7 h-full flex flex-col relative ${
                  plan.highlight ? "border-red border-[5px]" : ""
                }`}
              >
                <div className="relative">
                  <div className="mb-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-red mb-1 font-black">{plan.jp}</div>
                    <h3 className="text-3xl font-black mb-1 text-black font-display">{plan.name}</h3>
                    <p className="text-sm text-navy font-bold">{plan.desc}</p>
                  </div>

                  <div className="mb-7 flex items-baseline gap-1">
                    <span className="text-5xl font-black text-black">
                      {plan.price}
                    </span>
                    <span className="text-navy text-sm font-bold">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-black font-bold">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="flex-shrink-0 mt-0.5 text-red" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className={plan.highlight ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}>
                    {plan.highlight ? "始める · Start Now" : "選ぶ · Choose"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-navy text-xs mt-10 font-bold">
          언제든 해지 가능 · いつでもキャンセル可能 · VAT 포함
        </p>
      </div>
    </section>
  );
}
