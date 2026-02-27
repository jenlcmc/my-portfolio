import { useEffect, useRef, useCallback } from 'react';
import { useWarp } from '../contexts/WarpContext';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  speed: number;
  /* Warp fields */
  angle: number;
  baseX: number;
  baseY: number;
}

const STAR_COUNT = 200;
const MAX_DEPTH = 3;

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const { warping } = useWarp();
  const warpingRef = useRef(warping);
  const warpProgressRef = useRef(0);

  useEffect(() => {
    warpingRef.current = warping;
    if (warping) warpProgressRef.current = 0;
  }, [warping]);

  const initStars = useCallback((width: number, height: number) => {
    const cx = width / 2;
    const cy = height / 2;
    starsRef.current = Array.from({ length: STAR_COUNT }, () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return {
        x,
        y,
        z: Math.random() * MAX_DEPTH,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.15 + 0.02,
        angle: Math.atan2(y - cy, x - cx),
        baseX: x,
        baseY: y,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initStars(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const { x: mx, y: my } = mouseRef.current;
      const isWarping = warpingRef.current;
      const cx = w / 2;
      const cy = h / 2;

      if (isWarping) {
        warpProgressRef.current = Math.min(warpProgressRef.current + 0.03, 1);
      } else {
        warpProgressRef.current = Math.max(warpProgressRef.current - 0.05, 0);
      }
      const warpFactor = warpProgressRef.current;

      ctx.clearRect(0, 0, w, h);

      for (const star of starsRef.current) {
        if (warpFactor > 0.05) {
          /* ── Warp mode: stars streak radially from center ── */
          const angle = Math.atan2(star.y - cy, star.x - cx);
          const warpSpeed = warpFactor * 12 * (star.z / MAX_DEPTH + 0.5);
          star.x += Math.cos(angle) * warpSpeed;
          star.y += Math.sin(angle) * warpSpeed;

          /* Wrap stars that go offscreen */
          const dist = Math.sqrt((star.x - cx) ** 2 + (star.y - cy) ** 2);
          if (dist > Math.max(w, h)) {
            star.x = cx + (Math.random() - 0.5) * 80;
            star.y = cy + (Math.random() - 0.5) * 80;
          }

          /* Draw streak */
          const streakLen = warpFactor * 30 * (star.z / MAX_DEPTH + 0.3);
          const sx = star.x - Math.cos(angle) * streakLen;
          const sy = star.y - Math.sin(angle) * streakLen;
          const grad = ctx.createLinearGradient(sx, sy, star.x, star.y);
          grad.addColorStop(0, `rgba(200, 210, 230, 0)`);
          grad.addColorStop(1, `rgba(200, 210, 230, ${star.opacity * warpFactor})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = star.size * 0.8;
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(star.x, star.y);
          ctx.stroke();
        } else {
          /* ── Normal mode ── */
          star.y -= star.speed;
          if (star.y < -10) {
            star.y = h + 10;
            star.x = Math.random() * w;
          }

          const parallax = star.z / MAX_DEPTH;
          const dx = mx * parallax * 20;
          const dy = my * parallax * 20;
          const twinkle = Math.sin(Date.now() * 0.001 * star.speed * 10 + star.x) * 0.15;
          const alpha = Math.max(0.05, Math.min(1, star.opacity + twinkle));

          ctx.beginPath();
          ctx.arc(star.x + dx, star.y + dy, star.size * (0.5 + parallax * 0.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 210, 230, ${alpha})`;
          ctx.fill();
        }
      }

      /* occasional shooting star (only in normal mode) */
      if (warpFactor < 0.1 && Math.random() < 0.002) {
        const sx = Math.random() * w;
        const sy = Math.random() * h * 0.4;
        const len = Math.random() * 80 + 40;
        const grad = ctx.createLinearGradient(sx, sy, sx + len, sy + len * 0.3);
        grad.addColorStop(0, 'rgba(0, 204, 136, 0.6)');
        grad.addColorStop(1, 'rgba(0, 204, 136, 0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + len, sy + len * 0.3);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [initStars]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />
  );
}
