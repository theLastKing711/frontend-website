import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "./services/home/homeApi";
import { cartStorageMiddleWare } from "./features/saved-cart-items/savedCartItems"
import { productsListApi } from "./services/shop-products/shopProductApi";
import { rootReducer } from "./rootReducer";
import { invoiceApi } from "./services/invoice/invoiceApi";
import { authApi } from "./services/auth/authApi";
import { authStorageMiddleWare } from "./features/auth/auth";



export const store = configureStore({
  reducer: rootReducer,
  //  devTools: import.meta.env.NODE_ENV !== "production",
  devTools: true,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .prepend(cartStorageMiddleWare, authStorageMiddleWare)
    .concat( homeApi.middleware, productsListApi.middleware ,invoiceApi.middleware, authApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;