
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('./components/images/background.jpg')",
        'newsLetter': "url('./components/images/newsLetImg.png')"
      },
    },
  },
  plugins: [],
}

