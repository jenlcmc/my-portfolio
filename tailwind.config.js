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
					accent: "#00D9FF",
					green: "#00D9FF",
					purple: "#B794F6",
					yellow: "#F6E05E",
					red: "#FC8181",
					text: "#E2E8F0",
					muted: "#718096",
				},
			},
			fontFamily: {
				mono: [
					"JetBrains Mono",
					"Fira Code",
					"Consolas",
					"Monaco",
					"Courier New",
					"monospace",
				],
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
