import { combineReducers } from "@reduxjs/toolkit"
import { homeApi } from "./services/home/homeApi"
import { productsListApi } from "./services/shop-products/shopProductApi"
import  userSliceReducer  from "./features/auth/auth";
import savedCartItemsReducer from "./features/saved-cart-items/savedCartItems"
import { invoiceApi } from "./services/invoice/invoiceApi";
import { authApi } from "./services/auth/authApi";
import { productFavouriteApi } from "./services/product-favourite/productFavouriteApi";
import { userApi } from "./services/user/userApi";

export const rootReducer = combineReducers({
    [homeApi.reducerPath]: homeApi.reducer,
    [productsListApi.reducerPath]: productsListApi.reducer,
    [invoiceApi.reducerPath]: invoiceApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productFavouriteApi.reducerPath]: productFavouriteApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    savedCartItems: savedCartItemsReducer,
    user: userSliceReducer
  });