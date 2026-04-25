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
                <span className="text-xl font-black text-white">Anirift</span>
                <span className="text-xs text-gold font-han ml-1">
                  애니리프트
                </span>
              </div>
              <p className="text-xl text-white leading-relaxed max-w-sm mb-5 font-han">
                차원을 넘는 애니 체험.
              </p>
              <p className="text-sm text-white/80 max-w-sm font-do">
                숏폼 애니메이션 전용 차세대 OTT.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-han">작품 · CONTENT</h4>
              <ul className="space-y-2.5 text-sm text-white font-do">
                <li><a href="#" className="hover:text-gold">추천 작품</a></li>
                <li><a href="#" className="hover:text-gold">인기 랭킹</a></li>
                <li><a href="#" className="hover:text-gold">신작</a></li>
                <li><a href="#" className="hover:text-gold">장르별</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-han">회사 · COMPANY</h4>
              <ul className="space-y-2.5 text-sm text-white font-do">
                <li><a href="#" className="hover:text-gold">소개</a></li>
                <li><a href="#" className="hover:text-gold">채용</a></li>
                <li><a href="#" className="hover:text-gold">보도자료</a></li>
                <li><a href="#" className="hover:text-gold">문의하기</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-han">지원 · SUPPORT</h4>
              <ul className="space-y-2.5 text-sm text-white font-do">
                <li><a href="#" className="hover:text-gold">고객센터</a></li>
                <li><a href="#" className="hover:text-gold">이용약관</a></li>
                <li><a href="#" className="hover:text-gold">개인정보</a></li>
                <li><a href="#" className="hover:text-gold">쿠키정책</a></li>
              </ul>
            </div>
          </div>

          <div className="solid-divider my-8 bg-white" style={{ height: "3px" }} />

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/80 font-do">
            <div className="flex items-center gap-4">
              <span>© 2026 Anirift. All rights reserved.</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline font-han">
                모든 애니 팬들에게 사랑을 담아 🌸
              </span>
            </div>

            <div className="flex items-center gap-3">
              {["X", "IG", "YT", "DC"].map(s => (
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
