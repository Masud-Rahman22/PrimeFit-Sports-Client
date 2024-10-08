/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from '../../api/baseApi';
type Category = string[];

const ProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
    getSingleProduct: builder.query<any, string>({
      query: (_id) => ({
        url: `/products/${_id}`,
        method: 'GET',
      }),
    }),
    getAllCategories: builder.query<Category, void>({ 
      query: () => ({
        url: `/products/categories`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery, useGetAllCategoriesQuery } = ProductsApi;
