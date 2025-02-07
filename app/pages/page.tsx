"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Navbar2 from "../components/navbar2";
import { addToCart } from "@/app/actions/action";
import Swal from "sweetalert2"; // Import SweetAlert2
import { FaTimes } from "react-icons/fa"; // Importing the 'X' icon

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get wishlist from localStorage
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products", error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Filter products that are in the wishlist
  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product._id)
  );

  const handleAddToCart = (product: Product) => {
    addToCart(product); // Add the product to the cart

    // Show success message using SweetAlert2
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500, // The notification will disappear after 1.5 seconds
    });
  };

  // Handle remove from wishlist
  const handleRemoveFromWishlist = (productId: string) => {
    // Remove product from wishlist array
    const updatedWishlist = wishlist.filter((id) => id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update localStorage
  };

  return (
    <div>
      <Navbar2 />
      <div className="w-full h-auto mt-12 flex justify-center bg-gray-100 p-4">
        <div className="w-full max-w-6xl">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Your Wishlist
          </h1>
          {loading ? (
            <div className="text-2xl text-gray-600 text-center mt-20">
              Loading...
            </div>
          ) : wishlistProducts.length === 0 ? (
            <div className="text-xl text-gray-500 text-center mt-20">
              No items in your wishlist.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {wishlistProducts.map((product) => (
                <div
                  key={product._id}
                  className="border p-4 bg-white shadow-md rounded-lg"
                >
                  <div className="relative cursor-pointer">
                    {/* X Icon for Remove */}
                    <FaTimes
                      onClick={() => handleRemoveFromWishlist(product._id)}
                      className="absolute top-2 right-2 text-red-500 cursor-pointer"
                      size={20}
                    />
                    {product.image ? (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name || "Product Image"}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-300 rounded-md flex items-center justify-center">
                        <span>No Image</span>
                      </div>
                    )}
                    <h1 className="text-lg font-semibold text-gray-800 text-center mt-2">
                      {product.name || "No Name"}
                    </h1>
                    <p className="text-lg font-semibold text-gray-800 text-center">
                      {product.price
                        ? `$${product.price}`
                        : "Price not Available"}
                    </p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-2 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
