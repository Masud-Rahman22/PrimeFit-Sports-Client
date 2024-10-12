/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Swal from "sweetalert2";
import {
  useGetAllProductsQuery,
  useDeleteAProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
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
  const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<
    string | undefined
  >(undefined);
  const [newProduct, setNewProduct] = useState<IProduct>({
    name: "",
    description: "",
    category: "",
    brand: "",
    stock: 0,
    rating: 0,
    price: 0,
    image: "",
    isDeleted: false,
  });

  const handleDeleteProduct = async (productId: string | undefined) => {
    if (!productId) {
      console.error("Product ID is undefined");
      return;
    }

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await deleteAProduct(productId).unwrap();
        if (response.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
          refetch();
        } else {
          console.error("Failed to delete product:", response.error);
          Swal.fire({
            title: "Error!",
            text: response.error || "Failed to delete the product.",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Failed to delete product:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the product.",
          icon: "error",
        });
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]:
        e.target.name === "stock" ||
        e.target.name === "rating" ||
        e.target.name === "price"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData = { ...newProduct, isDeleted: false };

    if (isEditing && selectedProductId) {
      try {
        await updateProduct({
          _id: selectedProductId,
          updatedProduct: productData,
        }).unwrap();
        Swal.fire("Updated!", "Product has been updated.", "success");
      } catch (error: any) {
        console.error("Failed to update product:", error);
        Swal.fire(
          "Error!",
          error.data?.message || "Failed to update product.",
          "error"
        );
      }
    } else {
      try {
        await createProduct(productData).unwrap();
        Swal.fire("Created!", "New product has been added.", "success");
      } catch (error: any) {
        console.error("Failed to create product:", error);
        Swal.fire(
          "Error!",
          error.data?.message || "Failed to create product.",
          "error"
        );
      }
    }

    setIsFormOpen(false);
    setIsEditing(false);
    setSelectedProductId(undefined);
    refetch();
  };

  const handleUpdateProduct = (product: IProduct) => {
    setSelectedProductId(product._id);
    setNewProduct(product);
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const filteredProducts = products?.data?.filter(
    (product: IProduct) => !product.isDeleted
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Products</h2>
        <button
          onClick={() => {
            setIsFormOpen(true);
            setIsEditing(false);
            setNewProduct({
              name: "",
              description: "",
              category: "",
              brand: "",
              stock: 0,
              rating: 0,
              price: 0,
              image: "",
              isDeleted: false,
            });
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Product
        </button>
      </div>

      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <form
          onSubmit={handleFormSubmit}
          className="mx-auto w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4 flex flex-col"
        >
          {/* Form Fields */}
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newProduct.category}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
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
                className="border p-2 rounded-md w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <textarea
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="border p-2 rounded-md w-full"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
                min="0"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                value={newProduct.rating}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
                min="0"
                max="5"
                step="0.1"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleInputChange}
              className="border p-2 rounded-md w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            {isCreating || isUpdating
              ? "Saving..."
              : isEditing
              ? "Update Product"
              : "Submit"}
          </button>
        </form>
      </Modal>

      {/* Products Table */}
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Failed to load products</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-200 mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Brand</th>
              <th className="border p-2">Stock</th>
              <th className="border p-2">Rating</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts?.map((product: IProduct) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="border p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-16 object-cover"
                  />
                </td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2">{product.brand}</td>
                <td className="border p-2">{product.stock}</td>
                <td className="border p-2">{product.rating}</td>
                <td className="border p-2">${product.price.toFixed(2)}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleUpdateProduct(product)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
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
