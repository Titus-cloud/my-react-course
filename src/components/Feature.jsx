export default function Feature({ img, span, name, price, cart, setCart }) {
  function handleAddToCart(product) {
   const cartItems = [...cart]
   cartItems.push(product)
   setCart(cartItems)
  }
  return (
    <div className=" mx-auto py-10 flex relative ">
      <div className="  w-[11rem] ">
        <div className="bg-[#F0EFEF] flex justify-center m-auto items-center h-[14rem]">
          <img
            className="w-[100%] object-cover object-center "
            src={img}
            alt="imgs"
          />
        </div>
        <div className="flex justify-between items-center py-1">
          <p className="text-center text-sm">{name}</p>
          <span className="">{span}</span>
        </div>
        <div className="flex justify-start">
          <p className="text-center">{price}</p>
        </div>
      </div>
      <button
        className="absolute bottom-[6rem] left-[] transform-translate-x-1/2 bg-[#45C9A1] text-white px-8 py-1 rounded opacity-0 hover:opacity-100 w-[11rem] "
        onClick={() => handleAddToCart({ name, price, img })}>
        Add To Cart
      </button>
      {console.log(cart)}
    </div>
  );
}
