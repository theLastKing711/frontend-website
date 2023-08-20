import { createSlice } from '@reduxjs/toolkit'
import type { Action, Middleware, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/store';

  export interface User {
    user: User | null;
    token: Token | null;
  }
  
  export interface Token {
    accessToken: string;
  }

  const getUserFromStorage = () => {
    const user = localStorage.getItem('user');
    

    if(user)
    {
      const parsedUser = JSON.parse(user) as User;

      return parsedUser;
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

  const setUserInStorage = (user: User) => {
    const jsonParsedUser = JSON.stringify(user);

    localStorage.setItem('user', jsonParsedUser);
    
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
    saveUser: (state, action: PayloadAction<User>) => {

        console.log("action payload", action.payload);

        state.user = action.payload;
        
    },
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
    Action<"user/saveUser" | "user/saveToken">) => {

  const result = next(action);
  
  if(action.type === "user/saveUser")
  {
    const savedUser = getState().user.user?.user;

    console.log("saved user", savedUser);

    if(savedUser)
    {
      setUserInStorage(savedUser);
    }
  }
  
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
export const { saveUser, saveToken } = userSlice.actions

export default userSlice.reducer