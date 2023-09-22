// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Token, logout, saveToken } from '../redux/features/auth/auth';
import { RootState } from "../redux/store";

const refreshTokenUrl = '/auth/getAccessToken';

export const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    // credentials: 'include',
    prepareHeaders: (headers, api) => {

        console.log("api state", api.getState());
      
        const token = (api.getState() as RootState).user.token;

        
        if(token?.accessToken) {

          headers.set("authorization", `Bearer ${token.accessToken}`);
        }
        return headers;
    }
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>
 = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  console.log('first');

  if (result?.error?.status === 401) {
      console.log('sending refresh token');
      // send refresh token to get new access token 

      const refreshToken = (api.getState() as RootState).user.token?.refreshToken;

      if  (!refreshToken)
      {
        api.dispatch(logout())
        return result;
      }
      
      const refreshTokenResult = await baseQuery({
        url: refreshTokenUrl,
        headers: {authorization: `Bearer ${refreshToken}`}
      }, api, extraOptions);
      console.log(refreshTokenResult)

      const { data } = refreshTokenResult;
      
      if (data) {
          const token = data as Token;
          const state = api.getState() as RootState;
          // store the new token 
          api.dispatch(saveToken(token))
          // retry the original query with new access token 
          result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
  }
  
  console.log('after')

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Home', 'WishList', 'ShopProduct', 'User'],
  endpoints: builder => ({})
})