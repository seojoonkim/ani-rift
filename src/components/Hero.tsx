"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 bg-cream">
      {/* Korean decoration */}
      <div className="absolute top-[8%] right-[3%] text-[22vw] leading-none kanji-deco select-none">
        숏폼
      </div>
      <div className="absolute bottom-[5%] left-[2%] text-[18vw] leading-none kanji-deco select-none">
        1분
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <div className="inline-flex mb-6">
            <span className="section-label font-[family-name:var(--font-anton)] tracking-wider">
              <span className="w-2 h-2 bg-red" />
              SHORTS · ANIME · 60 SECONDS
            </span>
          </div>

          <h1 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tight mb-4 font-display text-black">
            <span className="block">ANI</span>
            <span className="block">RIFT</span>
          </h1>

          <p className="text-2xl sm:text-3xl text-navy mb-3 font-han">
            1분 안에 빠져드는 숏폼 애니.
          </p>

          <p className="text-base sm:text-lg text-black mb-10 max-w-xl mx-auto lg:mx-0 font-do">
            매일 새 회차 업로드. 세로 화면, 1분 1화.{" "}
            <span className="text-red font-han bg-black px-1.5 text-white">출퇴근길 1편씩</span> 보는 새로운 애니 습관.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <button className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              첫 화 무료로 보기
            </button>
            <button className="btn-secondary">
              이번 주 트렌드
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start text-sm text-black font-do">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-red border-2 border-black" />
                <div className="w-8 h-8 rounded-full bg-mint border-2 border-black" />
                <div className="w-8 h-8 rounded-full bg-gold border-2 border-black" />
              </div>
              <span className="font-[family-name:var(--font-anton)] tracking-wider uppercase">
                <span className="font-han">📱 SHORTS</span> · 60 SEC PER EP · NEW DAILY
              </span>
            </div>
          </div>
        </div>

        {/* Right: flat pop-art posters - vertical phone style */}
        <div className="relative h-[520px] lg:h-[600px] hidden md:block">
          <div className="absolute left-[2%] top-[12%] w-[38%]">
            <div className="poster poster-2" style={{ aspectRatio: "9/16" }}>
              <div className="absolute top-2 left-2 z-10">
                <span className="text-[9px] font-[family-name:var(--font-anton)] tracking-wider px-1.5 py-0.5 bg-white text-black border-2 border-black">▶ EP.1 FREE</span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-3 z-10">
                <span className="text-[9px] tracking-widest text-black uppercase mb-1 font-[family-name:var(--font-anton)] bg-white px-1.5 py-0.5 self-start">SEASON 1 · 30화</span>
                <span className="text-black text-base font-han mt-1.5">별의 기억</span>
                <span className="text-black text-[10px] font-[family-name:var(--font-anton)] tracking-wider">DRAMA</span>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[2%] -translate-x-1/2 w-[44%] z-20">
            <div className="poster poster-7" style={{ aspectRatio: "9/16" }}>
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-[family-name:var(--font-anton)] px-2 py-1 bg-black text-white border-2 border-black tracking-wider">NEW · 매일 업로드</span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                <span className="text-[10px] tracking-widest text-white uppercase mb-1 font-[family-name:var(--font-archivo)] bg-black px-1.5 py-0.5 self-start">TRENDING #1</span>
                <span className="text-white text-2xl font-han mt-2">벚꽃 밤의 칼날</span>
                <span className="text-white text-[10px] font-[family-name:var(--font-anton)] tracking-wider">시즌1 · 60화 · 사극·액션</span>
              </div>
            </div>
          </div>

          <div className="absolute right-[2%] top-[18%] w-[38%]">
            <div className="poster poster-3" style={{ aspectRatio: "9/16" }}>
              <div className="absolute top-2 left-2 z-10">
                <span className="text-[9px] font-[family-name:var(--font-anton)] tracking-wider px-1.5 py-0.5 bg-black text-white border-2 border-black">▶ EP.1 FREE</span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-3 z-10">
                <span className="text-[9px] tracking-widest text-black uppercase mb-1 font-[family-name:var(--font-anton)] bg-black text-white px-1.5 py-0.5 self-start">12/30화 진행중</span>
                <span className="text-black text-base font-han mt-1.5">전뇌 서울 2089</span>
                <span className="text-black text-[10px] font-[family-name:var(--font-anton)] tracking-wider">CYBERPUNK</span>
              </div>
            </div>
          </div>

          {/* Flat info card */}
          <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 bg-white border-4 border-black px-5 py-3 flex items-center gap-3 whitespace-nowrap">
            <div className="w-9 h-9 bg-red border-2 border-black flex items-center justify-center text-sm font-black text-white">
              ▶
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-black font-[family-name:var(--font-anton)]">NEXT EPISODE · 60 SEC</div>
              <div className="text-sm font-han text-black">벚꽃 밤의 칼날 — EP.04</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-black text-[11px] tracking-[0.3em] uppercase flex flex-col items-center gap-2 font-[family-name:var(--font-anton)]">
        <span>SCROLL</span>
        <div className="w-1 h-8 bg-black" />
      </div>
    </section>
  );
}
