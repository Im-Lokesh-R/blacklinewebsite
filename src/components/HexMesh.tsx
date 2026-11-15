type Props = {
  size?: number;
  className?: string;
  fade?: 'left' | 'right' | 'both' | 'none';
  opacity?: number;
  style?: React.CSSProperties;
};

export default function HexMesh({ size = 56, className = '', fade = 'none', opacity = 0.5, style }: Props) {
  const meshUrl = `data:image/svg+xml,%3Csvg width='${size}' height='${Math.round(size * 0.86)}' viewBox='0 0 ${size} ${Math.round(size * 0.86)}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M${size / 2} 0L${size} ${Math.round(size * 0.29)}V${Math.round(size * 0.57)}L${size / 2} ${Math.round(size * 0.86)}L0 ${Math.round(size * 0.57)}V${Math.round(size * 0.29)}L${size / 2} 0Z' fill='none' stroke='%232b2b2e' stroke-width='0.8'/%3E%3C/svg%3E`;

  let maskStyle = {};
  if (fade === 'left') maskStyle = { maskImage: 'linear-gradient(to right, transparent, black 30%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)' };
  if (fade === 'right') maskStyle = { maskImage: 'linear-gradient(to left, transparent, black 30%)', WebkitMaskImage: 'linear-gradient(to left, transparent, black 30%)' };
  if (fade === 'both') maskStyle = { maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' };

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("${meshUrl}")`,
        backgroundSize: `${size}px ${Math.round(size * 0.86)}px`,
        opacity,
        pointerEvents: 'none',
        ...maskStyle,
        ...style,
      }}
    />
  );
}
