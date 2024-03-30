// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "40rem",
      },
      screen: {
        xs: "250px",
      },
      fontSize: {
        "10xl": "10rem", // Custom text size
        "11xl": "11rem", // Additional custom text size if needed
        // Add more custom text sizes as needed
      },
    },
  },
  plugins: [],
};
