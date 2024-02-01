import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/globalContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className=" rounded-lg w-full m-4 flex flex-col justify-center gap-8 items-center hover:scale-105 transition duration-200 cursor-pointer">
      <Link to={`/product/${id}`}>
        <img
          className="h-48 w-48 object-cover"
          src={productImage}
          alt={productName}
        />
      </Link>
      <div className="text-center mt-2">
        <p className="font-bold">{productName}</p>
        {/* <p className="text-gray-600">${price}</p> */}
      </div>
      <button
        className="bg-gray-800 text-white text-sm px-4 py-2 mt-4 rounded-lg hover:bg-gray-600 transition duration-200"
        onClick={() => addToCart(id)}
      >
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
