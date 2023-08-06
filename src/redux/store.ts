import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "./services/home/homeApi";
import savedCartItemsReducer from "./features/saved-cart-items/savedCartItems"
import { productsListApi } from "./services/shop-products/shopProductApi";

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    [productsListApi.reducerPath]: productsListApi.reducer,
    savedCartItems: savedCartItemsReducer
    
  },
  //  devTools: import.meta.env.NODE_ENV !== "production",
  devTools: true,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({}).concat([homeApi.middleware, productsListApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;