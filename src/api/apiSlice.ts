// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from "src/redux/store";

export const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    // credentials: 'include',
    prepareHeaders: (headers, api) => {

        console.log("api state", api.getState());
      
        const token = (api.getState() as RootState).user.token;

        
        if(token && token.accessToken) {

          headers.set("authorization", `Bearer ${token.accessToken}`);
        }
        return headers;
    }
});

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)

//   if (result?.error?.originalStatus === 403) {
//       console.log('sending refresh token')
//       // send refresh token to get new access token 
//       const refreshResult = await baseQuery('/refresh', api, extraOptions)
//       console.log(refreshResult)
//       if (refreshResult?.data) {
//           const user = api.getState().auth.user
//           // store the new token 
//           api.dispatch(setCredentials({ ...refreshResult.data, user }))
//           // retry the original query with new access token 
//           result = await baseQuery(args, api, extraOptions)
//       } else {
//           api.dispatch(logOut())
//       }
//   }

//   return result
// }

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Home', 'WishList', 'ShopProduct', 'User'],
  endpoints: builder => ({})
})