import React, { useContext } from "react";
import { Context } from "../../store/EcommerceContext";

const Card = ({ id, name, price, desc = "" }) => {
  const { onSelect } = useContext(Context);
  return (
    <div
      id="card-item"
      onClick={() => {
        onSelect(id);
      }}
    >
      {name}
      <img
        src={`https://source.unsplash.com/130x130/?${name},ecommerce,electronics`}
      />
      <div>
        <span>{`₹ ${price}`} </span>
      </div>
      <div id="desc">
        <span>{`"${desc}"`}</span>
      </div>
    </div>
  );
};

export default Card;
