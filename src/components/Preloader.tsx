import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type Props = {
  onComplete: () => void;
};

/**
 * Preloader: red line draws across black screen, wordmark reveals,
 * then the line splits and opens to reveal the hero. ~2s, once per session.
 */
export default function Preloader({ onComplete }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      tl.set(line2Ref.current, { scaleX: 0 });
      tl.set(wordRef.current, { yPercent: 120, opacity: 0 });

      tl.to(lineRef.current, { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }, 0);
      tl.to(wordRef.current, { yPercent: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.3);
      tl.to(wordRef.current, { yPercent: -120, opacity: 0, duration: 0.5, ease: 'power3.in' }, 1.3);
      tl.to(lineRef.current, { scaleY: 0.01, duration: 0.4, ease: 'power2.inOut' }, 1.3);
      tl.to(
        rootRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        1.5,
      );
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg)',
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative', width: '100%', maxWidth: 500, textAlign: 'center' }}>
        <div
          ref={wordRef}
          style={{
            overflow: 'hidden',
            padding: '20px 0',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 6vw, 48px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text)',
            }}
          >
            BLACK LINE
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(10px, 1.5vw, 12px)',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.35em',
              color: 'var(--muted)',
              marginTop: 8,
            }}
          >
            Detailing Studio
          </div>
        </div>
        <div
          ref={lineRef}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 2,
            background: 'var(--red)',
            boxShadow: '0 0 16px var(--red-glow)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
          }}
        />
      </div>
    </div>
  );
}
