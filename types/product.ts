export interface Product {
  _id: string;
  name: string;
  _type: "product";
  slug: {
    current: string; // Slug format for SEO-friendly URLs
  };
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  price: number;
  description?: string; // Fixed typo from 'descrption' to 'description'
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  stockLevel?: number;
  category?: string;
  inventory?: number; // Add inventory to track the quantity of each product in the cart
}
