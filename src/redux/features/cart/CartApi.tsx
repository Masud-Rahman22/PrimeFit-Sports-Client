/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const CartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      addToCart: builder.mutation<any, { productId: string; quantity: number }>({
        query: ({ productId, quantity }) => ({
          url: `/cart`,
          method: 'POST',
          body: {
            productId,
            quantity,
          },
        }),
      }),
      getCart: builder.query<any, void>({
        query: () => ({
          url: `/cart`,
          method: 'GET',
        }),
      }),
      removeFromCart: builder.mutation<any, string>({
        query: (productId) => ({
          url: `/cart/${productId}`,
          method: 'DELETE',
        }),
      }),
    }),
  });
  
  export const { useAddToCartMutation, useGetCartQuery, useRemoveFromCartMutation } = CartApi;
  