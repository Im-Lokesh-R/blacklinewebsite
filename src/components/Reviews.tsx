import { Star } from 'lucide-react';
import { reviews } from '@/content';

export default function Reviews() {
  return (
    <section id="reviews" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <span className="section-number">05</span>
          <span style={{ width: 40, height: 1, background: 'var(--line)' }} />
          <span className="label">Client Notes</span>
        </div>

        <div className="reviews-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 32, marginBottom: 56 }}>
          <div>
            <h2 className="display" style={{ fontSize: 'clamp(42px, 7vw, 88px)', lineHeight: 0.95 }}>
              The finish
              <br />
              speaks back.
            </h2>
          </div>
          <div style={{ maxWidth: 280, textAlign: 'right' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 4, color: 'var(--red)', marginBottom: 12 }}>
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" strokeWidth={1.5} />)}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>Real words from drivers who trusted Blackline with their cars.</p>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article key={review.name} className="review-card chamfer-sm" style={{ background: 'var(--bg)', border: '1px solid var(--line)', padding: 28, display: 'flex', flexDirection: 'column', minHeight: 286 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 24 }}>
                <div>
                  <h3 className="display" style={{ fontSize: 16, letterSpacing: '0.02em' }}>{review.name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 12, marginTop: 5 }}>{review.meta}</p>
                </div>
                <span className="section-number" style={{ fontSize: 11 }}>0{index + 1}</span>
              </div>
              <div style={{ display: 'flex', gap: 3, color: 'var(--red)', marginBottom: 18 }}>
                {Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} size={13} fill="currentColor" strokeWidth={1.5} />)}
              </div>
              <p className="display" style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.35, marginBottom: 12 }}>{review.highlight}</p>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, marginTop: 'auto' }}>{review.body}</p>
              <p style={{ color: 'var(--muted)', fontSize: 11, marginTop: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{review.timing}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .review-card { transition: transform 0.35s var(--ease), border-color 0.35s; }
        .review-card:hover { transform: translateY(-6px); border-color: var(--red); }
        .review-card:nth-child(4), .review-card:nth-child(5) { grid-column: span 1; }
        @media (max-width: 900px) { .reviews-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) {
          .reviews-heading { display: block !important; }
          .reviews-heading > div:last-child { text-align: left !important; margin-top: 24px; }
          .reviews-heading > div:last-child > div { justify-content: flex-start !important; }
          .reviews-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
