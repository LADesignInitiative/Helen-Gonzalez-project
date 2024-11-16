/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  purge: ["./src/**/*.astro", "./src/**/*.tsx"],
  theme: {
    extend: {
      xm: { min: "360px" },
      fontFamily: {
        primaryF: "sans-serif",
        secondaryF: "Outfit",
      },
      backgroundImage: {
        historyBG: "url('/assets/images/history-background.webp')",
        historyBG_mobile:
          "url('/assets/images/history-background-mobile.webp')",
        heroBG: "url(`/assets/images/hero-background-desk.webp`)",
      },
      colors: {
        primaryC: "#526E48",
        primaryHoverC: "#62825D",
        secondaryC: "#9EDF9C",
        darkBlack: "#161d27",
      },
    },
  },
  plugins: [],
};
