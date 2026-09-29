/**
 * Odisha motif library — inline SVG, monochrome or two-tone.
 * Pattachitra vine, Konark wheel, Pipili appliqué ribbon, wave and temple-line
 * dividers, Odia wordmark. No deity faces or religious figures.
 */
import type { CSSProperties } from "react";

type SvgProps = {
  className?: string;
  style?: CSSProperties;
};

/* Pattachitra-style floral vine — tiles horizontally as a border. */
export function VineBorder({
  color = "#B98A3B",
  className = "",
  style,
}: SvgProps & { color?: string }) {
  const tile = 120;
  const path = (
    <>
      {/* main vine stem */}
      <path
        d={`M0 20 C 20 8, 40 32, 60 20 S 100 8, ${tile} 20`}
        fill="none"
        stroke={color}
        strokeWidth="1.6"
      />
      {/* flowers on the crests */}
      {[
        [20, 13.5],
        [80, 13.5],
      ].map(([cx, cy], i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((a) => {
            const rad = (a * Math.PI) / 180;
            return (
              <ellipse
                key={a}
                cx={cx + 4.6 * Math.cos(rad)}
                cy={cy + 4.6 * Math.sin(rad)}
                rx="2.6"
                ry="1.1"
                fill={color}
                transform={`rotate(${a} ${cx} ${cy})`}
              />
            );
          })}
          <circle cx={cx} cy={cy} r="1.3" fill={color} />
        </g>
      ))}
      {/* leaves in the troughs */}
      {[
        [50, 26, -18],
        [110, 26, 18],
      ].map(([cx, cy, rot], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="4.4"
          ry="1.7"
          fill={color}
          opacity="0.75"
          transform={`rotate(${rot} ${cx} ${cy})`}
        />
      ))}
    </>
  );
  return (
    <svg
      aria-hidden="true"
      className={className}
      style={style}
      width="100%"
      height="40"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id={`vine-${color.replace("#", "")}`} width={tile} height="40" patternUnits="userSpaceOnUse">
          {path}
        </pattern>
      </defs>
      <rect width="100%" height="40" fill={`url(#vine-${color.replace("#", "")})`} />
    </svg>
  );
}

/* Konark wheel — line icon, used as divider and loader. */
export function KonarkWheel({
  size = 64,
  color = "#B98A3B",
  className = "",
  style,
  spin = false,
}: SvgProps & { size?: number; color?: string; spin?: boolean }) {
  const c = 50;
  const spokes = 8; // Konark wheels have 8 major spokes
  const ripple = 16;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`${className} ${spin ? "animate-spin-slow" : ""}`}
      style={style}
    >
      <g fill="none" stroke={color} strokeWidth="2.4">
        <circle cx={c} cy={c} r="46" />
        <circle cx={c} cy={c} r="38" />
        <circle cx={c} cy={c} r="7" />
        {/* beaded rim */}
        {Array.from({ length: ripple }).map((_, i) => {
          const a = (i / ripple) * 2 * Math.PI;
          return (
            <circle key={i} cx={c + 42 * Math.cos(a)} cy={c + 42 * Math.sin(a)} r="1.6" fill={color} stroke="none" />
          );
        })}
        {/* spokes with petal tips */}
        {Array.from({ length: spokes }).map((_, i) => {
          const a = (i / spokes) * 2 * Math.PI;
          const x1 = c + 8 * Math.cos(a);
          const y1 = c + 8 * Math.sin(a);
          const x2 = c + 36 * Math.cos(a);
          const y2 = c + 36 * Math.sin(a);
          const px = c + 41 * Math.cos(a - 0.12);
          const py = c + 41 * Math.sin(a - 0.12);
          const qx = c + 41 * Math.cos(a + 0.12);
          const qy = c + 41 * Math.sin(a + 0.12);
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} />
              <path d={`M ${x2} ${y2} L ${px} ${py} L ${qx} ${qy} Z`} fill={color} stroke="none" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* Pipili-style appliqué ribbon — red, marigold, green geometric patches. */
export function PipiliRibbon({ className = "", style }: SvgProps) {
  const unit = 60;
  const count = 20; // enough tiles for any viewport; svg clips
  const colors = ["#7B1E2B", "#E2A72E", "#23503F"];
  return (
    <svg aria-hidden="true" className={className} style={style} width="100%" height="14" preserveAspectRatio="none">
      {Array.from({ length: count }).map((_, i) => {
        const x = i * unit;
        const col = colors[i % 3];
        const shape = i % 3;
        if (shape === 0) {
          return <path key={i} d={`M ${x} 14 L ${x + 18} 0 L ${x + 36} 14 Z`} fill={col} />;
        }
        if (shape === 1) {
          return (
            <g key={i} fill={col}>
              <circle cx={x + 18} cy={7} r="7" />
              <circle cx={x + 42} cy={7} r="4" fill="#FBF6EC" />
            </g>
          );
        }
        return (
          <g key={i} fill={col}>
            <rect x={x + 8} y={2} width="20" height="12" />
            <path d={`M ${x + 36} 2 l 8 6 l -8 6 Z`} />
          </g>
        );
      })}
    </svg>
  );
}

/* Wave divider for the Puri (coastal) page. */
export function WaveDivider({
  color = "#7B1E2B",
  flip = false,
  className = "",
  style,
}: SvgProps & { color?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 56"
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined, ...style }}
    >
      <path
        d="M0 30 C 120 8, 240 52, 360 30 S 600 8, 720 30 S 960 52, 1080 30 S 1320 8, 1440 30 L 1440 56 L 0 56 Z"
        fill={color}
      />
    </svg>
  );
}

/* Temple skyline line for the Bhubaneswar page. */
export function TempleLineDivider({
  color = "#23503F",
  flip = false,
  className = "",
  style,
}: SvgProps & { color?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined, ...style }}
    >
      <g fill={color}>
        {[180, 480, 780, 1080, 1320].map((x, i) => {
          const h = 34 + (i % 2) * 14;
          return (
            <path
              key={x}
              d={`M ${x - 26} 64 L ${x - 26} ${64 - h * 0.45} Q ${x} ${64 - h - 14} ${x + 26} ${64 - h * 0.45} L ${x + 26} 64 Z`}
            />
          );
        })}
        <rect x="0" y="58" width="1440" height="6" />
      </g>
    </svg>
  );
}

/* Large Odia wordmark ଶ୍ରୀ ରାମ — graphic treatment, needs the Oriya font. */
export function OdiaWordmark({
  className = "",
  style,
  color,
}: SvgProps & { color?: string }) {
  return (
    <span
      aria-hidden="true"
      lang="or"
      className={`font-oriya font-semibold leading-none select-none ${className}`}
      style={{ color: color ?? "currentColor", ...style }}
    >
      ଶ୍ରୀ ରାମ
    </span>
  );
}
