/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#878600",
        "secondary": "#FFAD26",
        "neutral": "#545555",
        "hero": "#1B1B00",
        "footer": "#E8E8D8",
        "body": 'whitesmoke',
      },
      backgroundImage: (theme) => ({
        "gradient":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",

        "login-img": "url('./assets/fg.png')",
      }),
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
