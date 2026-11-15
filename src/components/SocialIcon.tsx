type Props = {
  name: string;
  size?: number;
  className?: string;
};

/**
 * Minimal line-icon socials.
 */
export default function SocialIcon({ name, size = 20, className = '' }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };

  switch (name.toLowerCase()) {
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...common}>
          <path d="M3 21l1.5-4.5A8 8 0 1 1 12 20a7.9 7.9 0 0 1-4-1L3 21z" />
          <path d="M8.5 8.5c.5-.5 1-.5 1.5 0l1 1.5c.3.5 0 1-.3 1.3M14 9c.5 2 2 3.5 4 4M14 15c.5.5 1 .5 1.5 0l1-1c.5-.5 1-.5 1.5 0" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M15 3h-3a4 4 0 0 0-4 4v3H6v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3V3z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...common}>
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
