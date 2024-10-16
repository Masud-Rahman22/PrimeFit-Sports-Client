// import { ObjectId } from '../types/types';
// import { removeItem, updateStock } from '../redux/features/cart/cartSlice';
import { useGetCartQuery } from '../redux/features/cart/CartApi';
import { useAppDispatch } from '../redux/features/hooks';

const Cart = () => {
  // const dispatch = useAppDispatch();
  const {data:cartItems} = useGetCartQuery()
  console.log(cartItems)

  // const handleRemoveItem = (id: ObjectId) => {
  //   dispatch(removeItem(id));
  // };

  // const handleUpdateStock = (id: ObjectId, stock: number) => {
  //   dispatch(updateStock({ id, stock }));
  // };

  // const totalAmount = cartItems.reduce((total, item) => total + item.price * item.stock, 0);

  return (
    // <div>
    //   <h1>Shopping Cart</h1>
    //   {cartItems.length === 0 ? (
    //     <p>Your cart is empty.</p>
    //   ) : (
    //     <div>
    //       <table>
    //         <thead>
    //           <tr>
    //             <th>Product</th>
    //             <th>Quantity</th>
    //             <th>Price</th>
    //             <th>Total</th>
    //             <th>Actions</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {cartItems.map(item => (
    //             <tr key={item._id}>
    //               <td>{item.name}</td>
    //               <td>
    //                 <input
    //                   type="number"
    //                   value={item.stock}
    //                   onChange={e => handleUpdateStock(item._id, Number(e.target.value))}
    //                 />
    //               </td>
    //               <td>${item.price}</td>
    //               <td>${(item.price * item.stock).toFixed(2)}</td>
    //               <td>
    //                 <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //       <div>Total Amount: ${totalAmount.toFixed(2)}</div>
    //     </div>
    //   )}
    // </div>
    <div>

    </div>
  );
};

export default Cart;
