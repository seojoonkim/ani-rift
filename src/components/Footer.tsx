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
                <span className="text-xs text-gold font-bold ml-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  アニリフト
                </span>
              </div>
              <p className="text-sm text-white leading-relaxed max-w-sm mb-5 font-bold" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                次元を超えるアニメ体験。
              </p>
              <p className="text-sm text-white/80 max-w-sm font-medium">
                차원을 넘는 애니 체험. 숏폼 애니메이션 전용 차세대 OTT.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-black">作品 · Content</h4>
              <ul className="space-y-2.5 text-sm text-white font-bold">
                <li><a href="#" className="hover:text-gold">注目作品</a></li>
                <li><a href="#" className="hover:text-gold">人気ランキング</a></li>
                <li><a href="#" className="hover:text-gold">新着</a></li>
                <li><a href="#" className="hover:text-gold">ジャンル</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-black">会社 · Company</h4>
              <ul className="space-y-2.5 text-sm text-white font-bold">
                <li><a href="#" className="hover:text-gold">About</a></li>
                <li><a href="#" className="hover:text-gold">Careers</a></li>
                <li><a href="#" className="hover:text-gold">Press</a></li>
                <li><a href="#" className="hover:text-gold">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-black">サポート · Support</h4>
              <ul className="space-y-2.5 text-sm text-white font-bold">
                <li><a href="#" className="hover:text-gold">Help Center</a></li>
                <li><a href="#" className="hover:text-gold">Terms</a></li>
                <li><a href="#" className="hover:text-gold">Privacy</a></li>
                <li><a href="#" className="hover:text-gold">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="solid-divider my-8 bg-white" style={{ height: "3px" }} />

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/80 font-bold">
            <div className="flex items-center gap-4">
              <span>© 2026 Anirift. All rights reserved.</span>
              <span className="hidden sm:inline">·</span>
              <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }} className="hidden sm:inline">
                すべてのアニメファンへ愛を込めて 🌸
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
