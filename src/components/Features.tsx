"use client";

const ITEMS = [
  {
    icon: "⚡",
    jp: "ショートフォーム専用",
    ko: "숏폼 전용",
    desc: "5분 안에 끝나는 한 화. 출퇴근길, 쉬는 시간. 언제든 가볍게 몰입하세요.",
  },
  {
    icon: "✨",
    jp: "AIレコメンド",
    ko: "AI 추천",
    desc: "당신의 취향을 학습하는 AI 큐레이터. 다음 에피소드는 언제나 당신의 것.",
  },
  {
    icon: "🌐",
    jp: "すべてのデバイスで",
    ko: "크로스 디바이스",
    desc: "모바일·태블릿·TV·비전프로까지. 한 번 로그인하면 어디서든 이어보기.",
  },
];

export default function Features() {
  return (
    <section id="why" className="relative py-24 overflow-hidden bg-mint border-b-4 border-black">
      <div className="absolute top-[10%] right-[3%] text-[20vw] leading-none kanji-deco-light">特</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="section-label-light mb-4">
            <span className="w-2 h-2 bg-red" />
            Why Anirift · 特徴
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-3 font-display text-black leading-tight">
            새로운 방식으로
            <br />
            <span className="font-reggae">アニメを楽しむ</span>
          </h2>
          <p className="text-black/85 max-w-2xl mx-auto font-bold">
            긴 호흡이 부담스러운 시대. Anirift는 짧고 강렬한 에피소드로 애니의 본질만 전합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <div
              key={item.ko}
              className="pop-card p-8 relative"
            >
              <div className="w-16 h-16 bg-red border-3 border-black border-2 flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl mb-1.5 font-reggae text-black font-black">
                {item.jp}
              </h3>
              <div className="text-sm text-red mb-4 tracking-wider uppercase font-black">{item.ko}</div>
              <p className="text-navy leading-relaxed text-sm font-bold">
                {item.desc}
              </p>

              <div className="mt-6 pt-4 border-t-3 border-black border-t-2 flex items-center gap-2 text-sm text-black font-black uppercase tracking-wider">
                詳しく見る
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
