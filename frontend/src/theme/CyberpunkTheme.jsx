import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00FFFF", // Neon Cyan
      dark: "#0099CC",
      light: "#66FFFF",
    },
    secondary: {
      main: "#FF0033", // Infrared Red
      dark: "#CC002A",
      light: "#FF6666",
    },
    background: {
      default: "#121212", // Deep black
      paper: "#1C1C1C", // Slightly lighter for surfaces
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#AAAAAA",
      disabled: "#555555",
    },
    divider: "#333333",
    success: {
      main: "#00FF66", // Neon Green
    },
    info: {
      main: "#3399FF", // Electric Blue
    },
    warning: {
      main: "#FF9900", // Optional: Cyberpunk amber
    },
    error: {
      main: "#FF0033", // Reuse Infrared Red
    },
  },
  typography: {
    fontFamily: `'Orbitron', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: "uppercase" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "5px 16px",
          boxShadow: "0 0 10px rgba(0,255,255,0.3)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid #333",
        },
      },
    },
  },
});

export default theme;
