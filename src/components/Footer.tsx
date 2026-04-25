"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-2">
              <span className="neon-text">ANI</span>{" "}
              <span className="neon-text-blue">RIFT</span>
            </h3>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              アニメの新しい世界へようこそ
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm text-gray-300 mb-3">サービス</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#FF2D78] cursor-pointer transition-colors">About</li>
              <li className="hover:text-[#FF2D78] cursor-pointer transition-colors">Features</li>
              <li className="hover:text-[#FF2D78] cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-[#FF2D78] cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-gray-300 mb-3">法的情報</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">利用規約</li>
              <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">プライバシー</li>
              <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">特定商取引法</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-gray-300 mb-3">フォロー</h4>
            <div className="flex gap-3">
              {["X", "DC", "YT", "IG"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-gray-400 hover:bg-[#FF2D78]/20 hover:text-[#FF2D78] cursor-pointer transition-all"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Anirift Inc. All rights reserved.
          </p>
          <p
            className="text-gray-600 text-xs"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            この世界はriftによって作られた
          </p>
        </div>
      </div>
    </footer>
  );
}
