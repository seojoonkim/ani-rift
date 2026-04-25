"use client";

const ITEMS = [
  {
    icon: "⏱️",
    ko: "60초 1화",
    en: "60 SECONDS PER EP",
    desc: "출퇴근, 점심시간, 잠들기 전 — 짧고 강렬하게 한 화. 길어서 부담스러운 애니는 이제 그만.",
  },
  {
    icon: "📅",
    ko: "매일 새 회차",
    en: "NEW EVERY DAY",
    desc: "기다림 없이 매일 다음 화. 시즌제로 끝까지. 한 번 빠지면 멈출 수 없는 클리프행어.",
  },
  {
    icon: "📱",
    ko: "세로 화면 전용",
    en: "VERTICAL FIRST",
    desc: "스마트폰에 최적화된 세로 애니 경험. 한 손으로, 어디서든. 가로로 돌릴 필요 없음.",
  },
  {
    icon: "🎁",
    ko: "첫 화는 무조건 무료",
    en: "EP.1 ALWAYS FREE",
    desc: "코인 부담 없이 모든 시리즈 첫 화 무료 시청. 마음에 들면 그때부터 결제.",
  },
];

export default function Features() {
  return (
    <section id="why" className="relative py-24 overflow-hidden bg-mint border-b-4 border-black">
      <div className="absolute top-[10%] right-[3%] text-[20vw] leading-none kanji-deco-light">왜</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="section-label-light mb-4 font-[family-name:var(--font-anton)] tracking-wider">
            <span className="w-2 h-2 bg-red" />
            WHY ANI RIFT · 왜 ANI RIFT인가
          </div>
          <h2 className="text-5xl sm:text-6xl tracking-tight mb-3 text-black leading-tight font-han">
            왜 ANI RIFT인가
            <br />
            <span className="text-red font-[family-name:var(--font-archivo)] text-4xl sm:text-5xl tracking-tight">WHY ANI RIFT</span>
          </h2>
          <p className="text-black/85 max-w-2xl mx-auto font-do text-lg">
            긴 호흡이 부담스러운 시대. 1분 안에 끝나는 한 화로 애니의 본질만 전합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((item) => (
            <div
              key={item.ko}
              className="pop-card p-7 relative"
            >
              <div className="w-14 h-14 bg-red border-3 border-black border-2 flex items-center justify-center text-2xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl mb-1.5 text-black font-han leading-tight">
                {item.ko}
              </h3>
              <div className="text-xs text-red mb-3 tracking-wider uppercase font-[family-name:var(--font-anton)]">{item.en}</div>
              <p className="text-navy leading-relaxed text-sm font-do">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
