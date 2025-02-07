import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import dynamic from "next/dynamic";
import { Mail, Lock, UserPlus, LogIn, LogOut, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const SignInButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignInButton),
  { ssr: false }
);
const SignOutButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignOutButton),
  { ssr: false }
);

const Account = () => {
  const { user } = useUser(); // Get the user info from Clerk

  // Simulated product list, you can fetch this from an API or state
  const products = [
    { id: 1, name: "Product 1", price: "$50" },
    { id: 2, name: "Product 2", price: "$80" },
    { id: 3, name: "Product 3", price: "$100" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] max-w-4xl flex flex-col md:flex-row justify-between items-center gap-10"
      >
        {/* Login Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-5 flex items-center gap-2">
            <LogIn size={28} /> Log In
          </h2>

          <SignedOut>
            <SignInButton>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-300 mb-6">
                Sign In 
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div>
              <div className="flex items-center gap-2">
                <UserPlus size={20} />
                <span className="text-gray-800">Welcome, {user?.email}</span>
              </div>
            </div>
        
            <button className="w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition duration-300 mb-6">
              You are signed in!
            </button>
            <SignOutButton>
              <button className="w-full bg-red-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-red-700 transition duration-300 flex items-center justify-center gap-2">
                <LogOut size={20} /> Sign Out
              </button>
            </SignOutButton>
             
          </SignedIn>

          {/* Product List Section - Only visible when signed in */}
          <SignedIn>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                <ShoppingCart size={24} /> Shop Items
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-700">{product.name}</h4>
                    <p className="text-gray-600">{product.price}</p>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </SignedIn>

          {/* Login Fields */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-gray-700 font-medium flex items-center gap-2"
            >
              <Mail size={20} /> Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-gray-700 font-medium flex items-center gap-2"
            >
              <Lock size={20} /> Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center mb-5">
            <input type="checkbox" id="remember" className="w-5 h-5" />
            <label htmlFor="remember" className="ml-2 text-gray-600">
              Remember me
            </label>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Log In
          </button>

          <p className="text-center mt-4 text-sm text-gray-500">
            <a href="#" className="text-blue-600 hover:underline">
              Lost your password?
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300 h-full"></div>

        {/* Register Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-5 flex items-center gap-2">
            <UserPlus size={28} /> Register
          </h2>

          <div className="mb-4">
            <label
              htmlFor="register-email"
              className="text-gray-700 font-medium flex items-center gap-2"
            >
              <Mail size={20} /> Email Address
            </label>
            <input
              type="email"
              id="register-email"
              name="register-email"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <p className="text-sm text-gray-600 mb-3">
            A link to set a new password will be sent to your email address.
          </p>

          <p className="text-sm text-gray-600 mb-5">
            Your personal data will be used to support your experience
            throughout this website, manage access to your account, and for
            other purposes described in our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              privacy policy
            </a>
            .
          </p>

          <button className="w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition duration-300">
            Register
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Account;
