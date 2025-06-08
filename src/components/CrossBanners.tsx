'use client';

import React from 'react';

const words = [
  "🚀 INNOVATIVE", "✨ ENGAGING", "♿ ACCESSIBLE", "📱 RESPONSIVE", "⚡ DYNAMIC",
  "📈 SCALABLE", "🛠️ OPTIMIZED", "🧠 INTUITIVE", "⚙️ EFFICIENT", "🎨 MODERN",
  "🔒 SECURE", "🔄 ADAPTABLE", "👥 USER-FRIENDLY", "💪 POWERFUL", "🔧 RELIABLE",
  "🔁 FLEXIBLE", "🏎️ PERFORMANT", "🛡️ ROBUST", "💎 ELEGANT", "🖱️ INTERACTIVE",
  "🎯 CREATIVE", "⚡ FAST", "🧼 CLEAN", "🧩 SIMPLE", "🎩 SOPHISTICATED",
  "🌀 VERSATILE", "💡 LIGHTWEIGHT", "🔗 SEAMLESS", "🛠️ CUSTOMIZABLE", "🌟 UNIQUE",
  "🧠 INTELLIGENT", "🌐 CONNECTED", "🎞️ ANIMATED", "🎯 INTENTIONAL", "🔬 ENHANCED",
  "🔌 INTEGRATED", "💻 CROSS-PLATFORM", "🔥 BOLD", "🌍 INCLUSIVE", "🧱 STRUCTURED",
  "🎨 AESTHETIC", "🧠 SMART", "♿ ACCESSIBLE", "☁️ CLOUD-READY", "🚢 DEPLOYABLE",
  "🧹 MAINTAINABLE", "🔮 FUTURE-PROOF", "🧑‍💻 CODED", "⏫ ELEVATED", "📈 TRENDING", "🛠️ CRAFTED",
];

interface BannerMarqueeProps {
  className?: string;
  reverse?: boolean;
}

const BannerMarquee: React.FC<BannerMarqueeProps> = ({ className, reverse = false }) => {
  return (
    <div className={`w-full overflow-hidden bg-gray-900 text-white py-2 sm:py-4 md:py-6 ${className}`}>
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: ${reverse ? 'marquee-reverse' : 'marquee'} 120s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="flex w-[200%]">
        <div className="marquee-track">
          {[...words, ...words].map((word, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm md:text-lg font-bold tracking-wide mx-1 sm:mx-2 md:mx-4 whitespace-nowrap text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]"
            >
              {word} ✦
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CrossBanners: React.FC = () => {
  return (
    <div
      className="
        relative w-full
        min-h-[120px]      /* small screens minimum height */
        sm:min-h-[180px]   /* small-medium */
        md:min-h-[300px]   /* medium and above */
        max-h-[300px]      /* maximum height */
        flex items-center justify-center
        overflow-hidden     /* prevent overflow */
        "
    >
      {/* Front tilted banner */}
      <div className="absolute">
        <BannerMarquee className="transform rotate-6 opacity-50" />
      </div>

      {/* Back tilted banner */}
      <div className="absolute">
        <BannerMarquee reverse className="transform -rotate-6 opacity-90" />
      </div>
    </div>
  );
};

export default CrossBanners;
