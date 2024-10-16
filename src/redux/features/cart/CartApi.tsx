/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProductWithoutTimestamps } from "../../../pages/SingleProduct";
import { baseApi } from "../../api/baseApi";

const CartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      addToCart: builder.mutation<any, { product: IProductWithoutTimestamps }>({
        query: ({ product }) => ({
          url: `/products/cart`,
          method: 'POST',
          body: {
            product,
          },
        }),
      }),
      getCart: builder.query<any, void>({
        query: () => ({
          url: `/products/cart`,
          method: 'GET',
        }),
      }),
      removeFromCart: builder.mutation<any, string>({
        query: (productId) => ({
          url: `/products/cart/${productId}`,
          method: 'DELETE',
        }),
      }),
    }),
  });
  
  export const { useAddToCartMutation, useGetCartQuery, useRemoveFromCartMutation } = CartApi;
  