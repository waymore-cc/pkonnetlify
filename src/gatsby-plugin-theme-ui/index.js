// const buttonColor = "text"

export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // example colors with dark mode
  colors: {
    text: "#282828",
    background: "#f4f4f4",
    menu: "#EAB740",
    primary: "#07c",
    link: "#157aff",
    logo: "#282828",
    modes: {
      dark: {
        text: "#fff",
        background: "#282828",
        menu: "#EAB740",
        primary: "#0cf",
        link: "#157aff",
        logo: "#c3c3c3",
      },
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "inherit",
    monospace: "Roboto, sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    medium: 500,
    fat: 600,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },

  //buttons
  buttons: {
    primary: {
      color: "#282828",
      position: "relative",
      paddingX: 32,
      paddingY: 10,
      zIndex: 1,
      background: "none",
      fontWeight: "bold",
      fontSize: "1.175em",
      borderWidth: "initial",
      borderStyle: "none",
      borderColor: "initial",
      borderImage: "initial",
      "::before": {
        content: '""',
        position: "absolute",
        width: "calc(100% + 3px)",
        height: "calc(100% + 3px)",
        top: "0.45em",
        left: "0.45em",
        backgroundColor: "#839eb5",
        zIndex: -1,
        transition: "0.15s ease-out",
      },
      ":hover:before": {
        top: 0,
        left: 0,
      },
      "::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: 100 + "%",
        height: 100 + "%",
        border: "solid 3px",
        borderColor: "text",
        cursor: "pointer",
      },
    },
    secondary: {
      color: "text",
      position: "relative",
      paddingX: [3, 3, 4],
      paddingY: [2, 2, 10],
      zIndex: 1,
      background: "none",
      fontWeight: ["medium", "medium", "fat"],
      fontSize: [2, 2, 3],
      borderWidth: "initial",
      borderStyle: "none",
      borderColor: "initial",
      borderImage: "initial",
      "::before": {
        content: '""',
        position: "absolute",
        width: "calc(100% + 3px)",
        height: "calc(100% + 3px)",
        top: "0.45em",
        left: "0.45em",
        // backgroundColor: "#D5D717",
        // backgroundImage:
        //   "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
        backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        zIndex: -1,
        transition: "0.15s ease-out",
      },
      ":hover:before": {
        top: 0,
        left: 0,
      },
      "::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: 100 + "%",
        height: 100 + "%",
        borderStyle: "solid",
        borderWidth: ["2px", "2px", "3px"],
        borderColor: "text",
        cursor: "pointer",
      },
    },
  },
  styles: {
    a: {
      color: "link",
    },
    li: {
      listStyleType: "none",
    },
    h1: {
      fontSize: [4, 5, 7],
    },
    h3: {
      fontSize: [2, 3, 4],
      fontWeight: "medium",
    },
  },
}
