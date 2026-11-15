import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site, heroImage, contact } from '@/content';
import HexMesh from './HexMesh';
import SmartImage from './SmartImage';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const lightStreakRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) return;

      // Headline line reveals
      const lines = headlineRef.current?.querySelectorAll('.hero-line-inner');
      if (lines) {
        gsap.fromTo(
          lines,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power4.out',
            delay: 0.3,
          },
        );
      }

      // Tagline + CTAs fade up
      gsap.fromTo(
        '.hero-fade-up',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.8,
        },
      );

      // Parallax on hero image
      gsap.to('.hero-img-wrap', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Moving red light streak (loop)
      gsap.to(lightStreakRef.current, {
        xPercent: 200,
        duration: 6,
        repeat: -1,
        ease: 'power1.inOut',
        yoyo: true,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={rootRef} style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* Background image with parallax */}
      <div className="hero-img-wrap" style={{ position: 'absolute', inset: '-10%', zIndex: 0 }}>
        <SmartImage src={heroImage} alt="Premium car detailing" loading="eager" />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10,10,11,0.7) 0%, rgba(10,10,11,0.5) 50%, rgba(10,10,11,0.95) 100%)',
          }}
        />
        {/* Red light streak */}
        <div
          ref={lightStreakRef}
          style={{
            position: 'absolute',
            top: 0,
            left: '-50%',
            width: '40%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(227,38,46,0.12), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Hex mesh sides */}
      <HexMesh fade="left" style={{ left: 0, width: '20%' }} opacity={0.4} />
      <HexMesh fade="right" style={{ right: 0, width: '20%' }} opacity={0.4} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 80 }}>
        <div style={{ maxWidth: 900 }}>
          {/* Tagline */}
          <div className="hero-fade-up" style={{ display: 'flex', gap: 16, marginBottom: 32, alignItems: 'center' }}>
            {site.tagline.split(' | ').map((part, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {i > 0 && <span style={{ width: 24, height: 1, background: 'var(--red)' }} />}
                <span className="label">{part}</span>
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="display"
            style={{
              fontSize: 'clamp(48px, 10vw, 120px)',
              lineHeight: 0.95,
              marginBottom: 40,
            }}
          >
            {site.heroHeadline.map((line, i) => (
              <span key={i} className="reveal-line hero-line">
                <span className="reveal-line-inner hero-line-inner">{line}</span>
              </span>
            ))}
          </h1>

          {/* CTAs */}
          <div className="hero-fade-up" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <MagneticButton as="a" href="#contact" className="btn btn-primary" strength={0.2}>
              <span className="sweep" />
              Book a Detailing
            </MagneticButton>
            <MagneticButton as="a" href={`https://wa.me/${contact.whatsappNumber}`} className="btn btn-ghost" strength={0.2}>
              <span className="sweep" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.5-4.5A8 8 0 1 1 12 20a7.9 7.9 0 0 1-4-1L3 21z" />
              </svg>
              WhatsApp
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-fade-up"
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span className="label" style={{ fontSize: 9 }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: 'var(--muted)', position: 'relative', overflow: 'hidden' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '50%',
              background: 'var(--red)',
              animation: 'scrollLine 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
