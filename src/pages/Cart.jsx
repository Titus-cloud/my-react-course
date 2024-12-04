import { useState, useEffect } from "react";
import { BsCartXFill } from "react-icons/bs";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { Link } from "react-router-dom";
// import {getFilteredArray, getTotals, } from "../lib/Lib"
import shop from "./Shop";

export default function Cart({ cart, setCart }) {
  const [cartCopy, setCartCopy] = useState(null);

  useEffect(() => {
    const cartCoppyItem = JSON.parse(localStorage.getItem("cartCopy"));
    const cartItem = JSON.parse(localStorage.getItem("cart"));

    if (cartCoppyItem) {
      setCartCopy(cartCoppyItem);
      return;
    } else {
      cartItem && setCartCopy([...cartItem]);
    }
  }, []);
  // Setting the items on the
  // useEffect(() => {
  //   // Create a copy of the cart when the component mounts or cart updates
  //   setCartCopy([...cart]);
  // }, []);
  useEffect(() => {
    cartCopy && localStorage.setItem("cartCopy", JSON.stringify(cartCopy));
  }, [cartCopy]);

  return cart.length === 0 ? (
    <div className="flex flex-col items-center justify-center py-10">
      <BsCartXFill size={50} className="text-gray-500" />
      <p className="text-gray-600 text-lg m-4">Your cart is empty.</p>
      <Link to="/shop">
        <button className="text-2xl bg-[#45C9A1]  rounded-full font-bold px-5">
          Shop Now
        </button>
      </Link>
    </div>
  ) : (
    <div className="container mx-auto py-10 flex space-x-8">
      {/* Left - Cart Items */}
      <div className="w-3/4 shadow-xl">
        <div className="border-b pb-4 flex justify-between m-4 px-5">
          <h4 className="flex-1">Product</h4>
          <h4 className="flex-1">Quantity</h4>
          <h4 className="flex-1">Price</h4>
        </div>
        
        {cart.map((item, index) => (
          <CartItem
            cartCopy={cartCopy}
            setCartCopy={setCartCopy}
            key={index}
            img={item.img}
            name={item.name}
            size={item.size}
            price={item.price}
            quantity={item.quantity}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
      {console.log(cartCopy)}
      {/* Right - Cart Summary */}
      <div className="w-1/3">
        <CartSummary
          subtotal={`KSh. ${
            cartCopy &&
            cartCopy.reduce((sum, item) => sum + item.price, 0).toLocaleString()
          }`}
          deliveryFee="KSh 450"
          total={`KSh. ${
            cartCopy &&
            cartCopy.reduce((sum, item) => sum + item.price, 0) + 450
          }`.toLocaleString()}
        />
      </div>
    </div>
  );
}
