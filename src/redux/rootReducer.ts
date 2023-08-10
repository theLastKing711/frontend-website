import { combineReducers } from "@reduxjs/toolkit"
import { homeApi } from "./services/home/homeApi"
import { productsListApi } from "./services/shop-products/shopProductApi"
import savedCartItemsReducer from "./features/saved-cart-items/savedCartItems"

export const rootReducer = combineReducers({
    [homeApi.reducerPath]: homeApi.reducer,
    [productsListApi.reducerPath]: productsListApi.reducer,
    savedCartItems: savedCartItemsReducer
  });