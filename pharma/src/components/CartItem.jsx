import React, { useContext } from "react";
import { ShopContext } from "../context/globalContext";
import { FaMinus, FaPlus } from "react-icons/fa";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="">
      <img src={productImage} className="w-56" alt={productName} />
      <div className="flex items-center flex-col p-2 text-xl justify-center">
        <p>
          <b>{productName}</b>
        </p>
        {/* <p>Price: ${price.toLocaleString()}</p> */}
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          className="removeButton"
          onClick={() => updateCartItemCount(cartItems[id] - 1, id)}
        >
          <FaMinus />
        </button>
        <span className="rounded-xl text-xl border-2 border-black p-2">
          {cartItems[id]}
        </span>
        <button
          className="addButton"
          onClick={() => updateCartItemCount(cartItems[id] + 1, id)}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
