"use client";

const FEATURED = [
  { ko: "벚꽃 밤의 칼날", en: "SAKURA NIGHT BLADE", ep: "EP.04 · NEW", tag: "액션", cls: "poster-7", textWhite: true },
  { ko: "별의 기억", en: "STAR MEMORIES", ep: "EP.03", tag: "드라마", cls: "poster-2", textWhite: false },
  { ko: "전뇌 서울 2089", en: "CYBER SEOUL", ep: "EP.07", tag: "SF", cls: "poster-3", textWhite: false },
  { ko: "심해의 고래", en: "DEEP SEA WHALE", ep: "EP.02", tag: "판타지", cls: "poster-4", textWhite: true },
  { ko: "꿈을 먹는 소녀", en: "DREAM EATER", ep: "EP.05", tag: "미스터리", cls: "poster-5", textWhite: true },
  { ko: "은하 분식집", en: "GALAXY SNACK", ep: "EP.09", tag: "코미디", cls: "poster-6", textWhite: false },
  { ko: "월광의 피아노", en: "MOONLIGHT PIANO", ep: "EP.01 · NEW", tag: "일상", cls: "poster-8", textWhite: false },
  { ko: "기계장치의 꽃", en: "MECHANICAL FLOWER", ep: "EP.06", tag: "메카", cls: "poster-1", textWhite: true },
];

export default function Featured() {
  return (
    <section id="featured" className="relative py-24 overflow-hidden bg-cream border-t-4 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="section-label mb-4">
            <span className="w-2 h-2 bg-gold" />
            FEATURED ANIME · 추천 작품
          </div>
          <h2 className="text-5xl sm:text-6xl tracking-tight font-han text-black">
            주목할 작품
          </h2>
          <p className="mt-2 text-navy font-do">큐레이터가 직접 고른 이번 주의 하이라이트</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-black font-bold">
          <button className="bg-white border-3 border-black border-2 px-3 py-2 hover:bg-gold font-black" aria-label="이전">←</button>
          <button className="bg-white border-3 border-black border-2 px-3 py-2 hover:bg-gold font-black" aria-label="다음">→</button>
          <a href="#" className="ml-2 hover:text-red font-han uppercase">더 보기 →</a>
        </div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar pb-6">
          <div className="flex gap-5 min-w-max">
            {FEATURED.map((item) => {
              const tx = item.textWhite ? "text-white" : "text-black";
              const bg = item.textWhite ? "bg-black text-white" : "bg-white text-black";
              return (
                <div
                  key={item.ko}
                  className="w-[220px] sm:w-[240px] shrink-0"
                >
                  <div className={`poster ${item.cls}`}>
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`text-[10px] font-han tracking-wider uppercase px-2 py-1 ${bg} border-2 border-black`}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <div className={`text-[10px] tracking-widest uppercase ${tx} mb-0.5 font-black bg-black/0 inline-block`}>
                        <span className={`${bg} px-1.5 py-0.5 inline-block`}>{item.ep}</span>
                      </div>
                      <div className={`${tx} font-han text-xl mt-1`}>
                        {item.ko}
                      </div>
                      <div className={`${tx} text-[10px] font-do tracking-wider`}>{item.en}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
