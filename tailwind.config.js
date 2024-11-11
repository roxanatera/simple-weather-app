// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-background': "url('/background.jpg')",
      },
    },
  },
  plugins: [],
}
