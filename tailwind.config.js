module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cutive: "Cutive, serif",
        "dancing-script": "Dancing Script,cursive",
        "happy-monkey": "Happy Monkey,cursive",
      },
      screens: {
        "3xl": "1920px",
      },
      backgroundImage: {
        "kiwi-hearts": "url('src/assets/img/kiwi-hearts.svg')",
        "my-valentine":
          "url('src/assets/img/undraw_love_is_in_the_air_-4-mmc 1.svg')",
        "valentine-confimed":
          "url('src/assets/img/undraw_spread_love_r-9-jb 1.svg')",
      },
    },
  },
  plugins: [],
};
