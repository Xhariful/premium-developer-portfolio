/**
 * GlowFilters — global SVG filter defs used by the `.glow-border-*` utilities
 * and by <GlowBorderCard>. Mount ONCE (in RootComponent) so any element on the
 * page can reference `filter: url(#glow-0)` or `url(#glow-1)`.
 */
export function GlowFilters() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      style={{ position: "fixed", pointerEvents: "none" }}
    >
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
  );
}
