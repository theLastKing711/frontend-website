import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


    export interface CreateInvoiceDetails {
        productId: number;
        productQuantity: number;
    }
    
    export interface CreateInvoiceDto {
        invoiceDetails: CreateInvoiceDetails[];
        appUserId: number;
    }
  

export const invoiceApi = createApi({
    reducerPath: "InvoiceApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/invoice' }),
    tagTypes: ['Invoice'],
    endpoints: (build) => ({
      checkoutItem: build.mutation<number[], CreateInvoiceDto>({
        query: (body) => ({
            url: '',
            body: body,
            method: 'POST'
            
        }),
      }),
    })
  });
  
  export const { useCheckoutItemMutation } = invoiceApi;