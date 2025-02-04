import { groq } from "next-sanity";

export const allProducts=groq`*[_type=="product"][10..30]`;
export const four = groq`*[_type=="product"][2..4]`;