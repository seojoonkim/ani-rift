"use client";

const STEPS = [
  {
    num: "01",
    ko: "가입하기",
    en: "SIGN UP",
    desc: "30초면 끝. 이메일만 있으면 OK.",
    icon: "✍️",
  },
  {
    num: "02",
    ko: "취향 선택",
    en: "PICK TASTE",
    desc: "좋아하는 장르 몇 개만 체크. AI가 나머지를 책임집니다.",
    icon: "💫",
  },
  {
    num: "03",
    ko: "즐기기",
    en: "ENJOY",
    desc: "매일 쏟아지는 새 에피소드. 5분만 투자하세요.",
    icon: "▶️",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden bg-navy border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label-light mb-4">
            <span className="w-2 h-2 bg-gold" />
            HOW IT WORKS · 사용 방법
          </div>
          <h2 className="text-5xl sm:text-6xl tracking-tight text-white font-han">
            <span>3단계로</span>
            <span className="text-gold"> 시작</span>
          </h2>
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
                <h3 className="text-3xl mb-1 text-black font-han">
                  {step.ko}
                </h3>
                <div className="text-sm text-red uppercase tracking-wider mb-3 font-black">{step.en}</div>
                <p className="text-navy text-sm leading-relaxed font-do">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
