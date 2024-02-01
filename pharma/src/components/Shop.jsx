import React from "react";
import { PRODUCTS } from "./Products";
import { Product } from "./Product";
import logo from "../assets/meds.avif";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <img className="header h-80 w-full object-cover mx-auto" src={logo} alt="Logo" />
        {/* <h1 className="text-6xl text-center">Products</h1> */}
      </div>

      <div className="products grid grid-cols-1 md:grid-cols-3 gap-4">
        {PRODUCTS.map((product) => (
          <div className="bg-white">
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
