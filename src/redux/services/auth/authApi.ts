import { Middleware, Action } from "@reduxjs/toolkit";
import { apiSlice } from "../../../api/apiSlice";
import { RootState } from "../../../redux/store";
import { Token } from "../../../redux/features/auth/auth";

export interface SignUpDto {
  userName: string;
  password: string;
}

export interface SignInDto {
    userName: string;
    password: string;
}

const authUrl = 'auth'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<Token, SignInDto>({
        query: (body) => ({
            url: `${authUrl}/login`,
            body: body,
            method: 'POST'
        }),
    }),
    signUp: build.mutation<number[], SignUpDto>({
        query: (body) => ({
            url: `${authUrl}/sign-up`,
            body: body,
            method: 'POST'
        }),
    }),
    getAccessToken: build.query<Token, void>({
      query: (body) => ({
          url: `${authUrl}/getAccessToken`,
          body: body,
          method: 'POST' 
      }),
  }),
  }),
  overrideExisting: false
});

  //if we call next(action) before getState we get state after dispatch aka new state,
//  if we use it after getState we get old state with getState
  export const cartStorageMiddleWare: Middleware<(action: Action<'addItem'>) => number, RootState> = 
  ( { dispatch, getState}) => 
  (next) => 
  (action: 
    Action<"savedCartItems/addItem" | "savedCartItems/removeItem" | "savedCartItems/toggleItem" | "savedCartItems/emptyCart">) => {

    // console.log("action", action);

    const result = next(action);

    if(
      action.type === 'savedCartItems/addItem' ||
      action.type === 'savedCartItems/toggleItem'
      ) {
      const productsList = getState().savedCartItems.savedCartItems;

      console.log("products list", productsList);
      
      const serializedProductList = JSON.stringify(productsList);
      
      localStorage.setItem('product-cart', serializedProductList);
    }

    if(action.type === 'savedCartItems/removeItem')
    {
      const productsList = getState().savedCartItems.savedCartItems;

      if(productsList.length === 0)
      {
        localStorage.removeItem("product-cart");
      }

    }

    if(action.type === 'savedCartItems/emptyCart')
    {
      localStorage.removeItem("product-cart");
    }

    return result;

  }



  
  export const  { useSignInMutation, useSignUpMutation } = authApi;