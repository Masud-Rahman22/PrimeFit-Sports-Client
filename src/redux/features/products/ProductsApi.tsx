import { baseApi } from '../../api/baseApi';

const ProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = ProductsApi;