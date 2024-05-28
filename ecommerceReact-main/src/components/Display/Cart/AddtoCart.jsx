import React, { useContext } from "react";
import { Context } from "../../../store/EcommerceContext";

const AddtoCart = ({ lenCart, lenOrder }) => {
  const { onCart } = useContext(Context);
  return (
    <div id="cartItm">
      <h2 id="items">Itinerary</h2>
      <span id="Cart" style={{ width: "6rem" }}>
        <div id="addToCartNum">
          <div>{lenOrder}</div>
        </div>
        <div
          id="addToCartText"
          onClick={() => {
            onCart("order");
          }}
        >
          Orders
        </div>
      </span>
      <span id="Cart">
        <div id="addToCartNum">
          <div>{lenCart}</div>
        </div>
        <div
          id="addToCartText"
          onClick={() => {
            onCart("cart");
          }}
        >
          Cart
        </div>
      </span>
    </div>
  );
};

export default AddtoCart;
