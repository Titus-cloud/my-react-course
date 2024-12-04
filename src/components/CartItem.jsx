import { FaRegTrashCan } from "react-icons/fa6";
import {getFilteredArray, getTotals} from "../lib/Lib"

import { useState } from "react";

export default function CartItem({
  img,
  name,
  size,
  price,
  cart,
  setCart,
  quantity,
  cartCopy,
  setCartCopy,
}) {
  function handleCartItem(action, product) {
    if (action === "increment") {
      const copy = [...cartCopy];
      copy.push(product);
      setCartCopy(copy);
    }
    if (action === "decrement") {
      const copy = [...cartCopy];
      const productIndex = copy.indexOf(product);
      let prodIndex;

      copy.find((item, index) => {
        if (item.name === name) {
          prodIndex = index;
        }
      });

      console.log(prodIndex);

      copy.splice(prodIndex, 1);
      setCartCopy(copy);
    }
    if (action === "delete") {
      // console.log(cart);
      const copy =cart && [...cart]
      const filteredCart = copy
        .filter((item) => {
          return item.name !== name})
          console.log(filteredCart);
          setCart(filteredCart);
          if(filteredCart.length === 0){
            localStorage.removeItem("cart")
            localStorage.removeItem("cartCopy")
          }
    }
  }

  return (
    <div className="flex items-center justify-between border-b py-4 group">
      {/* {console.log(cartCopy)} */}

      <div className="flex flex-1 items-center space-x-4 px-5">
        <img src={img} alt={name} className="w-[3rem] h-[4rem] object-cover" />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-500">Size: {size}</p>
        </div>
      </div>
      <div className="flex flex-1 items-center space-x-2">
        <button
          className="px-2 py-1 border rounded cursor-pointer"
          onClick={() => handleCartItem("decrement", { img, name, price })}
          disabled={
            cartCopy && getFilteredArray(cartCopy, name).length === 1
          }
        >
          -
        </button>

        <span>
          {cartCopy && cartCopy.filter((item) => item.name === name).length}
        </span>
        <button
          className="px-2 py-1 border rounded cursor-pointer"
          onClick={() => handleCartItem("increment", { img, name, price })}
        >
          +
        </button>
      </div>
      <div className="flex-1">
        <p className="text-gray-700">
          Ksh.{" "}
          {cartCopy &&
            getTotals(cartCopy, name)
              .toLocaleString()}
        </p>
      </div>
      <p
        className="text-red-600 pr-10 opacity-0 group-hover:opacity-100 cursor-pointer"
        onClick={() => handleCartItem("delete")}
      >
        <FaRegTrashCan />
      </p>
    </div>
  );
}
