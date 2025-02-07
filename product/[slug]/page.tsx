import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      _type,
      image,
      price,
      description,
      category,
      discountPercentage
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params; // Removed unnecessary await
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

  const discountedPrice = product.discountPercentage
    ? product.price - (product.price * product.discountPercentage) / 100
    : product.price;

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
          <p className="text-xl text-gray-600">
            Price: ${discountedPrice.toFixed(2)}
            {product.discountPercentage && (
              <span className="ml-2 text-sm text-red-500">
                (Discount {product.discountPercentage}%)
              </span>
            )}
          </p>
          {product.description && (
            <p className="text-md text-gray-500">{product.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
