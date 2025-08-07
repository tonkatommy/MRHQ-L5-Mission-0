// Importing React and ReactDOM for rendering the application.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Importing RouterProvider from react-router-dom to manage routing in the application.
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
// Import ThemeProvider from MUI to apply a custom theme across the application.
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/CyberpunkTheme.jsx";
// Importing global styles for the application.
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
