"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/action";
import Swal from "sweetalert2";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ShopProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]); // Wishlist state

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        if (fetchedProducts.length === 0) {
          setError("No products available.");
        }
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products", error);
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Add or remove product from the wishlist
  const toggleWishlist = (productId: string) => {
    const updatedWishlist = [...wishlist];
    const index = updatedWishlist.indexOf(productId);
    if (index === -1) {
      updatedWishlist.push(productId); // Add to wishlist
    } else {
      updatedWishlist.splice(index, 1); // Remove from wishlist
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save wishlist to localStorage
  };

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Handle adding products to the cart
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`, // Fixed template literal
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(product);
  };

  return (
    <div className="w-full h-auto mt-12 flex justify-center bg-gray-100 p-4">
      <div className="w-full max-w-6xl">
        {loading ? (
          <div className="text-2xl text-gray-600 text-center mt-20">
            Loading...
          </div>
        ) : error ? (
          <div className="text-2xl text-red-500 text-center mt-20">{error}</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="border p-4 bg-white shadow-md rounded-lg"
              >
                <Link
                  href={product.slug ? `/product/${product.slug.current}` : "#"} // Fixed dynamic link
                >
                  <div className="relative cursor-pointer">
                    {/* Product Image with Wishlist Heart */}
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

                    {/* Wishlist Icon positioned at the top right */}
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // Prevent navigating when clicking wishlist icon
                        toggleWishlist(product._id);
                      }}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-600"
                    >
                      {wishlist.includes(product._id) ? (
                        <FaHeart className="w-6 h-6" />
                      ) : (
                        <FaRegHeart className="w-6 h-6" />
                      )}
                    </button>

                    <h1 className="text-lg font-semibold text-gray-800 text-center mt-2">
                      {product.name || "No Name"}
                    </h1>
                    <p className="text-lg font-semibold text-gray-800 text-center">
                      {product.price
                        ? `$${product.price}` // Fixed template literal for price
                        : "Price not Available"}
                    </p>
                  </div>
                </Link>
                <button
                  className="mt-2 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopProducts;
