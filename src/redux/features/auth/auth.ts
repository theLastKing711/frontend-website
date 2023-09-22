import { createSlice } from '@reduxjs/toolkit'
import type { Action, Middleware, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/store';
import jwt_decode from "jwt-decode";
import { emptyCart } from '../saved-cart-items/savedCartItems';

  export interface User {
    // user: AccessToken | null;
    token: Token | null;
  }
  
  export interface Token {
    accessToken: string;
    refreshToken: string;
  }

  interface AccessToken
  { sub: number, username: string, iat: number, exp: number }

  const getTokenFromStorage = () => {
    const token = localStorage.getItem('token');

    if(token)
    {
      const parsedToken = JSON.parse(token) as Token;

      return parsedToken;
    }

    return null;
     
  }

  const removeTokenFromStorage = () => {

    const token = localStorage.getItem('token');

    console.log('removed token', token);
    
    if(token)
    {

      localStorage.removeItem('token');
    }
  }

  const setTokenInStorage = (token: Token) => {
    const jsonParsedToken = JSON.stringify(token);

    localStorage.setItem('token', jsonParsedToken);
    
  }
  
  const initialState: User = {
    token: getTokenFromStorage(),
  }

export const userSlice = createSlice({
  name: 'user',
  
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<Token>) => {

      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    }
  },
});

// if we call next(action) before getState we get state after dispatch aka new state,
//  if we use it after getState we get old state with getState
//if we call next(action) before getState we get state after dispatch aka new state,
//  if we use it after getState we get old state with getState
export const authStorageMiddleWare: Middleware<(action: Action<'addItem'>) => number, RootState> = 
  ( { dispatch, getState}) => 
  (next) => 
  (action: 
    Action<"user/saveToken" | "user/logout">) => {


  const result = next(action);
  
  if(action.type === "user/saveToken")
  {
    const savedToken = getState().user.token;

    if(savedToken)
    {
      setTokenInStorage(savedToken);
    }
  }

  if(action.type === "user/logout")
  {
      dispatch(emptyCart());
      removeTokenFromStorage();
  }

  return result;
}

export const authUserSelector = (state: RootState) => {
  const accessToken = state.user.token?.accessToken || '';
  
  return  accessToken ? jwt_decode(accessToken) as AccessToken : null;
}

export const tokenSelector = (state: RootState) => state.user.token;


// Action creators are generated for each case reducer function
export const { saveToken, logout } = userSlice.actions

export default userSlice.reducer


// removed token {"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIyLCJ1c2VybmFtZSI6InRlc3RpbmcxIiwiaWF0IjoxNjk1NDA0MTI1LCJleHAiOjE2OTU0MDQxODV9.yZX95u6FpCYEX69l0zo9WoeqEH3jYA4IoU_-edlAXG0","refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIyLCJ1c2VybmFtZSI6InRlc3RpbmcxIiwiaWF0IjoxNjk1NDA0MTI1LCJleHAiOjE2OTU0MDQxNTV9.XJU8pv5LdA67m6ZNsjrWmHY797IsUR0jcdyGykDMBlg"} auth.ts:38:12
// sex null ShopProducts.tsx:29:10
// categories filter 
// Array []
// useFilterProducts.ts:22:12
// categoriesFilter 
// Array []
// useFilterProducts.ts:24:12
// sex  null login:2421:31
// categories filter  
// Array []
// login:2421:31
// categoriesFilter  
// Array []
// login:2421:31
// categories filter 
// Array []
// useFilterProducts.ts:22:12
// categoriesFilter 
// Array []
// useFilterProducts.ts:24:12
// categories filter  
// Array []
// login:2421:31
// categoriesFilter  
// Array []
// login:2421:31
// categories filter 
// Array []
// useFilterProducts.ts:22:12
// categoriesFilter 
// Array []
// useFilterProducts.ts:24:12
// search filter <empty string> ShopProductsSideBar.tsx:69:10
// categories filter  
// Array []
// login:2421:31
// categoriesFilter  
// Array []
// login:2421:31
// search filter login:2421:31
// error <empty string> PriceFilterInput.tsx:10:10
// error login:2421:31