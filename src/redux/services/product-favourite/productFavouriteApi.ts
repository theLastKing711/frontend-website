import { apiSlice } from "../../../api/apiSlice";
import { LatestProductItemDto } from "../home/homeApi";

const prodcutFavouriteUrl = 'product-favourite';

export const productFavouriteApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        toggleFavouriteProduct: build.mutation<LatestProductItemDto, favouriteProductRequest>({
            query: (body) => ({
                url: `${prodcutFavouriteUrl}`,
                body: body,
                method: 'POST'
            }),
            invalidatesTags: ['Home', 'WishList', 'ShopProduct'],
        }),
        wishList: build.query<WishListResponseDto[], void>({
            query: () => `${prodcutFavouriteUrl}`,
            providesTags: ['WishList'],
        }),
    }),
    overrideExisting: false
});

// export interface LatestProductItemDto {
//     id: number;
//     createdAt: Date;
//     productId: number;
//     appUserId: number; 
// }

interface favouriteProductRequest {
    productId: number
}

export interface WishListResponseDto {
    id: number;
    imagePath: string;
    name: string;
    price: number;
    isBestSeller: boolean;
    discount: ResponseDiscount | null;
}

    interface ResponseDiscount {
    id: number;
    value: number;
}
  

export const { useToggleFavouriteProductMutation, useWishListQuery } = productFavouriteApi;