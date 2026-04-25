"use client";

const STEPS = [
  {
    num: "01",
    ko: "무료 가입",
    en: "SIGN UP",
    desc: "이메일 한 번이면 끝. 30초도 안 걸려요.",
    icon: "✍️",
  },
  {
    num: "02",
    ko: "시리즈 골라 첫 화 시청",
    en: "PICK & PLAY",
    desc: "모든 시리즈 1화는 무료. 마음에 드는 작품을 찾을 때까지 부담 없이.",
    icon: "▶️",
  },
  {
    num: "03",
    ko: "코인으로 다음 화",
    en: "UNLOCK NEXT",
    desc: "코인 충전 또는 멤버십으로 무제한. 매일 새 회차가 기다립니다.",
    icon: "🪙",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden bg-navy border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label-light mb-4 font-[family-name:var(--font-anton)] tracking-wider">
            <span className="w-2 h-2 bg-gold" />
            HOW IT WORKS · 어떻게 시작하나요
          </div>
          <h2 className="text-5xl sm:text-6xl tracking-tight text-white font-han">
            <span>3단계로</span>
            <span className="text-gold"> 시작</span>
          </h2>
          <p className="mt-3 text-white/85 font-[family-name:var(--font-archivo)] tracking-wide text-sm">START IN 3 STEPS</p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div key={step.num} className="relative">
              <div className="pop-card p-7 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-gold border-3 border-black border-2 flex items-center justify-center text-base font-black">
                    <span className="text-black font-display">{step.num}</span>
                  </div>
                  <div className="text-4xl">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl mb-1 text-black font-han leading-tight">
                  {step.ko}
                </h3>
                <div className="text-sm text-red uppercase tracking-wider mb-3 font-[family-name:var(--font-anton)]">{step.en}</div>
                <p className="text-navy text-sm leading-relaxed font-do">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
