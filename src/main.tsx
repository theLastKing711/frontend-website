import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./customTheme.ts";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import ShopProducts from "./pages/shop-products/ShopProducts.tsx";
import ProductDetails from "./pages/product-details/ProductDetails.tsx";
import ShoppingCart from "./pages/shopping-cart/ShoppingCart.tsx";
import OrderCompleted from "./pages/order-completed/OrderCompleted.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="shop-products" element={<ShopProducts />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="shopping-cart" element={<ShoppingCart />} />
      <Route path="order-completed" element={<OrderCompleted />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
