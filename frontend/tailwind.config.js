module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#00b286",
        "primary1": "#00b286",
        "button": "#fe9f45",
        "color": "#9c86c8",
        "t-bold-note-1": "#0e6017",
        "t-bold-note-2": "#4b2491",
        "t-bold-note-3": "#2d5072",
        "t-bold-note-4": "#755632",
        "t-bold-note-5": "#6c6c20",
        "t-bold-note-6": "#693327",
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
      xl: '270px',
      full: '100%'
    },
  },
  plugins: [],
}