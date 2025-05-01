import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/main.css";
import Footer from "./components/footer";
import RouterBlock from "./RouterBlock";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterBlock />
    <Footer />
  </StrictMode>
);
