/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        software:
          "url('src/assets/images/AboutUsPage/softwaredevelopmentoverlay.png')",
        ourvision: "url('src/assets/images/AboutUsPage/ourvisionoverlay.png')",
        ourmision: "url('src/assets/images/AboutUsPage/ourmisionoverlay.png')",
        ourmisionoverlay:
          "url('src/assets/images/AboutUsPage/ourmisionoverlay.png')",
        mre: "url('src/assets/images/AboutUsPage/mre.png')",
        cmrp: "url('src/assets/images/AboutUsPage/cmrpoverlay.png')",
      },
    },
  },
  plugins: [],
};
