import { useParams } from "react-router-dom";
import { useGetSingleProductQuery, useUpdateProductMutation } from "../redux/features/products/ProductsApi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Rating from "react-rating";
import "react-photo-view/dist/react-photo-view.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useAppDispatch } from "../redux/features/hooks";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const RatingComponent: any = Rating;
  const { data, error, isLoading } = useGetSingleProductQuery(id as string);
  const [updateProduct] = useUpdateProductMutation(); // Use mutation to update product
  const dispatch = useAppDispatch();
  const product = data?.data;

  // Local state for stock management
  const [stock, setStock] = useState<number>(0);

  // Set stock initially when the product data is loaded
  useEffect(() => {
    if (product?.stock) {
      setStock(product.stock);
    }
  }, [product]);

  const handleAddToCart = async () => {
    if (stock > 0) {
      try {
        // Prepare cart item
        const cartItem = {
          _id: product._id,
          name: product.name,
          price: product.price,
          stock: 1, // Add 1 unit of stock to cart
          image: product.image,
        };

        // Dispatch addToCart action
        dispatch(addToCart(cartItem));

        // Reduce stock in the database and update the UI
        const updatedStock = stock - 1;
        const updatedProduct = { ...product, stock: updatedStock };

        // Update the stock in the database
        await updateProduct({ _id: product._id, updatedProduct });

        // Update local state immediately
        setStock(updatedStock);

        // Show success message
        Swal.fire({
          icon: "success",
          title: "Added to Cart!",
          text: `${product.name} has been added to your cart.`,
          showConfirmButton: false,
          timer: 1500,
        });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to add the product to the cart.",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Out of Stock!",
        text: "Sorry, this product is currently out of stock.",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  return (
    <div className="w-[70vw] h-[80vh] mx-auto p-8 bg-white rounded-lg mt-10 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Image Section */}
        <PhotoProvider>
          <PhotoView src={product?.image}>
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full h-full object-contain rounded-lg cursor-pointer"
            />
          </PhotoView>
        </PhotoProvider>

        {/* Product Details Section */}
        <div className="flex flex-col justify-between h-full">
          <div className="mb-5">
            <h2 className="text-4xl font-bold mb-4">{product?.name}</h2>
            <p className="text-lg text-gray-700 mb-5">{product?.description}</p>
            <p className="text-2xl font-semibold text-[#2b2b2b] mb-4">
              ${product?.price}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Brand: {product?.brand}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Category: {product?.category}
            </p>
            <p className="text-lg text-gray-600 mb-2">In Stock: {stock}</p>{" "}
            {/* Use local stock state */}
            {/* Rating Section */}
            <div className="flex items-center mb-2">
              <span className="text-lg mr-2">Rating: </span>
              <RatingComponent
                emptySymbol={<FaRegStar className="text-yellow-500" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
                initialRating={product?.rating}
                readonly
              />
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`${
              stock <= 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#2b2b2b] hover:bg-zinc-500"
            } text-white text-lg px-6 py-3 rounded-lg transition lg:mb-24`}
            disabled={stock <= 0} // Button disables immediately when stock reaches 0
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
