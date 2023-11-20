import React from "react";
import ReactDOM from "react-dom/client";

import { CartProvider } from "./contexts/CartContext";
import "./styles/tailwind.css";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
