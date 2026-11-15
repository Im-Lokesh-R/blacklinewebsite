type Props = {
  id: string;
  size?: number;
  className?: string;
};

/**
 * Custom stroke-style SVG icons that match the signboard aesthetic.
 * All icons use currentColor for stroke and a consistent 1.5 stroke width.
 */
export default function ServiceIcon({ id, size = 32, className = '' }: Props) {
  const s = size;
  const common = {
    width: s,
    height: s,
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };

  switch (id) {
    case 'ceramic-coating':
      // Shield with sparkle
      return (
        <svg {...common}>
          <path d="M16 3L5 7v10c0 6 4.5 10 11 12 6.5-2 11-6 11-12V7L16 3z" />
          <path d="M16 10l1.5 3.5L21 15l-3.5 1.5L16 20l-1.5-3.5L11 15l3.5-1.5L16 10z" />
        </svg>
      );
    case 'ppf':
      // Shield with PPF label
      return (
        <svg {...common}>
          <path d="M16 3L5 7v10c0 6 4.5 10 11 12 6.5-2 11-6 11-12V7L16 3z" />
          <path d="M11 13h7a2 2 0 0 1 0 4h-4v3M11 20v-7" />
        </svg>
      );
    case 'exterior-detailing':
      // Car with sparkles
      return (
        <svg {...common}>
          <path d="M4 20h24M6 20v3M26 20v3" />
          <path d="M5 16l2-6c.5-2 2-3 4-3h10c2 0 3.5 1 4 3l2 6v4H5v-4z" />
          <path d="M9 16h14" />
          <path d="M22 9l.5 1.5L24 11l-1.5.5L22 13l-.5-1.5L20 11l1.5-.5L22 9z" />
        </svg>
      );
    case 'interior-detailing':
      // Car seat
      return (
        <svg {...common}>
          <path d="M8 26V14c0-2 1-4 4-4h8c3 0 4 2 4 4v12" />
          <path d="M8 18h16M8 26h16" />
          <path d="M8 22c0-2 1-4 4-4M24 22c0-2-1-4-4-4" />
        </svg>
      );
    case 'foam-wash':
      // Foam spray
      return (
        <svg {...common}>
          <path d="M16 3c-4 0-7 3-7 7 0 3 2 5 3 6v3h8v-3c1-1 3-3 3-6 0-4-3-7-7-7z" />
          <path d="M12 22h8M14 26h4" />
          <path d="M10 12c0-2 1-3 2-3M22 12c0-2-1-3-2-3" />
        </svg>
      );
    case 'paint-correction':
      // Polisher machine
      return (
        <svg {...common}>
          <circle cx="16" cy="22" r="5" />
          <path d="M16 17V10M16 10l5-5M16 10l-5-5M21 5l2-2M11 5L9 3" />
          <circle cx="16" cy="22" r="2" />
        </svg>
      );
    case 'vinyl-wrapping':
      // Vinyl roll
      return (
        <svg {...common}>
          <rect x="5" y="8" width="22" height="16" rx="1" />
          <path d="M5 14h22M9 8V4M23 8V4M9 4h14" />
          <path d="M9 18l2-2 2 2 2-2 2 2 2-2 2 2" />
        </svg>
      );
    case 'headlight-restoration':
      // Headlight
      return (
        <svg {...common}>
          <path d="M6 10c0-2 2-4 5-4h10c3 0 5 2 5 4v12c0 2-2 3-5 3H11c-3 0-5-1-5-3V10z" />
          <path d="M10 12c0-1 1-2 2-2M22 14v4M10 18v2" />
        </svg>
      );
    case 'windshield-coating':
      // Windshield
      return (
        <svg {...common}>
          <path d="M6 24L16 6l10 18H6z" />
          <path d="M10 22h12M14 16l4 6M18 16l-4 6" />
        </svg>
      );
    case 'sunfilm':
      // Sun
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="6" />
          <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2 2M22.5 22.5l2 2M7.5 24.5l2-2M22.5 9.5l2-2" />
        </svg>
      );
    case 'modifications':
      // Gear
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="4" />
          <path d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 22l3 3M7 25l3-3M22 10l3-3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="10" />
        </svg>
      );
  }
}
