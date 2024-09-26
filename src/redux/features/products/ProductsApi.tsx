import { baseApi } from '../../api/baseApi';

const ProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
    getSingleProduct: builder.query({
      query: (_id) => ({
        url: `/products/${_id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllProductsQuery , useGetSingleProductQuery} = ProductsApi;