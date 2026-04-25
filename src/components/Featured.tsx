"use client";

const FEATURED = [
  { jp: "桜夜の刃", ko: "사쿠라 밤의 칼날", ep: "EP.04 · NEW", tag: "Action", cls: "poster-7", textWhite: true },
  { jp: "星の記憶", ko: "별의 기억", ep: "EP.03", tag: "Drama", cls: "poster-2", textWhite: false },
  { jp: "電脳東京2089", ko: "전뇌 도쿄 2089", ep: "EP.07", tag: "Sci-Fi", cls: "poster-3", textWhite: false },
  { jp: "深海のクジラ", ko: "심해의 고래", ep: "EP.02", tag: "Fantasy", cls: "poster-4", textWhite: true },
  { jp: "夢喰い少女", ko: "꿈을 먹는 소녀", ep: "EP.05", tag: "Mystery", cls: "poster-5", textWhite: true },
  { jp: "銀河のカレー屋", ko: "은하 카레집", ep: "EP.09", tag: "Comedy", cls: "poster-6", textWhite: false },
  { jp: "月光のピアノ", ko: "월광의 피아노", ep: "EP.01 · NEW", tag: "Slice", cls: "poster-8", textWhite: false },
  { jp: "機械仕掛けの花", ko: "기계장치의 꽃", ep: "EP.06", tag: "Mecha", cls: "poster-1", textWhite: true },
];

export default function Featured() {
  return (
    <section id="featured" className="relative py-24 overflow-hidden bg-cream border-t-4 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="section-label mb-4">
            <span className="w-2 h-2 bg-gold" />
            Featured Anime · 注目作品
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight font-reggae text-black">
            注目の作品
          </h2>
          <p className="mt-2 text-navy font-bold">큐레이션이 직접 고른 이번 주의 하이라이트</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-black font-bold">
          <button className="bg-white border-3 border-black border-2 px-3 py-2 hover:bg-gold font-black" aria-label="Previous">←</button>
          <button className="bg-white border-3 border-black border-2 px-3 py-2 hover:bg-gold font-black" aria-label="Next">→</button>
          <a href="#" className="ml-2 hover:text-red font-black uppercase">もっと見る →</a>
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
                  key={item.jp}
                  className="w-[220px] sm:w-[240px] shrink-0"
                >
                  <div className={`poster ${item.cls}`}>
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`text-[10px] font-black tracking-wider uppercase px-2 py-1 ${bg} border-2 border-black`}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <div className={`text-[10px] tracking-widest uppercase ${tx} mb-0.5 font-black bg-black/0 inline-block`}>
                        <span className={`${bg} px-1.5 py-0.5 inline-block`}>{item.ep}</span>
                      </div>
                      <div className={`${tx} font-reggae text-lg mt-1`}>
                        {item.jp}
                      </div>
                      <div className={`${tx} text-xs font-bold`}>{item.ko}</div>
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
