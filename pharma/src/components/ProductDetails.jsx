import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/globalContext";
import { PRODUCTS } from "./Products";

export const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  // Find the product with the given ID
  const product = PRODUCTS.find((p) => p.id === Number(id));

  // If the product doesn't exist, return an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  // If the product exists, render its details
  const { productName, description, productImage, price } = product;

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center m-50">
        <img
          src={productImage}
          alt={productName}
          className="w-80 h-50px"
        />
      </div>

      {/* <div className="p-4 min-w-400">
        <h1 className="text-2xl mb-4 -mt-120">{productName}</h1>
        <div className="mt-4 ml-10 text-18">
          <p className="my-2"><b>ID:</b> {id}</p>
          <p className="my-2"><b>Price:</b> ${price}</p>
          <div className="my-2 max-w-500">
            <b>Description:</b>
            <br />
            <div className="whitespace-pre-wrap">{description}</div>
          </div>
        </div>
      </div> */}
      
      <button
        className="bg-gray-800 text-white text-sm px-4 py-2 mt-4 rounded-lg hover:bg-gray-600 transition duration-200"
        onClick={() => addToCart(id)}
      >
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
