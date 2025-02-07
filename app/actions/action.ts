import { Product } from "@/types/product"; // Ensure this path matches your file name and structure

// Function to add a product to the cart
export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingProductIndex = cart.findIndex(
    (item) => item._id === product._id
  );

  if (existingProductIndex > -1) {
    // Increment the quantity if product already exists in the cart
    cart[existingProductIndex].inventory =
      (cart[existingProductIndex].inventory || 1) + 1;
  } else {
    // Add new product with quantity 1
    cart.push({
      ...product,
      inventory: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to remove a product from the cart
export const removeFromCart = (productId: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = cart.filter((item) => item._id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to update the quantity of a product in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].inventory = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// Function to get all cart items
export const getCartItems = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};
