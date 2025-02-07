export interface Product {
  _id: string; // Unique identifier for the product
  name: string; // Name of the product
  _type?: "image"; // Type of product (optional if not all products are images)
  slug: {
    _type?: "slug"; // Type for slug, optional if not required
    current: string; // SEO-friendly URL slug
  };
  image?: {
    asset: {
      _ref: string; // Reference ID for the image asset
      _type: "image"; // Type indicating it's an image
    };
  };
  price: number; // Price of the product
  description?: string; // Description of the product
  discountPercentage?: number; // Discount percentage (if any)
  isFeaturedProduct?: boolean; // Flag to highlight featured products
  stockLevel?: number; // Available stock of the product
  category?: string; // Category to which the product belongs
  inventory?: number; // Quantity of the product in the cart
}
