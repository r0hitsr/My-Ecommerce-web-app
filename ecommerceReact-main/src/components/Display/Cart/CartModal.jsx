import React, { useContext } from "react";
import { Context } from "../../../store/EcommerceContext";

const CartModal = () => {
  const { onCart, cart, onOrder } = useContext(Context);
  const total = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);
  return (
    <div id="modal">
      <dialog open>
        <div>
          <p>My Cart </p>
        </div>
        <table>
          <thead>
            <th>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
            </th>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{`₹ ${item.price}`}</td>
                    <td>{item.quantity}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div id="total">
          <div>Total Amount</div>
          <div>{`₹ ${total}`}</div>
        </div>
        <div id="close">
          <button
            onClick={() => {
              onOrder(total);
            }}
          >
            Order Now
          </button>
          <button
            onClick={() => {
              onCart("cart");
            }}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default CartModal;
