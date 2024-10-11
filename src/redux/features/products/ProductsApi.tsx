/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from '../../api/baseApi';
type Category = string[];

// eslint-disable-next-line react-refresh/only-export-components
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
    deleteAProduct: builder.mutation<any, string>({
      query: (_id) => ({
        url: `/products/${_id}`,
        method: 'PATCH',
        body: { isDeleted: true },
      }),
    }),
    createProduct: builder.mutation<any, any>({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation<any, { _id: string; updatedProduct: any }>({
      query: ({ _id, updatedProduct }) => ({
        url: `/products/${_id}`,
        method: 'PATCH',
        body: updatedProduct,
      }),
    }),
  }),
});

export const { 
  useGetAllProductsQuery, 
  useGetSingleProductQuery, 
  useGetAllCategoriesQuery, 
  useDeleteAProductMutation, 
  useCreateProductMutation, 
  useUpdateProductMutation
} = ProductsApi;
