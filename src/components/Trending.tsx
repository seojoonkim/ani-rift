"use client";

export default function Trending() {
  return (
    <section id="popular" className="relative py-24 overflow-hidden bg-red border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="section-label-light mb-4 font-[family-name:var(--font-anton)] tracking-wider">
              <span className="w-2 h-2 bg-red" />
              WEEKLY HOT · 이번 주 핫한 작품
            </div>
            <h2 className="text-5xl sm:text-6xl tracking-tight text-white font-han">
              <span className="text-gold">이번 주</span>
              <span className="text-white mx-2">,</span>
              <span>핫한 작품</span>
            </h2>
            <p className="mt-2 text-white font-do text-lg">매일 새 회차 · 1분 1화 · 첫 화 무료</p>
          </div>
          <a href="#" className="text-sm text-white hover:text-gold font-[family-name:var(--font-anton)] uppercase tracking-wider">VIEW ALL →</a>
        </div>

        <div className="grid grid-cols-6 grid-rows-2 gap-4 auto-rows-fr">
          {/* Large featured */}
          <div className="col-span-6 md:col-span-4 row-span-2 relative cursor-pointer">
            <div className="pop-card p-0 overflow-hidden h-full min-h-[420px] relative">
              <div className="absolute inset-0 bg-navy" />

              <div className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-10">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1.5 bg-gold border-2 border-black text-[11px] font-[family-name:var(--font-anton)] tracking-wider text-black">
                    #1 WEEKLY HOT
                  </span>
                  <span className="px-3 py-1.5 bg-red border-2 border-black text-[11px] font-han tracking-wider text-white">
                    🔥 진행중 · 24/60화
                  </span>
                  <span className="px-3 py-1.5 bg-white border-2 border-black text-[11px] font-[family-name:var(--font-anton)] tracking-wider text-black">
                    ▶ EP.1 FREE
                  </span>
                </div>

                <div>
                  <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3 font-[family-name:var(--font-anton)]">SEASON 1 · EPISODE 24 · 60 SECONDS</div>
                  <h3 className="text-5xl sm:text-7xl mb-2 leading-[0.95] text-white font-han">
                    벚꽃 밤의 칼날
                  </h3>
                  <p className="text-white/90 text-sm mb-2 font-[family-name:var(--font-archivo)] tracking-wide">SAKURA NIGHT BLADE</p>
                  <p className="text-white text-lg mb-5 font-do">벚꽃 흩날리는 밤, 칼은 운명을 갈랐다. 60초 안에 펼쳐지는 검극.</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["사극", "액션", "드라마"].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white border-2 border-black text-xs text-black font-han">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="btn-primary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    1화 무료로 보기
                  </button>
                </div>
              </div>
            </div>
          </div>

          {[
            { ko: "별의 기억", en: "STAR MEMORIES", season: "30/30화 완결", cls: "poster-2", rank: "02", textWhite: false, status: "▶ EP.1 무료" },
            { ko: "전뇌 서울 2089", en: "CYBER SEOUL", season: "12/30화 진행중", cls: "poster-3", rank: "03", textWhite: false, status: "🔥 진행중" },
            { ko: "심해의 고래", en: "DEEP SEA WHALE", season: "8/24화 진행중", cls: "poster-4", rank: "04", textWhite: true, status: "🔥 진행중" },
            { ko: "꿈을 먹는 소녀", en: "DREAM EATER", season: "시즌1 · 40화", cls: "poster-5", rank: "05", textWhite: true, status: "▶ EP.1 무료" },
          ].map((item) => {
            const tx = item.textWhite ? "text-white" : "text-black";
            const bg = item.textWhite ? "bg-black text-white" : "bg-white text-black";
            return (
              <div
                key={item.ko}
                className="col-span-3 md:col-span-1 relative cursor-pointer"
              >
                <div className={`poster ${item.cls} h-full`}>
                  <div className="absolute top-2 right-2 z-10 text-2xl font-black leading-none font-display bg-white border-2 border-black px-2 py-0.5 text-black">
                    {item.rank}
                  </div>
                  <div className="absolute top-2 left-2 z-10">
                    <span className={`text-[8px] font-[family-name:var(--font-anton)] tracking-wider px-1.5 py-0.5 ${bg} border-2 border-black inline-block`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                    <div className={`text-[9px] tracking-widest uppercase mb-0.5 font-[family-name:var(--font-anton)] ${tx} inline-block`}>
                      <span className="bg-black text-white px-1.5 py-0.5 inline-block">{item.season}</span>
                    </div>
                    <div className={`${tx} text-base leading-tight font-han mt-1`}>
                      {item.ko}
                    </div>
                    <div className={`${tx} text-[9px] leading-tight font-[family-name:var(--font-anton)] tracking-wider`}>{item.en}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
