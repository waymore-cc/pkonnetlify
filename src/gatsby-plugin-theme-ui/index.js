export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // example colors with dark mode
  colors: {
    text: "#282828",
    background: "#f4f4f4",
    menu: "#046e55",
    primary: "#07c",
    link: "#157aff",
    logo: "#282828",
    brand: "#046e55",
    modes: {
      dark: {
        text: "#f4f4f4",
        background: "#282828",
        menu: "#046e55",
        primary: "#0cf",
        link: "#157aff",
        logo: "#c3c3c3",
        brand: "#046e55",
      },
    },
  },
  fonts: {
    body: "-apple-system, sans-serif",
    heading: "Helvetica Neue",
    monospace: "Quattrocento Sans, sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    thin: 300,
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
      paddingY: [12, 12, 12],
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
    cta: {
      color: "background",
      position: "relative",
      paddingX: [32, 32, 32],
      paddingY: [10, 10, 10],
      zIndex: 1,
      bg: "text",
      fontWeight: 300,
      borderWidth: ["1px", "1px", "2px"],
      borderColor: "text",
      borderStyle: "solid",
      borderImage: "initial",
      fontSize: [3, 4, 4],
      cursor: "pointer",
      transition: "0.15s ease-in-out",
      ":hover": {
        color: "text",
        bg: "transparent",
        fontWeight: 300,
        transition: "0.15s ease-in-out",
      },
    },
  },
  styles: {
    a: {
      color: "link",
      textDecoration: "none",
    },
    p: {
      fontSize: 3,
    },
    li: {
      listStyleType: "none",
    },
    h1: {
      fontSize: [6, 7, 80],
    },
    h2: {
      fontSize: [4, 5, 6],
    },
    h3: {
      fontSize: [3, 4, 5],
      fontWeight: "bold",
    },
  },
}
