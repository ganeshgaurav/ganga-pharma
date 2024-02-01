import React, { useContext } from "react";
import { ShopContext } from "../context/globalContext";
import { PRODUCTS } from "./Products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pt-[60px]">
      <div>
        <h1 className="text-3xl font-bold pb-8">Your Cart Items</h1>
      </div>
      <div className="flex flex-col space-y-6">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="flex flex-col items-center mt-8">
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="p-6 flex items-center h-12 text-lg bg-gray-900 text-white rounded-lg"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
            <button
              className="w-36 h-12 text-lg bg-gray-900 text-white rounded-lg"
              onClick={() => {
                checkout();
                navigate("/contact", { state: { cartItems } });
                // navigate("/contact");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-3xl font-bold mt-8">Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
