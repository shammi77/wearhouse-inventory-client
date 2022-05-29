module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0891b2",

          secondary: "#f0abfc",

          accent: "#d1d5db",

          neutral: "#f5f5f4",

          "base-100": "#FAF7F5",

          info: "#65a30d",

          success: "#10b981",

          warning: "#f87171",

          error: "#374151",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
