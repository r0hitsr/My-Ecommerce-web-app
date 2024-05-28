import { createContext, useState } from "react";
import { PRODUCTS } from "../data";
export const Context = createContext({
  onSelect: () => {},
  onCart: () => {},
  isOpen: false,
  cart: [],
  onClose: () => {},
  order: [],
  onOrder: () => {},
  isOrder: false,
});

export default function EcommerceContext({ children }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  function handleSelect(id) {
    console.log(id);
    setCart((prev) => {
      const item = PRODUCTS.find((item) => {
        return item.id === id;
      });
      const arr = prev.filter((item) => {
        return item.id === id;
      });
      if (arr.length > 0) {
        return [
          ...prev.filter((item) => {
            return item.id !== id;
          }),
          {
            id: arr[0].id,
            name: arr[0].name,
            price: arr[0].price,
            description: arr[0].description,
            quantity: arr[0].quantity + 1,
          },
        ];
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function handleCart(mode) {
    console.log("clicked");
    console.log(mode);
    if (mode === "cart") setIsOpen(!isOpen);
    if (mode === "order") setIsOrder(!isOrder);
  }
  console.log(cart);

  function handleOrder(total) {
    setOrder((prev) => {
      return [...prev, { id: prev.length + 1, order: [...cart], total: total }];
    });
    setCart([]);
    setIsOpen(!isOpen);
  }
  console.log("Order History-", order);
  const ctxValue = {
    isOpen: isOpen,
    cart: cart,
    onSelect: handleSelect,
    onCart: handleCart,
    order: order,
    onOrder: handleOrder,
    isOrder: isOrder,
  };
  return <Context.Provider value={ctxValue}>{children}</Context.Provider>;
}
