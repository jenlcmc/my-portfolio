/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Modern terminal color palette
				terminal: {
					bg: "#0A0A0B",
					surface: "#1A1B23",
					border: "#2D2E3F",
					accent: "#0099CC",
					green: "#0099CC",
					purple: "#B794F6",
					yellow: "#F6E05E",
					red: "#FC8181",
					text: "#E2E8F0",
					muted: "#718096",
				},
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				mono: [
					"JetBrains Mono",
					"Fira Code",
					"Consolas",
					"Monaco",
					"Courier New",
					"monospace",
				],
			},
			fontSize: {
				xs: "0.75rem",
				sm: "0.875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "1.875rem",
				"4xl": "2.25rem",
				"5xl": "3rem",
				"6xl": "3.75rem",
				"7xl": "4.5rem",
				"8xl": "6rem",
				"9xl": "8rem",
			},
			spacing: {
				18: "4.5rem",
				88: "22rem",
			},
			backdropBlur: {
				xs: "2px",
				"3xl": "64px",
			},
			boxShadow: {
				glow: "0 0 20px rgba(0, 217, 255, 0.3)",
				"glow-lg": "0 0 40px rgba(0, 217, 255, 0.4)",
				neo: "8px 8px 0 #00D9FF",
				"neo-hover": "12px 12px 0 #00D9FF",
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
				"slide-up": "slideUp 0.6s ease-out",
				glow: "glow 2s ease-in-out infinite alternate",
				typing:
					"typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(30px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				glow: {
					"0%": { textShadow: "0 0 5px rgba(0, 217, 255, 0.5)" },
					"100%": {
						textShadow:
							"0 0 20px rgba(0, 217, 255, 0.8), 0 0 30px rgba(0, 217, 255, 0.6)",
					},
				},
				typing: {
					from: { width: "0" },
					to: { width: "100%" },
				},
				"blink-caret": {
					"from, to": { borderColor: "transparent" },
					"50%": { borderColor: "#00D9FF" },
				},
			},
			backdropBlur: {
				xs: "2px",
			},
		},
	},
	plugins: [],
};
