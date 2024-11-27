import { useState, useEffect } from "react";

export default function CartSummary({ subtotal, deliveryFee, total }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h3 className="text-lg font-bold mb-4">Cart Summary</h3>
      <div className="space-y-3">
        <p className="text-sm">Have a promo code? Apply here</p>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Promo Code (optional)"
            className="border p-2 flex-1 rounded-md"
          />
          <button className="bg-[#45C9A1] text-white px-4 py-2 rounded-md">
            Apply
          </button>
        </div>
        <div className="flex justify-between text-[#928E8E] ">
          <p>Subtotal</p>
          <p>{subtotal}</p>
        </div>
        <div className="flex justify-between text-[#928E8E]">
          <p>Delivery Fee</p>
          <p>{deliveryFee}</p>
        </div>
        <div className="flex justify-between text-black font-bold">
          <p>Total</p>
          <p>{total}</p>
        </div>
        <button className="bg-[#45C9A1] text-white w-full py-2 rounded-md mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
}
