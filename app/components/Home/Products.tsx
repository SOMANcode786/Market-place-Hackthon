"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { client } from "@/sanity/lib/client";
import { four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await client.fetch(four);
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-auto md:h-[700px] flex justify-center items-center mt-12">
      <div className="w-[80%]">
        {/* Top Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-[16px] md:text-[36px] font-bold md:font-medium mt-6">
            Top Picks For You
          </h2>
          <p className="text-[12px] md:text-[16px] font-medium mt-4 text-center">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>
        </div>

        {/* Products List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {products.map((product) => (
            <Link key={product._id} href={`/singleProduct/${product._id}`}>
              <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Image
                  src={
                    product.image
                      ? urlFor(product.image).url()
                      : "/fallback-image.jpg"
                  }
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-green-600 font-bold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Link href="/shop">
            <button className="text-[20px] font-medium border-b-2 border-black pb-3 hover:text-gray-700 transition-colors duration-300">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
