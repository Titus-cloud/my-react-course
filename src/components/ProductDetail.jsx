import React, { useState } from "react";
import shoe from "../shop-images/unisex.png";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [selectedSize, setSelectedSize] = useState("40"); // State for selected size

  // Handlers for quantity
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-10">
      {/* Product Image */}
      <div className="flex-1">
        <img
          src={shoe}
          alt="Unisex Airforce Sneakers"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Product Information */}
      <div className="flex-1">
        {/* Category */}
        <p className="text-sm uppercase text-[#45C9A1] font-semibold tracking-wide">
          Shoes
        </p>

        {/* Product Title */}
        <h1 className="text-2xl md:text-3xl font-bold mt-2">
          Unisex Airforce Sneakers
        </h1>

        {/* Product Price */}
        <p className="text-xl text-[#928E8E] font-semibold mt-3">KSh 3,500</p>

        {/* Product Description */}
        <p className="text-sm text-[#928E8E] mt-4 leading-relaxed">
          The sneaker has all sizes which fits to normal size, it is suitable
          for all weather conditions, it is light in weight making it
          comfortable for a long wear. The shoe can be worn by both gender. It
          is suitable for outdoor activities. Buy from our shop, get it
          delivered to your doorstep and slay the whole day.
        </p>

        <div className="flex justify-between align-middle">
        {/* Size Selector */}
        <div className="mt-6">
          <label
            htmlFor="size-selector"
            className="text-[#928E8E] font-semibold block mb-2"
          >
            Select Size
          </label>
          <select
            id="size-selector"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className=" w-20 border border-[#928E8E] rounded-full h-10 p-2 text-sm bg-[#fff]"
          >
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
          </select>
        </div>

        {/* Quantity Selector */}
        <div className="mt-6">
          <label
            htmlFor="quantity-selector"
            className="text-[#928E8E] font-semibold block mb-2"
          >
            Quantity
          </label>

          <div className="flex items-center gap-4 border-[#928E8E] border-solid">
            <button
              onClick={handleDecrement}
              className="px-4 py-2 bg-[#F0EFEF] rounded-md text-[#000] font-bold hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-4 py-2 bg-[#F0EFEF] rounded-md text-[#000] font-bold hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="flex-1 py-3 bg-[#45C9A1] text-[#E3F9FB] rounded-lg font-semibold ">
            Add to Cart
          </button>
          <button className="flex-1 py-3 bg-[#E3F9FB] text-[#928E8E] rounded-lg font-semibold hover:bg-gray-300">
            Save to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
