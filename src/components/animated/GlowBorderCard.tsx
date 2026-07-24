import React from 'react';

// ৯টি আলাদা গ্রেডিয়েন্ট বা কালার প্রিসেট (তোমার দেওয়া Pug কোডের আদলে)
export const glowPresets = {
  preset1: '#ff45457f, #00ff997f, #006aff7f, #ff00957f, #ff45457f',
  preset2: '#0000 0% 35%, #24004619, #3c096c32, #5a189a4b, #7b2cbf64, #9d4edd7f',
  preset3: '#cb997e7f, #ffe8d67f, #a5a58d7f, #6b705c7f, #cb997e7f',
  preset4: '#0000 0%, #f7258520, #7209b740, #3a0ca360, #4361ee7f',
  preset5: '#7bdff27f, #b2f7ef7f, #eff7f67f, #f7d6e07f, #f2b5d47f, #7bdff27f',
  preset6: '#0000 0% 85%, #936bff7f 0%, #b892ff7f, #ffc2e27f, #ff90b37f',
  preset7: '#7801167f, #f7b5387f, #db7c267f, #d8572a7f, #c32f277f, #7801167f',
  preset8: '#0000 0% 25%, #f3b70019 0%, #faa30032, #e57c044b, #ff620164, #f63e027f 50%',
  preset9: '#00ffcc7f, #ff00ff7f, #ffff007f, #00ffcc7f'
};

interface GlowBorderCardProps {
  children: React.ReactNode;
  filterId?: 'glow-0' | 'glow-1';
  borderWidth?: string;
  gradientColors?: string;
  className?: string;
}

export function GlowBorderCard({
  children,
  filterId = 'glow-1',
  borderWidth = '6px',
  gradientColors = glowPresets.preset1,
  className = '',
}: GlowBorderCardProps) {
  return (
    <>
      {/* গ্লোবাল SVG ফিল্টার */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'fixed', pointerEvents: 'none' }}>
        <defs>
          <filter id="glow-0" x="-.25" y="-.25" width="1.5" height="1.5">
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 2 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="1.5" />
            <feComponentTransfer result="rond">
              <feFuncA type="table" tableValues="-1.5 2.5" />
            </feComponentTransfer>
            <feMorphology operator="dilate" radius="3" />
            <feGaussianBlur stdDeviation="6" />
            <feBlend in="rond" result="glow" />
            <feComponentTransfer in="SourceGraphic">
              <feFuncA type="table" tableValues="0 0 1" />
            </feComponentTransfer>
            <feBlend in2="glow" />
          </filter>

          <filter id="glow-1" x="-.25" y="-.25" width="1.5" height="1.5">
            <feComponentTransfer in="SourceGraphic" result="grad">
              <feFuncA type="table" tableValues="0 2 0" />
            </feComponentTransfer>
            <feMorphology operator="dilate" radius="3" />
            <feGaussianBlur stdDeviation="6" result="glow" />
            <feTurbulence type="fractalNoise" baseFrequency="7.13" />
            <feDisplacementMap in="glow" scale="12" yChannelSelector="R" />
            <feComponentTransfer>
              <feFuncA type="linear" slope=".8" />
            </feComponentTransfer>
            <feBlend in="grad" result="out" />
            <feComponentTransfer in="SourceGraphic">
              <feFuncA type="table" tableValues="0 0 1" />
            </feComponentTransfer>
            <feBlend in2="out" />
          </filter>
        </defs>
      </svg>

      {/* মেইন র‍্যাপার যেখানে যেকোনো একটি প্রিসেট বা কাস্টম কালার পাস করা যাবে */}
      <div
        className={`glow-animated-border ${className}`}
        style={
          {
            '--b': borderWidth,
            filter: `url(#${filterId})`,
            '--l': gradientColors,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </>
  );
}