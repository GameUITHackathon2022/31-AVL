module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#163777",
        "button": "#fe9f45",
        "color": "#9c86c8",
      },
      boxShadow: {
        primaryBoxShadow :"5px 8px 0 0 rgb(69 106 235 / 53%)",
        buttonBoxShadow :"5px 5px 0 0 #e2a63094",
        headerShadow :"4px 5px 0px 0px rgb(69 106 235 / 40%)",
        "navbar" :"0 1px 2px 0 rgba(0,0,0,0.1)",
        box: "5px 7px 8px rgb(69 106 235 / 40%)"
      },
    },
    width: {
      sm: '1px',
      base: '200px',
      lg: '240px' ,
      xl: '270px'
    },
  },
  plugins: [],
}