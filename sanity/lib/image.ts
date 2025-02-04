// lib/image.ts
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Replace these with your own values
import { dataset, projectId } from "../env";

// Initialize the image builder
const builder = createImageUrlBuilder({ projectId, dataset });

// Function to generate image URLs
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
