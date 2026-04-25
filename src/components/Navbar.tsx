"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-navy border-b-4 border-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="w-10 h-10 bg-red border-2 border-black flex items-center justify-center text-lg font-black text-white font-display">
            A
          </span>
          <span className="font-display tracking-tight text-[22px] text-white">
            ANI RIFT
          </span>
          <span className="hidden sm:inline text-[12px] text-gold font-han ml-2">애니리프트</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-[15px] text-white font-han">
          <a href="#featured" className="hover:text-gold">시리즈</a>
          <a href="#popular" className="hover:text-gold">트렌드</a>
          <a href="#pricing" className="hover:text-gold">요금</a>
          <a href="#why" className="hover:text-gold">FAQ</a>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex text-sm font-bold text-white hover:text-gold px-3 py-1.5 font-han">
            로그인
          </button>
          <button className="text-sm font-black text-white bg-red border-2 border-black px-4 py-2 hover:bg-gold hover:text-black tracking-wider font-han">
            첫 화 무료
          </button>
        </div>
      </div>
    </nav>
  );
}
