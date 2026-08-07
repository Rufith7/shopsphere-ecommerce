import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/product.css";
import "./styles/product-details.css";
import "./styles/cart.css";
import "./styles/wishlist.css";
import "./styles/checkout.css";
import "./styles/order-success.css";
import "./styles/footer.css";

import "react-toastify/dist/ReactToastify.css";

import App from "./App";

import { store } from "./store/store";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);