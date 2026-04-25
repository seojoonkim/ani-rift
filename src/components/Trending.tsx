"use client";

import { motion } from "framer-motion";

const trending = [
  { title: "呪術廻戦", titleKo: "주술회전", ep: "EP.24", rating: "★ 4.9", color: "#FF2D78" },
  { title: "チェンソーマン", titleKo: "체인소맨", ep: "EP.12", rating: "★ 4.8", color: "#00D4FF" },
  { title: "スパイファミリー", titleKo: "스파이 패밀리", ep: "EP.25", rating: "★ 4.7", color: "#8B5CF6" },
  { title: "進撃の巨人", titleKo: "진격의 거인", ep: "FINAL", rating: "★ 5.0", color: "#39FF14" },
  { title: "鬼滅の刃", titleKo: "귀멸의 칼날", ep: "EP.11", rating: "★ 4.9", color: "#FF2D78" },
  { title: "ワンピース", titleKo: "원피스", ep: "EP.1098", rating: "★ 4.8", color: "#00D4FF" },
];

export default function Trending() {
  return (
    <section className="relative py-24 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="neon-text" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          トレンド
        </span>{" "}
        <span className="text-gray-400">/ Trending Now</span>
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
        {trending.map((anime, i) => (
          <motion.div
            key={anime.title}
            className="anime-card rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Placeholder image */}
            <div
              className="aspect-[3/4] relative flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${anime.color}22, ${anime.color}08)`,
              }}
            >
              <span className="kanji-deco text-6xl text-white/20">
                {anime.title.charAt(0)}
              </span>
              <div className="absolute top-2 right-2 bg-black/70 text-xs px-2 py-1 rounded" style={{ color: anime.color }}>
                {anime.ep}
              </div>
            </div>
            <div className="p-3">
              <h3
                className="font-bold text-sm truncate"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {anime.title}
              </h3>
              <p className="text-xs text-gray-400 truncate">{anime.titleKo}</p>
              <p className="text-xs mt-1" style={{ color: anime.color }}>
                {anime.rating}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
