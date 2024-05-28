import React, { useContext } from "react";
import { Context } from "../../../store/EcommerceContext";

const OrderModal = ({ order }) => {
  const { onCart } = useContext(Context);

  return (
    <div id="modalOrder">
      <dialog open>
        <div>
          <p>Order History </p>
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
            {order.map((items) => {
              console.log(items);
              return (
                <>
                  <div>
                    <div>{items.id}</div>
                    {items.order.map((item) => {
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
                    <div>{`Total Amount: ${items.total}`}</div>
                  </div>
                </>
              );
            })}
          </tbody>
        </table>
        {/* <div id="total">
          <div>Total Amount</div>
          <div>{`₹ ${total}`}</div>
        </div> */}
        <div id="closeOrder">
          <button
            onClick={() => {
              onCart("order");
            }}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default OrderModal;
