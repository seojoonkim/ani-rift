"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated speed lines background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              background: `linear-gradient(90deg, transparent, ${
                i % 3 === 0
                  ? "#FF2D78"
                  : i % 3 === 1
                  ? "#00D4FF"
                  : "#8B5CF6"
              }, transparent)`,
            }}
            animate={{
              x: ["-100%", "200vw"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Halftone overlay */}
      <div className="absolute inset-0 halftone-bg" />

      {/* Large background kanji */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="kanji-deco text-[40vw] text-white select-none">
          裂
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="glitch text-7xl md:text-9xl font-black tracking-tighter mb-4"
            data-text="ANI RIFT"
          >
            <span className="neon-text">ANI</span>{" "}
            <span className="neon-text-blue">RIFT</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-[#00D4FF] font-medium tracking-widest mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          アニメの新しい世界
        </motion.p>

        <motion.p
          className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          숏폼으로 만나는 차세대 애니메이션 스트리밍
        </motion.p>

        <motion.button
          className="pulse-cta bg-[#FF2D78] hover:bg-[#ff5a9a] text-white font-bold py-4 px-10 rounded-full text-lg tracking-wider transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          今すぐ見る
        </motion.button>

        <motion.p
          className="text-gray-500 text-xs mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          無料で始める · No credit card required
        </motion.p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
