"use client";

const FEATURED = [
  { ko: "벚꽃 밤의 칼날", en: "SAKURA NIGHT BLADE", season: "시즌1 · 60화", tag: "사극·액션", cls: "poster-7", textWhite: true },
  { ko: "별의 기억", en: "STAR MEMORIES", season: "시즌1 · 30화", tag: "드라마", cls: "poster-2", textWhite: false },
  { ko: "전뇌 서울 2089", en: "CYBER SEOUL", season: "12/30화 진행중", tag: "SF·사이버펑크", cls: "poster-3", textWhite: false },
  { ko: "심해의 고래", en: "DEEP SEA WHALE", season: "시즌1 · 24화", tag: "판타지", cls: "poster-4", textWhite: true },
  { ko: "꿈을 먹는 소녀", en: "DREAM EATER", season: "시즌1 · 40화", tag: "미스터리", cls: "poster-5", textWhite: true },
  { ko: "은하 분식집", en: "GALAXY SNACK", season: "시즌2 · 50화", tag: "코미디", cls: "poster-6", textWhite: false },
  { ko: "월광의 피아노", en: "MOONLIGHT PIANO", season: "시즌1 · 18화", tag: "일상·로맨스", cls: "poster-8", textWhite: false },
  { ko: "기계장치의 꽃", en: "MECHANICAL FLOWER", season: "시즌1 · 36화", tag: "메카·SF", cls: "poster-1", textWhite: true },
];

export default function Featured() {
  return (
    <section id="featured" className="relative py-24 overflow-hidden bg-cream border-t-4 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="section-label mb-4 font-[family-name:var(--font-anton)] tracking-wider">
            <span className="w-2 h-2 bg-gold" />
            TRENDING NOW · 인기 시리즈
          </div>
          <h2 className="text-5xl sm:text-6xl tracking-tight font-han text-black">
            지금 보는 사람 많은 시리즈
          </h2>
          <p className="mt-2 text-navy font-do">매일 새 회차 업로드. 첫 화는 모두 무료.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-black font-bold">
          <button className="bg-white border-3 border-black border-2 px-3 py-2 hover:bg-gold font-black" aria-label="이전">←</button>
          <button className="bg-white border-3 border-black border-2 px-3 py-2 hover:bg-gold font-black" aria-label="다음">→</button>
          <a href="#" className="ml-2 hover:text-red font-[family-name:var(--font-anton)] uppercase tracking-wider">VIEW ALL →</a>
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
                  className="w-[200px] sm:w-[220px] shrink-0"
                >
                  <div className={`poster ${item.cls}`} style={{ aspectRatio: "9/16" }}>
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`text-[10px] font-[family-name:var(--font-anton)] tracking-wider uppercase px-2 py-1 ${bg} border-2 border-black`}>
                        ▶ EP.1 무료
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`text-[10px] font-han px-2 py-1 ${bg} border-2 border-black`}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <div className={`text-[10px] tracking-widest uppercase ${tx} mb-0.5 font-[family-name:var(--font-anton)] inline-block`}>
                        <span className={`${bg} px-1.5 py-0.5 inline-block`}>{item.season}</span>
                      </div>
                      <div className={`${tx} font-han text-xl mt-1`}>
                        {item.ko}
                      </div>
                      <div className={`${tx} text-[10px] font-[family-name:var(--font-anton)] tracking-wider`}>{item.en}</div>
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
