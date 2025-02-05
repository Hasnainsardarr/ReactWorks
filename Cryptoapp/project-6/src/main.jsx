import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/ubuntu";
import { theme } from "./theme/index.js";  // Assuming theme is properly exported

import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>  {/* ✅ Pass theme as a prop here */}
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
