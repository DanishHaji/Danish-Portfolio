'use client';

import React from 'react';

const words = [
  "INNOVATIVE", "ENGAGING", "ACCESSIBLE", "RESPONSIVE", "DYNAMIC",
  "SCALABLE", "OPTIMIZED", "INTUITIVE", "EFFICIENT", "MODERN",
  "SECURE", "ADAPTABLE", "USER-FRIENDLY", "POWERFUL", "RELIABLE",
  "FLEXIBLE", "PERFORMANT", "ROBUST", "ELEGANT", "INTERACTIVE",
];

interface BannerMarqueeProps {
  className?: string;
  reverse?: boolean;
}

const BannerMarquee: React.FC<BannerMarqueeProps> = ({ className, reverse = false }) => {
  return (
    <div className={`w-full overflow-hidden bg-gray-900 text-white py-6 ${className}`}>
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: ${reverse ? 'marquee-reverse' : 'marquee'} 30s linear infinite;
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
            <span key={index} className="text-lg font-bold tracking-wide mx-4 whitespace-nowrap text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.9)]">
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
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Front tilted banner */}
      <div className="absolute">
        <BannerMarquee className="transform rotate-6 opacity-50" />
      </div>

      {/* Back tilted banner (no text) */}
      <div className="absolute">
        <BannerMarquee reverse className="transform -rotate-6 opacity-70" />
      </div>
    </div>
  );
};

export default CrossBanners;
