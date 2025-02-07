import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"] | order(_createdAt desc)[10..30]`;
export const four = groq`*[_type == "product"] | order(_createdAt desc)[2..4]`;

export const singleProductQuery = `*[_type == "product" && _id == $id][0] {
  _id,
  name,
  description,
  price,
  "image": image.asset->url
}`;
