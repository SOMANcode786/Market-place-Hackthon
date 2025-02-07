"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { singleProductQuery } from "@/sanity/lib/queries"; // Query to fetch single product data
import Navbar2 from "@/components/navbar2";
import Description from "@/components/singlePage/description";
import RelatedProducts from "@/components/singlePage/relatedProducts";

const SingleProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      async function fetchProduct() {
        try {
          const fetchedProduct = await client.fetch(singleProductQuery, { id });
          setProduct(fetchedProduct);
        } catch (err) {
          console.error("Error fetching product:", err);
          setError("Failed to load product.");
        } finally {
          setLoading(false);
        }
      }
      fetchProduct();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <Navbar2 />
      <div className="w-full h-[100px] flex items-center">
        <ul className="flex items-center gap-3 md:gap-5 ml-3 md:ml-20">
          <li className="text-[16px] text-[#9F9F9F] font-[Poppins]">
            <a href="/">Home</a>
          </li>
          <li className="text-[16px] text-[#9F9F9F] font-[Poppins]">
            <a href="/shop">Shop</a>
          </li>
          <li className="text-[16px] text-black font-[Poppins]">
            {product.name}
          </li>
        </ul>
      </div>

      <div className="flex justify-center mt-10">
        <Image
          src={product.image ? product.image : "/fallback-image.jpg"}
          alt={product.name}
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="text-center mt-5">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-green-600 font-bold">${product.price}</p>
      </div>

      <Description description={product.description} />
      <RelatedProducts />
    </div>
  );
};

export default SingleProductPage;
