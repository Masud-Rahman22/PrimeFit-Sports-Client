import React from 'react';
import { useGetAllProductsQuery, useDeleteAProductMutation } from '../redux/features/products/ProductsApi';
import { IProduct } from '../components/ui/featured/FeaturedSection';

const ManageProducts = () => {
  // Fetch all products using RTK Query
  const { data: products, error, isLoading, refetch } = useGetAllProductsQuery();
  const [deleteAProduct] = useDeleteAProductMutation();

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteAProduct(productId).unwrap();
      console.log(`Product with ID ${productId} marked as deleted.`);
      refetch(); // Refetch the products after deletion
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  // Filter out products with isDeleted: true
  const filteredProducts = products?.data?.filter((product:IProduct) => !product.isDeleted);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Products</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Add Product</button>
      </div>

      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Failed to load products</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Image</th>
              <th className="border border-gray-200 px-4 py-2">Name</th>
              <th className="border border-gray-200 px-4 py-2">Category</th>
              <th className="border border-gray-200 px-4 py-2">Brand</th>
              <th className="border border-gray-200 px-4 py-2">Stock</th>
              <th className="border border-gray-200 px-4 py-2">Price</th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts?.map((product:IProduct) => (
              <tr key={product._id}>
                <td className="border border-gray-200 px-4 py-2">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                </td>
                <td className="border border-gray-200 px-4 py-2">{product.name}</td>
                <td className="border border-gray-200 px-4 py-2">{product.category}</td>
                <td className="border border-gray-200 px-4 py-2">{product.brand}</td>
                <td className="border border-gray-200 px-4 py-2">{product.stock}</td>
                <td className="border border-gray-200 px-4 py-2">${product.price.toFixed(2)}</td>
                <td className="border border-gray-200 px-4 py-2">
                  <button onClick={() => console.log('Update')} className="bg-green-400 text-white py-1 px-2 rounded mr-2">
                    ✏️
                  </button>
                  <button onClick={() => handleDeleteProduct(product._id)} className="bg-red-500 text-white py-1 px-2 rounded">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProducts;
