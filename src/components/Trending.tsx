"use client";

export default function Trending() {
  return (
    <section id="popular" className="relative py-24 overflow-hidden bg-red border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="section-label-light mb-4">
              <span className="w-2 h-2 bg-red" />
              Popular This Week · 今週の人気
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>今</span>
              <span className="text-white mx-2">,</span>
              <span className="font-display">みんなが観てる</span>
            </h2>
            <p className="mt-2 text-white font-bold">지금 모두가 보고 있는 작품</p>
          </div>
          <a href="#" className="text-sm text-white hover:text-gold font-black uppercase tracking-wider">全て見る →</a>
        </div>

        <div className="grid grid-cols-6 grid-rows-2 gap-4 auto-rows-fr">
          {/* Large featured */}
          <div className="col-span-6 md:col-span-4 row-span-2 relative cursor-pointer">
            <div className="pop-card p-0 overflow-hidden h-full min-h-[420px] relative">
              <div className="absolute inset-0 bg-navy" />

              <div className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 bg-gold border-2 border-black text-[11px] font-black tracking-wider text-black">
                    #1 TRENDING
                  </span>
                  <span className="px-3 py-1.5 bg-red border-2 border-black text-[11px] font-black tracking-wider text-white">
                    人気 · HOT
                  </span>
                </div>

                <div>
                  <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3 font-black">Episode 04 · 最新話</div>
                  <h3 className="text-4xl sm:text-6xl mb-2 leading-[0.95] font-reggae text-white">
                    桜夜の刃
                  </h3>
                  <p className="text-white text-lg mb-5 font-bold">사쿠라 밤의 칼날 — 벚꽃 흩날리는 밤, 칼은 운명을 갈랐다.</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Action", "Historical", "Drama"].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white border-2 border-black text-xs text-black font-black">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="btn-primary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    Watch Now · 視聴する
                  </button>
                </div>
              </div>
            </div>
          </div>

          {[
            { jp: "星の記憶", ko: "별의 기억", ep: "EP.03", cls: "poster-2", rank: "02", textWhite: false },
            { jp: "電脳東京2089", ko: "전뇌 도쿄 2089", ep: "EP.07", cls: "poster-3", rank: "03", textWhite: false },
            { jp: "深海のクジラ", ko: "심해의 고래", ep: "EP.02", cls: "poster-4", rank: "04", textWhite: true },
            { jp: "夢喰い少女", ko: "꿈을 먹는 소녀", ep: "EP.05", cls: "poster-5", rank: "05", textWhite: true },
          ].map((item) => {
            const tx = item.textWhite ? "text-white" : "text-black";
            return (
              <div
                key={item.jp}
                className="col-span-3 md:col-span-1 relative cursor-pointer"
              >
                <div className={`poster ${item.cls} h-full`}>
                  <div className="absolute top-2 right-2 z-10 text-3xl font-black leading-none font-display bg-white border-2 border-black px-2 py-0.5 text-black">
                    {item.rank}
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                    <div className={`text-[9px] tracking-widest uppercase mb-0.5 font-black ${tx} inline-block`}>
                      <span className="bg-black text-white px-1.5 py-0.5 inline-block">{item.ep}</span>
                    </div>
                    <div className={`${tx} text-sm leading-tight font-reggae mt-1`}>
                      {item.jp}
                    </div>
                    <div className={`${tx} text-[10px] leading-tight font-bold`}>{item.ko}</div>
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
