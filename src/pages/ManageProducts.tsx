import { useState } from "react";
import {
  useGetAllProductsQuery,
  useDeleteAProductMutation,
} from "../redux/features/products/ProductsApi";
import { IProduct } from "../components/ui/featured/FeaturedSection";
import Modal from "../utils/Model";

const ManageProducts = () => {
  const {
    data: products,
    error,
    isLoading,
    refetch,
  } = useGetAllProductsQuery();
  const [deleteAProduct] = useDeleteAProductMutation();
  const [isFormOpen, setIsFormOpen] = useState(false); // Form visibility state
  const [newProduct, setNewProduct] = useState<IProduct>({
    name: "",
    description: "",
    category: "",
    brand: "",
    stock: 0,
    rating: 0,
    price: 0,
    image: "",
  });

  const handleDeleteProduct = async (productId: string | undefined) => {
    if (!productId) {
      console.error("Product ID is undefined");
      return;
    }
    try {
      await deleteAProduct(productId).unwrap();
      console.log(`Product with ID ${productId} marked as deleted.`);
      refetch();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const filteredProducts = products?.data?.filter(
    (product: IProduct) => !product.isDeleted
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch action to create a product
    console.log("New product:", newProduct);
    // Close form after submission
    setIsFormOpen(false);
    refetch(); // Optionally refetch products after adding
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Products</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Product
        </button>
      </div>

      {/* Modal for adding product */}
      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <form
          onSubmit={handleFormSubmit}
          className="mx-auto w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4 flex flex-col"
        >
          {/* Product Name */}
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Category and Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newProduct.category}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={newProduct.brand}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <textarea
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
              required
            />
          </div>

          {/* Stock, Rating, and Price */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-medium">Stock</label>
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="0"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-medium">Rating</label>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                value={newProduct.rating}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="0"
                max="5"
                step="0.1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-medium">Price</label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          {/* Image */}
          <div className="flex flex-col">
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleInputChange}
              className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </Modal>

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
            {filteredProducts?.map((product: IProduct) => (
              <tr key={product._id}>
                <td className="border border-gray-200 px-4 py-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {product.name}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {product.category}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {product.brand}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {product.stock}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  ${product.price.toFixed(2)}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <button
                    onClick={() => console.log("Update")}
                    className="bg-green-400 text-white py-1 px-2 rounded mr-2"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded"
                  >
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
