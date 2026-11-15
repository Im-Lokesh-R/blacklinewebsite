import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { process } from '@/content';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const rootRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) return;

      // Header reveal
      gsap.fromTo(
        '.process-header-inner',
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: { trigger: '.process-header', start: 'top 75%' },
        },
      );

      // Red line draws as you scroll
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.process-steps',
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: 1,
          },
        },
      );

      // Steps reveal
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step) => {
        gsap.from(step, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: step, start: 'top 85%' },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={rootRef} className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <span className="section-number">04</span>
          <span style={{ width: 40, height: 1, background: 'var(--line)' }} />
          <span className="label">Process</span>
        </div>

        <div className="process-header" style={{ marginBottom: 80, overflow: 'hidden' }}>
          <h2 className="display process-header-inner" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>
            How It Works
          </h2>
        </div>

        {/* Steps with connecting red line */}
        <div className="process-steps" style={{ position: 'relative' }}>
          {/* Horizontal red line */}
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: 0,
              right: 0,
              height: 2,
              background: 'var(--line)',
            }}
          >
            <div
              ref={lineRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'var(--red)',
                transformOrigin: 'left',
                boxShadow: '0 0 10px var(--red-glow)',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 24,
            }}
            className="process-grid"
          >
            {process.map((step) => (
              <div key={step.number} className="process-step" style={{ position: 'relative', paddingTop: 48 }}>
                {/* Dot on the line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 0,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    border: '2px solid var(--red)',
                    boxShadow: '0 0 8px var(--red-glow)',
                  }}
                />
                <div
                  className="section-number"
                  style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}
                >
                  {step.number}
                </div>
                <h3 className="display" style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .process-steps > div:first-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
