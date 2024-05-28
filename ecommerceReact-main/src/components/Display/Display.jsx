import React, { useContext } from "react";
import Card from "./Card";
import { PRODUCTS } from "../../data";
import { Context } from "../../store/EcommerceContext";
import CartModal from "./Cart/CartModal";
import AddtoCart from "./Cart/AddtoCart";
import OrderModal from "./Order/OrderModal";

const Display = () => {
  const { isOpen, cart, order, isOrder } = useContext(Context);

  return (
    <div id="display">
      {isOpen && <CartModal />}
      {isOrder && <OrderModal order={order} />}
      <AddtoCart lenCart={cart.length} lenOrder={order.length} />
      <div id="card">
        {PRODUCTS.map((item) => {
          return (
            <>
              <Card
                id={item.id}
                name={item.name}
                price={item.price}
                desc={item.description}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Display;
