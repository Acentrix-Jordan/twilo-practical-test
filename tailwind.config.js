module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "header-footer": "#303940",
        "copyright-main": "#272e33",
        "banner-main": "#f2f2f5",
        "inchrya-blue": "#526466",
        "mail-main": "#adbfcc",
      },
      backgroundImage: {
        "hero-image": "url('/public/images/hero_background.png')",
      },

      colors: {
        grey: "#303940",
        yellow: "#ffdc00",
        twilo: "#adbfcc",
      },

      fontFamily: {
        cursive: ["Bebas Neue"],
      },
      flexGrow: {
        2: 2,
      },
    },
  },
  plugins: [],
};
