import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '@/content';
import ServiceIcon from './ServiceIcon';
import SmartImage from './SmartImage';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const rootRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) return;

      // Reveal rows on scroll
      gsap.utils.toArray<HTMLElement>('.service-row').forEach((row) => {
        gsap.from(row, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 90%',
          },
        });
      });

      // Header reveal
      gsap.fromTo(
        '.services-header-inner',
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: { trigger: '.services-header', start: 'top 75%' },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const showPreview = window.matchMedia('(pointer: fine)').matches;

  return (
    <section id="services" ref={rootRef} className="section" onMouseMove={handleMouseMove} style={{ background: 'var(--surface)' }}>
      <div className="container">
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <span className="section-number">02</span>
          <span style={{ width: 40, height: 1, background: 'var(--line)' }} />
          <span className="label">Services</span>
        </div>

        <div className="services-header" style={{ marginBottom: 64, overflow: 'hidden' }}>
          <h2 className="display services-header-inner" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>
            What We Do
          </h2>
        </div>

        {/* Service list */}
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className="service-row"
              data-cursor="view"
              onMouseEnter={() => setActiveService(i)}
              onMouseLeave={() => setActiveService(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 48px 1fr 1fr auto',
                alignItems: 'center',
                gap: 24,
                padding: '24px 0',
                borderBottom: '1px solid var(--line)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'padding-left 0.4s cubic-bezier(0.16,1,0.3,1)',
                paddingLeft: activeService === i ? 16 : 0,
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: activeService === i ? 'var(--red)' : 'var(--muted)',
                  transition: 'color 0.3s',
                  letterSpacing: '0.1em',
                }}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div
                style={{
                  color: activeService === i ? 'var(--red)' : 'var(--text)',
                  transition: 'color 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ServiceIcon id={service.id} size={32} />
              </div>

              {/* Name */}
              <h3
                className="display"
                style={{
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  fontWeight: 600,
                  color: activeService === i ? 'var(--text)' : 'var(--text)',
                  transition: 'color 0.3s',
                }}
              >
                {service.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'var(--muted)',
                  fontSize: 14,
                  lineHeight: 1.5,
                  opacity: activeService === i ? 1 : 0.5,
                  transition: 'opacity 0.3s',
                }}
              >
                {service.description}
              </p>

              {/* Arrow */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke={activeService === i ? 'var(--red)' : 'var(--muted)'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: activeService === i ? 'translateX(0)' : 'translateX(-8px)',
                  opacity: activeService === i ? 1 : 0,
                  transition: 'all 0.3s',
                }}
              >
                <path d="M4 10h12M10 4l6 6-6 6" />
              </svg>

              {/* Slanted red underline */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: 2,
                  background: 'var(--red)',
                  transform: activeService === i ? 'scaleX(1) skewY(-0.5deg)' : 'scaleX(0) skewY(-0.5deg)',
                  transformOrigin: 'left',
                  transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: activeService === i ? '0 0 8px var(--red-glow)' : 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating image preview (desktop only) */}
      {showPreview && activeService !== null && (
        <div
          ref={previewRef}
          className="chamfer"
          style={{
            position: 'absolute',
            width: 280,
            height: 180,
            left: mousePos.x + 30,
            top: mousePos.y - 90,
            pointerEvents: 'none',
            zIndex: 10,
            opacity: 0,
            animation: 'previewFade 0.2s ease forwards',
          }}
        >
          <SmartImage src={services[activeService].image} alt={services[activeService].name} />
        </div>
      )}

      <style>{`
        @keyframes previewFade {
          to { opacity: 1; }
        }
        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 40px 32px 1fr !important;
            gap: 12px !important;
          }
          .service-row p {
            display: none !important;
          }
          .service-row svg[viewBox="0 0 20 20"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
