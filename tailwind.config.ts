import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#2A1B14",
        maroon: "#7B1E2B",
        "antique-gold": "#B98A3B",
        "deep-gold": "#7E5A14",
        marigold: "#E2A72E",
        ivory: "#FBF6EC",
        "khadi-sand": "#F0E6D2",
        "bottle-green": "#23503F",
        "sage-mist": "#E3EAE0",
        "warm-umber": "#5A4E46",
        whatsapp: "#25D366",
      },
      fontFamily: {
        heading: ["Fraunces", "Georgia", "serif"],
        body: ["Mukta", "system-ui", "sans-serif"],
        oriya: ["\"Noto Sans Oriya\"", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "14px",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(42,27,20,.12)",
        lift: "0 12px 32px rgba(42,27,20,.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          // Three gentle pulses ~8s apart (0s, ~8s, ~16s), then stops.
          "0%": { transform: "scale(1)" },
          "1.5%": { transform: "scale(1.08)" },
          "6.5%": { transform: "scale(1)" },
          "43.5%": { transform: "scale(1)" },
          "45%": { transform: "scale(1.08)" },
          "50%": { transform: "scale(1)" },
          "87%": { transform: "scale(1)" },
          "88.5%": { transform: "scale(1.08)" },
          "93.5%": { transform: "scale(1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.45s ease-out both",
        "pulse-soft": "pulse-soft 18.4s ease-in-out 1 both",
        "spin-slow": "spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
