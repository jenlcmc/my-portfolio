import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useWarp } from '../contexts/WarpContext';
import { useAchievements } from '../contexts/AchievementContext';

const PLANETS = [
  { id: 'hero', label: 'Home', radius: 0, speed: 0, size: 6, color: 'var(--c-orbital-sun)' },
  { id: 'about', label: 'About', radius: 20, speed: 25, size: 4, color: 'var(--c-orbital-1)' },
  { id: 'experience', label: 'Exp', radius: 30, speed: 18, size: 4.5, color: 'var(--c-orbital-2)' },
  { id: 'education', label: 'Edu', radius: 40, speed: 14, size: 3.5, color: 'var(--c-orbital-3)' },
  { id: 'projects', label: 'Proj', radius: 50, speed: 10, size: 5, color: 'var(--c-orbital-4)' },
];

/**
 * Mini solar system nav widget, fixed in the bottom-left corner.
 * Each planet = a section. Click to warp-navigate.
 */
export default function OrbitalNav() {
  const active = useActiveSection();
  const { triggerWarp } = useWarp();
  const { unlock } = useAchievements();
  const [angles, setAngles] = useState<number[]>([0, 0, 45, 90, 180]);

  useEffect(() => {
    let raf: number;
    let last = performance.now();

    const animate = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setAngles((prev) =>
        prev.map((a, i) => {
          const speed = PLANETS[i].speed;
          return (a + speed * dt) % 360;
        }),
      );
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const navigate = (id: string) => {
    triggerWarp();
    unlock('warp');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const cx = 58;
  const cy = 58;

  return (
    <div className="fixed bottom-4 left-4 z-[55] hidden lg:block" title="Orbital Navigation">
      <svg
        width="116"
        height="116"
        viewBox="0 0 116 116"
        className="opacity-60 hover:opacity-100 transition-opacity duration-500"
      >
        {/* Orbit rings */}
        {PLANETS.filter((p) => p.radius > 0).map((p) => (
          <circle
            key={`orbit-${p.id}`}
            cx={cx}
            cy={cy}
            r={p.radius}
            fill="none"
            stroke="rgb(var(--c-line) / 0.3)"
            strokeWidth="0.5"
          />
        ))}

        {/* Planets */}
        {PLANETS.map((planet, i) => {
          const angle = (angles[i] * Math.PI) / 180;
          const px = planet.radius > 0 ? cx + Math.cos(angle) * planet.radius : cx;
          const py = planet.radius > 0 ? cy + Math.sin(angle) * planet.radius : cy;
          const isActive = active === planet.id;

          return (
            <g key={planet.id}>
              {/* Glow for active */}
              {isActive && (
                <circle
                  cx={px}
                  cy={py}
                  r={planet.size + 3}
                  fill="none"
                  stroke={planet.color}
                  strokeWidth="0.5"
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    values={`${planet.size + 2};${planet.size + 5};${planet.size + 2}`}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0.2;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Planet body */}
              <circle
                cx={px}
                cy={py}
                r={planet.size}
                fill={planet.color}
                opacity={isActive ? 1 : 0.6}
                className="cursor-pointer transition-all duration-300"
                onClick={() => navigate(planet.id)}
              >
                <title>{planet.label}</title>
              </circle>

              {/* Label */}
              <text
                x={px}
                y={py + planet.size + 8}
                textAnchor="middle"
                fill="rgb(var(--c-txt-dim) / 0.5)"
                fontSize="6"
                fontFamily="monospace"
                className="pointer-events-none select-none"
              >
                {planet.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
