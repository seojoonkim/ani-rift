"use client";

const STEPS = [
  {
    num: "01",
    jp: "登録する",
    ko: "가입하기",
    desc: "30초면 끝. 이메일만 있으면 OK.",
    icon: "✍️",
  },
  {
    num: "02",
    jp: "好みを選ぶ",
    ko: "취향 선택",
    desc: "좋아하는 장르 몇 개만 체크. AI가 나머지를 책임집니다.",
    icon: "💫",
  },
  {
    num: "03",
    jp: "楽しむ",
    ko: "즐기기",
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
            How It Works · 使い方
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>3ステップで</span>
            <span className="text-gold font-display"> 始める</span>
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
                <h3 className="text-xl font-black mb-1 text-black" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  {step.jp}
                </h3>
                <div className="text-sm text-red uppercase tracking-wider mb-3 font-black">{step.ko}</div>
                <p className="text-navy text-sm leading-relaxed font-bold">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
