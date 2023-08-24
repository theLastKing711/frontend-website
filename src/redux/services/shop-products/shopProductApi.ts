import { apiSlice } from '../../../api/apiSlice';
import { isPriceSearchValid } from './../../../pages/shop-products/shop-products-side-bar/ShopProductsSideBar';


interface QueryParams {
  perPage?: string;
  sort: string;
  categoryIds?: string[];
  rating?: string;
  prices?: string;
  search?: string;
  id?: string;
}

export interface CustomerProducts {
    id: number;
    imagePath: string;
    name: string;
    price: number;
    isBestSeller: boolean;
    discount: ResponseDiscount | null;
    averageRating: number;
    isFavourite?: boolean;
  }

  export interface CustomerProductDetails extends CustomerProducts {
    totalReviews: number;
  }
  
  interface ResponseDiscount {
    id: number;
    value: number;
  }

  interface CustomerProductsResponse {
    data: CustomerProducts[],
    total: number,
    hasNextPage: boolean,
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

// export const productsListApi = createApi({
//     reducerPath: "productListApi",
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/customer-product' }),
//     tagTypes: ['CustomerProducts'],
//     endpoints: (build) => ({
//       getShopProducts: build.query<CustomerProductsResponse, QueryParams | void>({
//         query: (params) => params ? buildQueryParams(params) : "",
//       }),
//       getFilters: build.query<FilterListResponse, void>({
//         query: () => 'filters',
//       }),
//       getProduct: build.query<CustomerProductDetails, string>({
//         query: (params) => params,
//       }),
//     })
//   });

  const shopProductUrl = 'customer-product';

  export const productsListApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
      getShopProducts: build.query<CustomerProductsResponse, QueryParams | void>({
        query: (params) => params ? `${shopProductUrl}/${buildQueryParams(params)}` : `${shopProductUrl}`,
        providesTags: ['ShopProduct'],
      }),
      getFilters: build.query<FilterListResponse, void>({
        query: () => `${shopProductUrl}/filters`,
      }),
      getProduct: build.query<CustomerProductDetails, string>({
        query: (params) => `${shopProductUrl}/${params}`,
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
      console.log("params sort", params.sort);
      buildQueryItem('sort', params.sort);
    }
    
    if(params.rating) {
        buildQueryItem('rating', params.rating);
    }
    if(params.prices) {

        console.log("params prices", params.prices);
      
        if(isPriceSearchValid(params.prices)) {
          buildQueryItem('prices', params.prices);
        }
    }
    if(params.id) {
      buildQueryItem('id', params.id);
    }
    // if(params.search) {
        
    //       buildQueryItem('search', params.search);
    // }

    console.log("query params", queryParamsString);
    
    return queryParamsString;
    
  }
  
  
  export const { useGetShopProductsQuery, useGetFiltersQuery, useGetProductQuery } = productsListApi;