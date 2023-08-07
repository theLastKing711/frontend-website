import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


interface QueryParams {
  perPage?: string;
  sort: string;
  categoryIds?: string[];
  rating?: string;
  prices?: string;
  search?: string;
}

export interface CustomerProducts {
    id: number;
    imagePath: string;
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
    categories: CustomerCategory[];
    ratings: productRatingFilterDto[]
}

export const productsListApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/customer-product' }),
    tagTypes: ['CustomerProducts'],
    endpoints: (build) => ({
      getShopProducts: build.query<CustomerProductsResponse, QueryParams | void>({
        query: (params) => params ? buildQueryParams(params) : "",
      }),
      getFilters: build.query<FilterListResponse, void>({
        query: () => 'filters',
      }),
    })
  });

  const buildQueryParams = (params: QueryParams) => {


    console.log("params", params);
    
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

    const BuildArrayQueryParams = (key: string, values: string[]) => {

      values.forEach( (item, index) => {
        if(index === 0 && isQueryEmpty()) {
          appendStart(key, item)
        }
        else {
          appendMiddle(key, item);
        }
      })
    };

    const isQueryEmpty =  () => queryParamsString.length === 0;

    if(params.categoryIds && params.categoryIds.length > 0) {
      BuildArrayQueryParams('categoryIds', params.categoryIds);
    }
    
    if(params.perPage) {
        buildQueryItem('perPage', params.perPage);
    }

    if(params.sort) {
      buildQueryItem('sort', params.sort);
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