import { createSlice } from '@reduxjs/toolkit'
import type { Action, Middleware, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/store';
import jwt_decode from "jwt-decode";

  export interface User {
    user: AccessToken | null;
    token: Token | null;
  }
  
  export interface Token {
    accessToken: string;
    refreshToken: string;
  }

  interface AccessToken
  { sub: number, username: string, iat: number, exp: number }

  const getUserFromStorage = () => {
    const token = localStorage.getItem('token');
    
    if(token)
    {
      const parsedToken = JSON.parse(token) as Token;
      console.log('parsed token', parsedToken);
      const decodedHeader = jwt_decode(parsedToken.accessToken);

      console.log('token', decodedHeader);

      return decodedHeader as AccessToken;
    }

    return null;
     
  }

  const getTokenFromStorage = () => {
    const token = localStorage.getItem('token');
    

    if(token)
    {
      const parsedToken = JSON.parse(token) as Token;

      return parsedToken;
    }

    return null;
     
  }

  const getRefreshTokenFromStorage = () => {
    const token = localStorage.getItem('token');
    

    if(token)
    {
      const parsedToken = JSON.parse(token) as Token;

      return parsedToken.refreshToken;
    }

    return null;
     
  }

  const setTokenInStorage = (token: Token) => {
    const jsonParsedToken = JSON.stringify(token);

    localStorage.setItem('token', jsonParsedToken);
    
  }
  
  const initialState: User = {
    user: getUserFromStorage(),
    token: getTokenFromStorage(),
  }

export const userSlice = createSlice({
  name: 'user',
  
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<Token>) => {

      state.token = action.payload;
      
  },
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
    Action<"user/saveToken">) => {

  const result = next(action);
  
  
  if(action.type === "user/saveToken")
  {
    const savedToken = getState().user.token;

    if(savedToken)
    {
      setTokenInStorage(savedToken);
    }
  }
  

  return result;
}

export const authUserSelector = (state: RootState) => state.user.user;

export const tokenSelector = (state: RootState) => state.user.token;

// Action creators are generated for each case reducer function
export const { saveToken } = userSlice.actions

export default userSlice.reducer