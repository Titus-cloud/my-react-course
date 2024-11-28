import { useState } from "react";

export default function CartItem({
  img,
  name,
  size,
  price,
  quantity,
  cartCopy,
  setCartCopy,
}) {
  function handleCartItem(action, product) {
    if (action === "increment") {
      const copy = [...cartCopy];
      copy.push(product);
      setCartCopy(copy);
      console.log(img, name, price);
    }
    if (action === "decrement"){
      const copy = [...cartCopy]
      const productIndex = copy.indexOf(product)
      copy.splice(productIndex, 1)
      setCartCopy(copy)
    }
  }

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
        <button className="px-2 py-1 border rounded cursor-pointer" onClick={()=> handleCartItem ("decrement")} disabled={cartCopy.filter(item=> item.name === name).length === 1} >-</button>
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
          
          Ksh. {cartCopy
              .filter((item) => item.price === price)
              .reduce((sum, item) => sum + item.price, 0).toLocaleString()}
        
        </p>
      </div>
    </div>
  );
}
