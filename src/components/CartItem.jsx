import { useState } from "react";

export default function CartItem({ img, name, size, price, quantity , cartCopy, setCartCopy}) {
  function handleCartItem(action, product){
    if(action === "increment") {
      const copy =[...cartCopy]
      copy.push(product)
      setCartCopy(copy)
      console.log(img, name, price);
  }}

  return (
    <div className="flex items-center justify-between border-b py-4">
            {console.log(cartCopy)}

      <div className="flex flex-1 items-center space-x-4 px-5">
        <img src={img} alt={name} className="w-[3rem] h-[4rem] object-cover" />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-500">Size: {size}</p>
        </div>
      </div>
      <div className="flex flex-1 items-center space-x-2">
        <button className="px-2 py-1 border rounded cursor-pointer">-</button>
        <span>{quantity}</span>
        <button className="px-2 py-1 border rounded cursor-pointer" onClick={() => handleCartItem("increment", {img, name, price})}>+</button>
        
      </div>
      <div className="flex-1">
      <p className="text-gray-700">{price}</p>
      </div>
    </div>
  );
 
}
