import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const homeApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/home' }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
      getHomeData: build.query<HomeResponseDto, void>({
        query: () => '',
      }),
    })
  })



export interface HomeResponseDto {
    featuredProducts: FeaturedProductItemDto[];
    latestProducts: LatestProductItemDto[];
    bestSellerProducts: LatestProductItemDto[];
    latestFeaturedProducts: LatestProductItemDto[];
  }

  export interface LatestProductItemDto {
    id: number;
    imagePath: string;
    name: string;
    price: number;
    discount: ResponseDiscount | null;
  }
  
  interface ResponseDiscount {
    id: number;
    value: number;
  }

export interface FeaturedProductItemDto {
    id: number;
    name: string;
    price: number;
    imagePath: string;
  }
  
  export const { useGetHomeDataQuery } = homeApi;