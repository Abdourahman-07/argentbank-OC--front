import React from "react";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { createRoot } from "react-dom/client";
import "./css/main.css";
import Footer from "./components/footer";
import RouterBlock from "./RouterBlock";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterBlock />
      <Footer />
    </Provider>
  </StrictMode>
);
