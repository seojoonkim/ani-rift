"use client";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 overflow-hidden bg-black-solid">
      <div className="max-w-7xl mx-auto">
        <div className="border-4 border-white p-8 sm:p-10 bg-black-solid">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-10 h-10 bg-red border-2 border-white flex items-center justify-center font-black text-white font-display">
                  A
                </span>
                <span className="text-2xl font-display text-white tracking-tight">ANI RIFT</span>
                <span className="text-xs text-gold font-han ml-1">
                  애니리프트
                </span>
              </div>
              <p className="text-xl text-white leading-relaxed max-w-sm mb-3 font-han">
                1분의 몰입, 매일의 습관.
              </p>
              <p className="text-sm text-gold mb-4 font-[family-name:var(--font-archivo)] tracking-wider">
                ONE MINUTE. EVERY DAY.
              </p>
              <p className="text-xs text-white/70 max-w-sm font-[family-name:var(--font-anton)] tracking-wider uppercase">
                SHORT-FORM ANIME STREAMING
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-[family-name:var(--font-anton)]">SERVICE · 서비스</h4>
              <ul className="space-y-2.5 text-sm text-white font-do">
                <li><a href="#" className="hover:text-gold">시리즈</a></li>
                <li><a href="#" className="hover:text-gold">코인</a></li>
                <li><a href="#" className="hover:text-gold">멤버십</a></li>
                <li><a href="#" className="hover:text-gold">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-[family-name:var(--font-anton)]">COMPANY · 회사</h4>
              <ul className="space-y-2.5 text-sm text-white font-do">
                <li><a href="#" className="hover:text-gold">소개</a></li>
                <li><a href="#" className="hover:text-gold">채용</a></li>
                <li><a href="#" className="hover:text-gold">제휴 문의</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-[family-name:var(--font-anton)]">LEGAL · 법적 고지</h4>
              <ul className="space-y-2.5 text-sm text-white font-do">
                <li><a href="#" className="hover:text-gold">이용약관</a></li>
                <li><a href="#" className="hover:text-gold">개인정보</a></li>
                <li><a href="#" className="hover:text-gold">청소년보호</a></li>
              </ul>
            </div>
          </div>

          <div className="solid-divider my-8 bg-white" style={{ height: "3px" }} />

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/80 font-do">
            <div className="flex items-center gap-4">
              <span>© 2026 ANI RIFT. All rights reserved.</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline font-han">
                매일 1분, 새로운 한 화 🌸
              </span>
            </div>

            <div className="flex items-center gap-3">
              {["X", "IG", "YT", "TT"].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-red border-2 border-white flex items-center justify-center text-[11px] font-black text-white hover:bg-gold hover:text-black"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
