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
import Login from "./pages/auth/login/Login.tsx";
import SignUp from "./pages/auth/sign-up/SignUp.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import Wishlist from "./pages/wishlist/Wishlist.tsx";
import ProtectedRoute from "./pages/auth/protected-route/ProtectedRoute.tsx";
import User from "./pages/user/User.tsx";

export const SHOP_PRODUCTS_ROUTE = "/shop-products";
export const HOME_ROUTE = "";
export const LOGIN_ROUTE = "/login";
export const USER_ROUTE = "/user";
export const WISHlIST_ROUTE = "/wishlist";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path={SHOP_PRODUCTS_ROUTE} element={<ShopProducts />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="shopping-cart" element={<ShoppingCart />} />
      <Route path="order-completed" element={<OrderCompleted />} />
      <Route
        path={WISHlIST_ROUTE}
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />
      <Route
        path="user/:id"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
