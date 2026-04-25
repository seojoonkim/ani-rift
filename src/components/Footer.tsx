"use client";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-8 sm:p-10">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF4D8D] via-[#6366F1] to-[#06B6D4] flex items-center justify-center font-black">
                  A
                </span>
                <span className="text-xl font-bold">Anirift</span>
                <span className="text-xs text-white/40 font-jp" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  アニリフト
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-5" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                次元を超えるアニメ体験。
              </p>
              <p className="text-sm text-white/50 max-w-sm">
                차원을 넘는 애니 체험. 숏폼 애니메이션 전용 차세대 OTT.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">作品 · Content</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">注目作品</a></li>
                <li><a href="#" className="hover:text-white transition-colors">人気ランキング</a></li>
                <li><a href="#" className="hover:text-white transition-colors">新着</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ジャンル</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">会社 · Company</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">サポート · Support</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="glow-divider my-8" />

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
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
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-[10px] font-bold hover:text-white text-white/60 transition-colors"
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
