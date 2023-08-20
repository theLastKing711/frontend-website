import { apiSlice } from "../../../api/apiSlice";


const homeUrl = 'home';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const homeApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getHomeData: build.query<HomeResponseDto, void>({
      query: () => `${homeUrl}`,
    }),
  }),
  overrideExisting: false
});


// export const homeApi = createApi({
//     reducerPath: "homeApi",
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/home' }),
//     tagTypes: ['Post'],
//     endpoints: (build) => ({
//       getHomeData: build.query<HomeResponseDto, void>({
//         query: () => '',
//       }),
//     })
//   })



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
    quantity: number;
    isFavourite?: boolean;
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
    isFavourite?: boolean;
  }
  
  export const { useGetHomeDataQuery } = homeApi;