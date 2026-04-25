"use client";

const PLANS = [
  {
    name: "FREE",
    ko: "무료",
    price: "₩0",
    period: "/시작가",
    desc: "일단 가볍게 맛보기",
    features: [
      "모든 시리즈 1화 무료",
      "광고 시청 시 추가 화 해제",
      "표준 화질 (HD)",
      "모바일 전용",
    ],
    highlight: false,
    cta: "무료로 시작",
  },
  {
    name: "COINS",
    ko: "코인 충전",
    price: "₩1,100",
    period: "= 100 코인",
    desc: "충전한 만큼 본다",
    features: [
      "1화 = 10코인",
      "광고 없음",
      "풀 HD 화질",
      "모든 디바이스",
      "원하는 작품만 골라보기",
    ],
    highlight: true,
    cta: "코인 충전하기",
  },
  {
    name: "UNLIMITED",
    ko: "무제한 멤버십",
    price: "₩14,900",
    period: "/월",
    desc: "헤비 시청자 추천",
    features: [
      "모든 작품 무제한 시청",
      "신작 우선 시청 (24시간 먼저)",
      "풀 HD + 다운로드",
      "광고 없음",
      "모든 디바이스",
      "독점 콘텐츠 액세스",
    ],
    highlight: false,
    cta: "멤버십 가입",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-cream border-b-4 border-black">
      <div className="absolute top-[5%] left-[3%] text-[20vw] leading-none kanji-deco">요</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="section-label mb-4 font-[family-name:var(--font-anton)] tracking-wider">
            <span className="w-2 h-2 bg-red" />
            PRICING · 요금
          </div>
          <h2 className="text-5xl sm:text-6xl tracking-tight mb-3 text-black font-han">
            요금
          </h2>
          <p className="text-navy font-[family-name:var(--font-archivo)] tracking-wide text-sm mb-2">PRICING</p>
          <p className="text-navy font-do text-lg">무료로 시작 · 충전한 만큼 시청 · 또는 무제한.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.highlight ? "md:-translate-y-4" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1.5 bg-red border-3 border-black border-2 text-xs font-han tracking-widest text-white">
                    인기 · POPULAR
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
                    <div className="text-xs uppercase tracking-[0.3em] text-red mb-1 font-[family-name:var(--font-anton)]">{plan.ko}</div>
                    <h3 className="text-4xl mb-1 text-black font-[family-name:var(--font-archivo)] tracking-tight">{plan.name}</h3>
                    <p className="text-sm text-navy font-do">{plan.desc}</p>
                  </div>

                  <div className="mb-7 flex items-baseline gap-1">
                    <span className="text-5xl font-han text-black">
                      {plan.price}
                    </span>
                    <span className="text-navy text-sm font-do">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-black font-do">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="flex-shrink-0 mt-0.5 text-red" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className={plan.highlight ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-navy text-xs mt-10 font-do">
          코인은 사용 기한 없음 · 멤버십은 언제든 해지 가능 · VAT 포함
        </p>
      </div>
    </section>
  );
}
