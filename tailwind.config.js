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
        primaryC: "#048fd4",
        primaryHoverC: "#67cafb",
        secondaryC: "#6f9723",
        darkBlack: "#161d27",
      },
    },
  },
  plugins: [],
};
