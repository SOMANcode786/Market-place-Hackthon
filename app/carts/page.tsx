"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/action";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { CgChevronRight } from "react-icons/cg";
import Link from "next/link";
import Delivery from "../components/shop/delivery";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getCartItems();
        setCartItems(items);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };
    fetchCartItems();
  }, []);

  const handleRemove = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, remove it!",
      });

      if (result.isConfirmed) {
        await removeFromCart(id);
        const updatedItems = await getCartItems();
        setCartItems(updatedItems);

        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    } catch (error) {
      console.error("Failed to remove item:", error);
      Swal.fire("Error!", "Failed to remove item from your cart.", "error");
    }
  };

  const handleQuantityChange = async (id: string, quantity: number) => {
    try {
      await updateCartQuantity(id, quantity);
      const updatedItems = await getCartItems();
      setCartItems(updatedItems);
    } catch (error) {
      console.error("Failed to update quantity:", error);
      Swal.fire("Error!", "Failed to update item quantity.", "error");
    }
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity < 10) {
      handleQuantityChange(id, product.quantity + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1) {
      handleQuantityChange(id, product.quantity - 1);
    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleProceed = async () => {
    try {
      const result = await Swal.fire({
        title: "Processing your order...",
        text: "Please wait.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Proceed",
      });

      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been placed!", "success");
        setCartItems([]);
        router.push("/checkout");
      }
    } catch (error) {
      console.error("Failed to process order:", error);
      Swal.fire("Error!", "Failed to process your order.", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/shop"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Shop
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">
              <Link href="/checkout">Checkout</Link>
            </span>
          </nav>
        </div>
      </div>

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
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-20 h-20 object-cover rounded-lg border-2 border-gray-300"
                    />
                  )}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-500">Price: ${item.price}</p>
                    <div className="flex items-center mt-3 space-x-4">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
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
                ${totalAmount.toFixed(2)}
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
      <Delivery />
    </div>
  );
};

export default CartPage;
