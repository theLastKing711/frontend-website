import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


interface QueryParams {
  perPage?: string;
  categoryIds?: number[];
  rating?: string;
  prices?: string;
  search?: string;
}

export interface CustomerProducts {
    id: number;
    name: string;
    price: number;
    isBestSeller: boolean;
    discount: ResponseDiscount | null;
    averageRating: number;
  }
  
  interface ResponseDiscount {
    id: number;
    value: number;
  }

  interface CustomerProductsResponse {
    data: CustomerProducts[],
    total: number,
  }

export interface CustomerCategory {
    id: number;
    name: string;
  }
  
  export interface productRatingFilterDto {
    starsNumber: number;
    reviews: number;
  }

export interface FilterListResponse {
    categoriesList: CustomerCategory[];
    ratingsList: productRatingFilterDto[]
}

export const productsListApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/customer-product' }),
    tagTypes: ['CustomerProducts'],
    endpoints: (build) => ({
      getShopProducts: build.query<CustomerProductsResponse, QueryParams>({
        query: (params) => buildQueryParams(params),
      }),
      getFilters: build.query<FilterListResponse, void>({
        query: () => 'filters',
      }),
    })
  })

  const buildQueryParams = (params: QueryParams) => {
    let queryParamsString = '';

    const appendStart = (key: string, value: string) => {
        queryParamsString += `?${key}=${value}`;        
    }

    const appendMiddle = (key: string, value: string) => {

        queryParamsString += `&${key}=${value}`;   
        
    }

    const buildQueryItem = (key: string, value: string) => {
        if(isQueryEmpty()) {
            appendStart(key, value);
        }
        else {
            appendMiddle(key, value);
        }
    }

    const isQueryEmpty =  () => queryParamsString.length === 0;
    
    if(params.perPage) {
        buildQueryItem('perPage', params.perPage);
    }
    if(params.rating) {
        buildQueryItem('rating', params.rating);
    }
    if(params.prices) {
        buildQueryItem('prices', params.prices);
    }
    if(params.search) {
        buildQueryItem('search', params.search);
    }
    
    return queryParamsString;
    
  }
  
  
  export const { useGetShopProductsQuery, useGetFiltersQuery } = productsListApi;