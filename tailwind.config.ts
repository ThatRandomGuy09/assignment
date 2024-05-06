module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#192734",
        gray: {
          "100": "#071829",
          "200": "rgba(255, 255, 255, 0.2)",
          "300": "rgba(255, 255, 255, 0.05)",
          "400": "rgba(255, 255, 255, 0.75)",
        },
        white: "#fff",
        border: "#425568",
        primary: "#00b3ff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "header-2": "Poppins",
        "motley-forces": "'Motley Forces'",
        roboto: "Roboto",
      },
      borderRadius: {
        xl: "20px",
        "11xs-3": "1.3px",
        "10xs-7": "2.7px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      sm: "14px",
      "17xl": "36px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
