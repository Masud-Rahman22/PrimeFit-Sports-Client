import { useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "../../redux/features/hooks";
import { updateStock } from "../../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './Checkout.css'

interface CheckoutFormInputs {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormInputs>();
  const cartItems = useAppSelector((state) => state.cart.items); // Fetching cart items from Redux
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.stock,
    0
  );
  const vatRate = 0.15;
  const vatAmount = totalPrice * vatRate;
  const totalPriceWithVat = totalPrice + vatAmount;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOrderPlacement = (data: CheckoutFormInputs) => {
    // Placeholder for handling order placement logic
    cartItems.forEach((item) => {
      const newStock = item.stock - 1;
      dispatch(updateStock({ id: item._id, stock: newStock }));
    });

    Swal.fire({
      icon: "success",
      title: "Order Placed Successfully!",
      text: "Thank you for your order! Redirecting you to the home page...",
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(() => {
      navigate("/"); // Redirect to homepage after order placement
    }, 2000);
  };

  return (
    <div className="checkout-container w-full max-w-3xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Details Form */}
        <div className="user-details bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            User Details
          </h3>

          <form
            onSubmit={handleSubmit(handleOrderPlacement)}
            className="user-details-container"
          >
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="John Doe"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="example@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="text"
                placeholder="+12"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && <span className="error-message">{errors.phone.message}</span>}
            </div>
            <div>
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                rows={2}
                placeholder="Your address"
                {...register("address", { required: "Address is required" })}
              ></textarea>
              {errors.address && <span className="error-message">{errors.address.message}</span>}
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            Order Summary
          </h3>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border-b pb-4"
              >
                <span className="text-lg font-medium text-gray-700">
                  {item.name}
                </span>
                <span className="text-lg text-gray-700">
                  ${(item.price * item.stock).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="flex justify-between items-center text-lg font-medium text-gray-700 pt-4">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-medium text-gray-700">
              <span>VAT (15%)</span>
              <span>${vatAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-2xl font-bold text-gray-800 pt-4 border-t">
              <span>Total</span>
              <span>${totalPriceWithVat.toFixed(2)}</span>
            </div>
          </div>

          <div className="payment-method bg-white p-4 mt-8 rounded-md shadow-md">
            <h4 className="text-lg font-medium text-gray-700 mb-2">
              Payment Method
            </h4>
            <p className="text-gray-600">Cash on Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
