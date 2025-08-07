import { createBrowserRouter } from "react-router-dom";

// Global Pages
import App from "./App";
import Home from "./pages/Home/Home";

// Define the routes for the application using React Router.
// Each route corresponds to a specific page component in the application.
// The `createBrowserRouter` function is used to create a router instance with the defined routes.
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
