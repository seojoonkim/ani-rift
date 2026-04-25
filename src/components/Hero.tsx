"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 bg-cream">
      {/* Kanji decoration */}
      <div className="absolute top-[8%] right-[3%] text-[22vw] leading-none kanji-deco select-none">
        次元
      </div>
      <div className="absolute bottom-[5%] left-[2%] text-[18vw] leading-none kanji-deco select-none">
        裂
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <div className="inline-flex mb-6">
            <span className="section-label">
              <span className="w-2 h-2 bg-red" />
              Now Streaming · 配信中
            </span>
          </div>

          <h1 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tight mb-4 font-display text-black">
            <span className="block">ANI</span>
            <span className="block">RIFT</span>
          </h1>

          <p className="text-lg sm:text-xl text-navy mb-3 font-reggae font-bold">
            次元を超えるアニメ体験。
          </p>

          <p className="text-base sm:text-lg text-black mb-10 max-w-xl mx-auto lg:mx-0 font-medium">
            차원을 넘는 애니 체험. 숏폼 애니메이션 전용 OTT,{" "}
            <span className="text-red font-black bg-black px-1.5 text-white">매주 새로운 에피소드</span>가 당신을 기다립니다.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <button className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Start Watching · 今すぐ始める
            </button>
            <button className="btn-secondary">
              Explore · 作品を見る
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start text-sm text-black font-bold">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-red border-2 border-black" />
                <div className="w-8 h-8 rounded-full bg-mint border-2 border-black" />
                <div className="w-8 h-8 rounded-full bg-gold border-2 border-black" />
              </div>
              <span>
                <span className="font-black">120K+</span> watching now
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="text-red text-lg">★</span>
              <span><span className="font-black">4.9</span> · 評価</span>
            </div>
          </div>
        </div>

        {/* Right: flat pop-art posters */}
        <div className="relative h-[520px] lg:h-[600px] hidden md:block">
          <div className="absolute left-[2%] top-[12%] w-[42%]">
            <div className="poster poster-2">
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                <span className="text-[10px] tracking-widest text-black uppercase mb-1 font-black bg-white px-1.5 py-0.5 self-start">Episode 03</span>
                <span className="text-black font-black text-base font-reggae mt-2">星の記憶</span>
                <span className="text-black text-xs font-bold">별의 기억</span>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[4%] -translate-x-1/2 w-[48%] z-20">
            <div className="poster poster-7">
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-black px-2 py-1 bg-black text-white border-2 border-black">NEW · 新作</span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                <span className="text-[10px] tracking-widest text-white uppercase mb-1 font-black bg-black px-1.5 py-0.5 self-start">Featured</span>
                <span className="text-white text-xl font-reggae mt-2">桜夜の刃</span>
                <span className="text-white text-xs font-bold">사쿠라 밤의 칼날</span>
              </div>
            </div>
          </div>

          <div className="absolute right-[2%] top-[18%] w-[42%]">
            <div className="poster poster-3">
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                <span className="text-[10px] tracking-widest text-black uppercase mb-1 font-black bg-black text-white px-1.5 py-0.5 self-start">Episode 07</span>
                <span className="text-black font-black text-base font-reggae mt-2">電脳東京2089</span>
                <span className="text-black text-xs font-bold">전뇌 도쿄 2089</span>
              </div>
            </div>
          </div>

          {/* Flat info card */}
          <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 bg-white border-4 border-black px-5 py-3 flex items-center gap-3 whitespace-nowrap">
            <div className="w-9 h-9 bg-red border-2 border-black flex items-center justify-center text-sm font-black text-white">
              ▶
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-black font-black">Playing Next</div>
              <div className="text-sm font-black font-reggae text-black">桜夜の刃 — EP.04</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-black text-[11px] tracking-[0.3em] uppercase flex flex-col items-center gap-2 font-black">
        <span>Scroll</span>
        <div className="w-1 h-8 bg-black" />
      </div>
    </section>
  );
}
