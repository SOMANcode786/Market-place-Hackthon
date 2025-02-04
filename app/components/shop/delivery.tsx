import React from "react";

const Delivery = () => {
  return (
    <div className="w-full h-[300px] bg-[#FAF4F4] flex flex-col md:flex-row justify-around items-center mb-8 p-4">
      {[
        {
          title: "Free Delivery",
          desc: "For all orders over $50, consectetur adipiscing elit.",
        },
        {
          title: "90 Days Return",
          desc: "If goods have problems, consectetur adipiscing elit.",
        },
        {
          title: "Secure Payment",
          desc: "100% secure payment, consectetur adipiscing elit.",
        },
      ].map((item, index) => (
        <div key={index} className="text-center">
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
