import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
};

/**
 * Smart image: shows a hex-mesh placeholder until the real image loads,
 * then crossfades to the image. If the image fails to load (e.g. the file
 * hasn't been added to /public/images yet), the placeholder stays visible.
 */
export default function SmartImage({ src, alt, className = '', loading = 'lazy' }: Props) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  // Handle images that were cached and load synchronously
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  const fileName = src.split('/').pop() || src;

  return (
    <div className={`img-slot ${className}`} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Placeholder */}
      <div className="img-placeholder" style={{ opacity: loaded ? 0 : 1, transition: 'opacity 0.6s ease', position: 'absolute', inset: 0 }}>
        <div className="hex-mesh-bg" />
        <span className="ph-label">{fileName}</span>
        <span className="ph-corner" />
      </div>
      {/* Real image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
