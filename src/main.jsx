// Import React's StrictMode for highlighting potential problems
import { StrictMode } from "react";
// Import createRoot for rendering the app in React 18+
import { createRoot } from "react-dom/client";
// Import CSS reset for consistent styling across browsers
import "./vendor/normalize.css";
// Import main app styles
import "./index.css";
// Import the main App component
import App from "../src/components/App/App";
import { BrowserRouter } from "react-router-dom";

// --- React App Rendering Section ---
// Get the root DOM element where the React app will be mounted
createRoot(document.getElementById("root")).render(
  // Render the App component inside StrictMode
  // StrictMode helps catch potential problems in development, such as unsafe lifecycle methods, legacy API usage, and more
  // <App /> is your main React component, which contains all your app's logic and UI
  // This structure ensures your app is rendered inside the root element, and all child components benefit from StrictMode checks
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
