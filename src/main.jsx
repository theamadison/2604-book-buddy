import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext"; // ← add this
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {" "}
        {/* ← add this */}
        <App />
      </AuthProvider>{" "}
      {/* ← and this */}
    </BrowserRouter>
  </StrictMode>,
);
