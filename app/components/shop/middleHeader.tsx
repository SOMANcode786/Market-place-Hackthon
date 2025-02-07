"use client";

import React, { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { BiGridSmall } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";

const MiddleHeader = () => {
  const [view, setView] = useState("grid"); // Track the current view (grid or list)
  const [resultsPerPage, setResultsPerPage] = useState(50); // Results per page
  const [sortBy, setSortBy] = useState("Default"); // Sorting option
  const [filter, setFilter] = useState(false); // Filter visibility
  const [priceRange, setPriceRange] = useState([0, 500]); // Example price range filter

  // Handle changing the view between grid and list
  const toggleView = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  // Handle changing results per page
  const handleResultsChange = (e) => {
    setResultsPerPage(e.target.value);
  };

  // Handle sorting change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle price range filter
  const handlePriceChange = (e) => {
    const { value, name } = e.target;
    const newRange = [...priceRange];
    newRange[name === "min" ? 0 : 1] = value;
    setPriceRange(newRange);
  };

  // Handle filter visibility
  const toggleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div className="w-full h-[100px] bg-[#FAF4F4] mt-16 flex justify-between items-center px-4 md:px-20">
      <div className="flex items-center gap-5">
        <RiMenu5Fill
          className="w-6 h-6 cursor-pointer"
          onClick={toggleFilter}
        />
        <span className="text-lg font-[Poppins]">Filter</span>
        <BiGridSmall className="w-7 h-7 cursor-pointer" onClick={toggleView} />
        <BsViewList className="w-6 h-6 cursor-pointer" onClick={toggleView} />
        <span className="text-base font-[Poppins]">
          Showing 1–{resultsPerPage} of 32 results
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-lg font-[Poppins]">Show</span>
        <select
          className="w-14 h-10 bg-white rounded text-center leading-10"
          value={resultsPerPage}
          onChange={handleResultsChange}
        >
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
        </select>
        <span className="text-lg font-[Poppins]">Sort by</span>
        <select
          className="text-gray-500 bg-white rounded w-20 h-10"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="Default">Default</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
          <option value="Newest First">Newest First</option>
        </select>
      </div>

      {/* Filter Section */}
      {filter && (
        <div className="absolute top-[120px] left-0 bg-white w-full max-w-6xl p-6 shadow-lg rounded-lg">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Price Range</h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                name="min"
                value={priceRange[0]}
                onChange={handlePriceChange}
                className="w-20 p-2 border rounded"
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                name="max"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-20 p-2 border rounded"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiddleHeader;
