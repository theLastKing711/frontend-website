import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "./services/home/homeApi";
import { storageMiddleWare } from "./features/saved-cart-items/savedCartItems"
import { productsListApi } from "./services/shop-products/shopProductApi";
import { rootReducer } from "./rootReducer";



export const store = configureStore({
  reducer: rootReducer,
  //  devTools: import.meta.env.NODE_ENV !== "production",
  devTools: true,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .prepend(storageMiddleWare)
    .concat( homeApi.middleware, productsListApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;