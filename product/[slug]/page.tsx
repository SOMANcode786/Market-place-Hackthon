import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      _type,
      image,
      price,
      description,
      category,
      discountPercentage,
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 text-center mt-20">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
        <Link href="/shop" className="mt-4 text-blue-500 hover:underline">
          Go back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md object-cover"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl font-sans text-gray-600">
            {product.description || "No description available"}
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold text-blue-600">
              ${product.price || "Price not available"}
            </p>
            {product.discountPercentage && (
              <p className="text-lg text-red-500">
                {product.discountPercentage}% OFF
              </p>
            )}
            {product.category && (
              <p className="text-sm text-gray-500">
                Category: {product.category}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
