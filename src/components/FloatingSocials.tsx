import { Star } from 'lucide-react';
import { contact, socials } from '@/content';

const instagramUrl = socials.find((s) => s.name === 'Instagram')?.url ?? contact.instagramUrl;
const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

/**
 * Floating social buttons + 5/5 rating badge, fixed on the left edge.
 */
export default function FloatingSocials() {
  return (
    <aside className="floating-socials" aria-label="Social links">
      <a
        href="#reviews"
        className="fs-rating"
        aria-label="Rated 5 out of 5 — see reviews"
        title="Rated 5/5 — see reviews"
      >
        <span className="fs-rating-score">5/5</span>
        <span className="fs-rating-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={9} fill="currentColor" strokeWidth={0} />
          ))}
        </span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fs-btn fs-whatsapp"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.5 0-2.9-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
        </svg>
      </a>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fs-btn fs-instagram"
        aria-label="Follow on Instagram"
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      </a>
    </aside>
  );
}
