import { useState } from "react";

export default function CartItem({ img, name, size, price, quantity }) {
  const [count, setCount] = useState(1)
  function countItems(click){
    if(click === "increament") {
      setCount(count + 1); 
    } else if(click === "decreament") {
      setCount(count > 1 ? count - 1 : count); 
    }
  }
  {console.log(count);}
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex flex-1 items-center space-x-4 px-5">
        <img src={img} alt={name} className="w-[3rem] h-[4rem] object-cover" />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-500">Size: {size}</p>
        </div>
      </div>
      <div className="flex flex-1 items-center space-x-2">
        <button className="px-2 py-1 border rounded" onClick={() => countItems("decreament")}>-</button>
        <span>{count}</span>
        <button className="px-2 py-1 border rounded" onClick={() => countItems("increament")}>+</button>
        
      </div>
      <div className="flex-1">
      <p className="text-gray-700">{price}</p>
      </div>
    </div>
  );
 
}
