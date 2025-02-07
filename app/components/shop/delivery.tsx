import React from "react";
import { FaTruck, FaUndo, FaLock } from "react-icons/fa"; // Importing icons from react-icons

const Delivery = () => {
  return (
    <div className="w-full h-[300px] bg-[#FAF4F4] flex flex-col md:flex-row justify-around items-center mb-8 p-4">
      {[
        {
          title: "Free Delivery",
          desc: "For all orders over $50, consectetur adipiscing elit.",
          icon: <FaTruck className="w-12 h-12 text-blue-500" />,
        },
        {
          title: "90 Days Return",
          desc: "If goods have problems, consectetur adipiscing elit.",
          icon: <FaUndo className="w-12 h-12 text-green-500" />,
        },
        {
          title: "Secure Payment",
          desc: "100% secure payment, consectetur adipiscing elit.",
          icon: <FaLock className="w-12 h-12 text-yellow-500" />,
        },
      ].map((item, index) => (
        <div
          key={index}
          className="text-center flex flex-col items-center p-4 hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg"
        >
          <div className="mb-4">{item.icon}</div>
          <h1 className="text-2xl md:text-3xl font-medium font-[Poppins]">
            {item.title}
          </h1>
          <h2 className="text-lg md:text-xl text-[#9F9F9F] font-normal font-[Poppins]">
            {item.desc}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Delivery;
