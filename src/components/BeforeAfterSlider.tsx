import { useRef, useState, useCallback } from 'react';
import SmartImage from './SmartImage';

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

/**
 * Draggable before/after image comparison slider.
 */
export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeLabel = 'Before', afterLabel = 'After', className = '' }: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePos(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`before-after ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'ew-resize',
        userSelect: 'none',
        touchAction: 'none',
      }}
    >
      {/* After (full) */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <SmartImage src={afterSrc} alt={afterLabel} loading="lazy" />
      </div>

      {/* Before (clipped) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
        }}
      >
        <SmartImage src={beforeSrc} alt={beforeLabel} loading="lazy" />
      </div>

      {/* Labels */}
      <span
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          fontFamily: 'var(--font-display)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--text)',
          background: 'rgba(10,10,11,0.8)',
          padding: '4px 10px',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
        {beforeLabel}
      </span>
      <span
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          fontFamily: 'var(--font-display)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--red)',
          background: 'rgba(10,10,11,0.8)',
          padding: '4px 10px',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
        {afterLabel}
      </span>

      {/* Handle */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: 2,
          background: 'var(--red)',
          boxShadow: '0 0 12px var(--red-glow)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 40,
            height: 40,
            border: '2px solid var(--red)',
            borderRadius: '50%',
            background: 'rgba(10,10,11,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text)',
            fontSize: 14,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 3L1 8l4 5M11 3l4 5-4 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
