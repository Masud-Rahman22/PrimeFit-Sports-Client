import { useAppSelector, useAppDispatch } from "../redux/features/hooks";
import { removeItem, updateStock } from "../redux/features/cart/cartSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/features/products/ProductsApi";
import { IProduct } from "../components/ui/featured/FeaturedSection";
const Cart = () => {
  const dispatch = useAppDispatch();
  const { data: products = [] } = useGetAllProductsQuery();
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
    Swal.fire({
      icon: "success",
      title: "Removed from Cart",
      text: "Item has been removed from your cart.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleQuantityChange = (item: any, newQuantity: number) => {
    if (newQuantity > 0) {
      const product = products?.data?.find((product : IProduct) => product.name === item.name); // Find product by name
      if (product) {
        const response = dispatch(updateStock({ id: product._id, stock: newQuantity }));
        console.log(response)
      }
    } else {
      handleRemoveItem(item._id);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.stock, 0);
  const vatRate = 0.15;
  const vatAmount = totalPrice * vatRate;
  const totalPriceWithVat = totalPrice + vatAmount;
  const allInStock = cartItems.every((item) => item.stock > 0);

  const handleCheckout = () => {
    if (allInStock) {
      navigate("/checkout");
    }
  };

  if (cartItems.length === 0) {
    return <div className="text-center text-2xl mt-10 lg:h-[60vh] ">Your cart is empty.</div>;
  }

  return (
    <div className="w-[80vw] mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left py-4 px-6 font-medium text-gray-700">Image</th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">Product Name</th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">Price</th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">Quantity</th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">Total</th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="py-4 px-6">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                </td>
                <td className="py-4 px-6 text-lg">{item.name}</td>
                <td className="py-4 px-6 text-lg">${item.price.toFixed(2)}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item._id, item.stock - 1)}
                      className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      -
                    </button>
                    <span className="px-4 text-lg">{item.stock}</span>
                    <button
                      onClick={() => handleQuantityChange(item, item.stock + 1)}
                      className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 px-6 text-lg">${(item.price * item.stock).toFixed(2)}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Price Section */}
      <div className="mt-8 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="text-right">
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <p>VAT (15%): ${vatAmount.toFixed(2)}</p>
          <p className="text-2xl font-bold">Total (including VAT): ${totalPriceWithVat.toFixed(2)}</p>
          <button
            onClick={handleCheckout}
            disabled={!allInStock} // Disable if any item is out of stock
            className={`mt-4 px-6 py-3 text-lg font-semibold rounded-lg transition-colors ${
              allInStock
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            aria-label="Proceed to checkout"
          >
            Proceed to Checkout
          </button>
          {!allInStock && <p className="text-red-500 mt-2">Some items are out of stock. Please update quantities.</p>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
