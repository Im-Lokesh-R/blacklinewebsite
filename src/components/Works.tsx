import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { works } from '@/content';
import SmartImage from './SmartImage';
import BeforeAfterSlider from './BeforeAfterSlider';

gsap.registerPlugin(ScrollTrigger);

type LightboxState = { index: number } | null;

export default function Works() {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) return;

      // Header reveal
      gsap.fromTo(
        '.works-header-inner',
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: { trigger: '.works-header', start: 'top 75%' },
        },
      );

      // Horizontal pinned scroll for the gallery
      const track = trackRef.current;
      if (!track) return;

      const cards = track.querySelectorAll('.work-card');
      if (cards.length === 0) return;

      // Only pin on desktop
      if (window.innerWidth > 768) {
        const scrollTween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 80),
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: () => `+=${track.scrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          scrollTween.scrollTrigger?.kill();
          scrollTween.kill();
        };
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const activeWork = lightbox !== null ? works[lightbox.index] : null;

  return (
    <section id="works" ref={rootRef} className="section" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <span className="section-number">03</span>
          <span style={{ width: 40, height: 1, background: 'var(--line)' }} />
          <span className="label">Works</span>
        </div>
        <div className="works-header" style={{ overflow: 'hidden' }}>
          <h2 className="display works-header-inner" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>
            Selected Projects
          </h2>
        </div>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="works-track"
        style={{
          display: 'flex',
          gap: 24,
          padding: '0 40px',
          willChange: 'transform',
        }}
      >
        {works.map((work, i) => (
          <div
            key={work.id}
            className="work-card"
            data-cursor="view"
            onClick={() => setLightbox({ index: i })}
            style={{
              flexShrink: 0,
              width: 'clamp(300px, 40vw, 480px)',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div
              className="chamfer"
              style={{
                height: 'clamp(280px, 50vh, 400px)',
                background: 'var(--surface-2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {work.hasSlider && work.beforeImage && work.afterImage ? (
                <BeforeAfterSlider beforeSrc={work.beforeImage} afterSrc={work.afterImage} />
              ) : (
                <SmartImage src={work.image} alt={`${work.title} — detailed by BLACK LINE`} />
              )}

              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,11,0.9) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 className="display" style={{ fontSize: 20, fontWeight: 600 }}>
                  {work.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>{work.services.join(' · ')}</p>
              </div>
              <span className="section-number" style={{ fontSize: 11 }}>
                0{i + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeWork && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10,10,11,0.95)',
            zIndex: 10001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="chamfer"
            style={{
              width: '100%',
              maxWidth: 900,
              height: '70vh',
              position: 'relative',
              background: 'var(--surface-2)',
            }}
          >
            {activeWork.hasSlider && activeWork.beforeImage && activeWork.afterImage ? (
              <BeforeAfterSlider beforeSrc={activeWork.beforeImage} afterSrc={activeWork.afterImage} />
            ) : (
              <SmartImage src={activeWork.image} alt={activeWork.title} />
            )}
          </div>
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              width: 44,
              height: 44,
              border: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>
          <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, textAlign: 'center' }}>
            <h3 className="display" style={{ fontSize: 24 }}>{activeWork.title}</h3>
            <p style={{ color: 'var(--muted)', marginTop: 8 }}>{activeWork.services.join(' · ')}</p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .works-track {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 0 24px;
            -webkit-overflow-scrolling: touch;
          }
          .works-track::-webkit-scrollbar { display: none; }
          .work-card {
            scroll-snap-align: start;
            width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
