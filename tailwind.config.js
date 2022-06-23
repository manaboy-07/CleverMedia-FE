module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3730a3",

          secondary: "#1e3a8a",

          accent: "#1FB2A6",

          neutral: "#1f2937",

          "base-100": "#111827",

          info: "#e11d48",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: ["@emotion", require("daisyui")],
  //...
};
