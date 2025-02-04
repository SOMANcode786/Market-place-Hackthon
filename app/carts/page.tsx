"use client";

import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/action";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-8 bg-gradient-to-tl from-blue-200 via-blue-100 to-blue-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        Your Shopping Cart
      </h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center space-x-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt="image"
                    width={100}
                    height={100}
                    className="w-20 h-20 object-cover rounded-lg border-2 border-gray-300"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.productName}
                  </h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-3 space-x-4">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Total:</h2>
            <p className="text-2xl font-bold text-gray-800">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleProceed}
            className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
