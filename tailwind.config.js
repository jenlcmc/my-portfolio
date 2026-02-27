/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: 'rgb(var(--c-base) / <alpha-value>)',
          panel: 'rgb(var(--c-base-panel) / <alpha-value>)',
          surface: 'rgb(var(--c-base-surface) / <alpha-value>)',
        },
        line: {
          DEFAULT: 'rgb(var(--c-line) / <alpha-value>)',
          active: 'rgb(var(--c-line-active) / <alpha-value>)',
        },
        term: {
          green: 'rgb(var(--c-term-green) / <alpha-value>)',
          cyan: 'rgb(var(--c-term-cyan) / <alpha-value>)',
          amber: 'rgb(var(--c-term-amber) / <alpha-value>)',
          red: 'rgb(var(--c-term-red) / <alpha-value>)',
        },
        txt: {
          DEFAULT: 'rgb(var(--c-txt) / <alpha-value>)',
          dim: 'rgb(var(--c-txt-dim) / <alpha-value>)',
          bright: 'rgb(var(--c-txt-bright) / <alpha-value>)',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        reveal: 'reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        scan: 'scan 8s linear infinite',
        'pulse-slow': 'pulseSlow 2.5s ease-in-out infinite',
        'achievement-in': 'achievementIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'encounter-in': 'encounterIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glitch-once': 'glitchOnce 0.4s ease-out',
        shake: 'shake 0.4s ease-out',
        flash: 'flash 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          from: { opacity: '0', transform: 'translateY(24px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgb(var(--c-term-green) / 0.15)' },
          '50%': { boxShadow: '0 0 20px rgb(var(--c-term-green) / 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scan: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(100vh)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        achievementIn: {
          from: { opacity: '0', transform: 'translateX(40px) scale(0.95)' },
          to: { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        encounterIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        glitchOnce: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 2px)' },
          '40%': { transform: 'translate(3px, -2px)' },
          '60%': { transform: 'translate(-2px, -1px)' },
          '80%': { transform: 'translate(2px, 1px)' },
          '100%': { transform: 'translate(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-2px)' },
        },
        flash: {
          '0%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(2)' },
          '100%': { filter: 'brightness(1)' },
        },
      },
    },
  },
  plugins: [],
};
