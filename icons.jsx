// Inline icons that match the flyer's quiet, single-stroke style.
const Icon = {
  Heart: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
    </svg>
  ),
  Hands: ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 14c-1.5-3-4-4-6-4s-4 1.5-4 4v10c0 6 4 10 10 10s10-4 10-10V14c0-2.5-2-4-4-4s-4.5 1-6 4z" />
      <path d="M16 22v-6M32 22v-6M20 22v-4M28 22v-4" />
    </svg>
  ),
  Home: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 14L16 5l11 9v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
      <path d="M13 28v-7h6v7" />
    </svg>
  ),
  Car: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19l2-7a3 3 0 0 1 3-2h12a3 3 0 0 1 3 2l2 7" />
      <rect x="4" y="19" width="24" height="6" rx="2" />
      <circle cx="10" cy="25" r="2" fill="currentColor" />
      <circle cx="22" cy="25" r="2" fill="currentColor" />
    </svg>
  ),
  Basket: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h22l-2 13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
      <path d="M11 12l3-6M21 12l-3-6" />
      <path d="M13 17v6M19 17v6" />
    </svg>
  ),
  People: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="3.5" />
      <circle cx="21" cy="11" r="3.5" />
      <path d="M5 24c0-3 3-5.5 6-5.5s6 2.5 6 5.5" />
      <path d="M15 24c0-3 3-5.5 6-5.5s6 2.5 6 5.5" />
    </svg>
  ),
  Eye: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16z" />
      <circle cx="16" cy="16" r="3.5" />
    </svg>
  ),
  Tag: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12V4h8l9 9-8 8z" />
      <circle cx="8" cy="8" r="1.5" />
    </svg>
  ),
  Pin: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  Phone: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  ),
  Mail: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  User: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" />
    </svg>
  ),
  Check: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  ),
  ArrowR: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  ArrowL: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  ),
  ChevR: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  ),
  ChevL: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" />
    </svg>
  ),
  Sparkle: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    </svg>
  ),
  Leaf: ({ width = 240 }) => (
    // Two-stem eucalyptus cluster — back stem light, front stem darker
    <svg width={width} viewBox="0 0 220 320" fill="none" aria-hidden="true">
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* back stem — lighter, recedes */}
        <path d="M70 22 Q 78 110 88 200 Q 92 260 100 312" stroke="oklch(0.5 0.05 145 / 0.7)" strokeWidth="1.3" fill="none" />
        <circle cx="70" cy="22" r="3.5" fill="oklch(0.55 0.07 145 / 0.85)" />
        <ellipse cx="50" cy="60" rx="30" ry="22" transform="rotate(-32 50 60)" fill="oklch(0.82 0.04 145 / 0.45)" stroke="oklch(0.55 0.06 145 / 0.7)" strokeWidth="1.1" />
        <ellipse cx="62" cy="110" rx="33" ry="24" transform="rotate(-12 62 110)" fill="oklch(0.82 0.04 145 / 0.4)" stroke="oklch(0.55 0.06 145 / 0.7)" strokeWidth="1.1" />
        <ellipse cx="58" cy="170" rx="31" ry="23" transform="rotate(-28 58 170)" fill="oklch(0.82 0.04 145 / 0.4)" stroke="oklch(0.55 0.06 145 / 0.7)" strokeWidth="1.1" />
        <ellipse cx="80" cy="230" rx="30" ry="22" transform="rotate(20 80 230)" fill="oklch(0.82 0.04 145 / 0.45)" stroke="oklch(0.55 0.06 145 / 0.7)" strokeWidth="1.1" />
        <ellipse cx="92" cy="285" rx="28" ry="20" transform="rotate(-15 92 285)" fill="oklch(0.82 0.04 145 / 0.4)" stroke="oklch(0.55 0.06 145 / 0.7)" strokeWidth="1.1" />

        {/* front stem — darker, in focus */}
        <path d="M132 50 Q 140 130 132 220 Q 130 270 138 314" stroke="oklch(0.4 0.06 145)" strokeWidth="1.5" fill="none" />
        <circle cx="132" cy="50" r="4" fill="oklch(0.45 0.07 145)" />
        <ellipse cx="160" cy="95" rx="32" ry="24" transform="rotate(22 160 95)" fill="oklch(0.65 0.07 145 / 0.75)" stroke="oklch(0.4 0.06 145)" strokeWidth="1.3" />
        <ellipse cx="170" cy="150" rx="35" ry="26" transform="rotate(15 170 150)" fill="oklch(0.62 0.08 145 / 0.8)" stroke="oklch(0.38 0.06 145)" strokeWidth="1.3" />
        <ellipse cx="165" cy="210" rx="32" ry="24" transform="rotate(28 165 210)" fill="oklch(0.6 0.08 145 / 0.85)" stroke="oklch(0.38 0.06 145)" strokeWidth="1.3" />
        <ellipse cx="155" cy="270" rx="33" ry="25" transform="rotate(8 155 270)" fill="oklch(0.58 0.08 145 / 0.85)" stroke="oklch(0.36 0.06 145)" strokeWidth="1.3" />
      </g>
    </svg>
  ),
  LeafSprig: ({ width = 160 }) => (
    // Smaller single-stem sprig — for accent placements
    <svg width={width} viewBox="0 0 140 210" fill="none" aria-hidden="true">
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 12 Q 72 100 70 200" stroke="oklch(0.42 0.06 145)" strokeWidth="1.3" fill="none" />
        <circle cx="70" cy="12" r="3" fill="oklch(0.5 0.07 145)" />
        <ellipse cx="42" cy="55" rx="25" ry="18" transform="rotate(-30 42 55)" fill="oklch(0.72 0.06 145 / 0.55)" stroke="oklch(0.42 0.06 145 / 0.85)" strokeWidth="1.2" />
        <ellipse cx="98" cy="88" rx="27" ry="20" transform="rotate(25 98 88)" fill="oklch(0.65 0.07 145 / 0.7)" stroke="oklch(0.4 0.06 145)" strokeWidth="1.2" />
        <ellipse cx="46" cy="135" rx="26" ry="19" transform="rotate(-22 46 135)" fill="oklch(0.7 0.07 145 / 0.6)" stroke="oklch(0.42 0.06 145 / 0.9)" strokeWidth="1.2" />
        <ellipse cx="94" cy="178" rx="25" ry="18" transform="rotate(18 94 178)" fill="oklch(0.62 0.08 145 / 0.75)" stroke="oklch(0.4 0.06 145)" strokeWidth="1.2" />
      </g>
    </svg>
  ),
};

window.Icon = Icon;
