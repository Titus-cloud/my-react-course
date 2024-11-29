import { FaRegTrashCan } from "react-icons/fa6";


export default function Feature({ img, span, name, price, cart = [], setCart }) {
  // Helper function to check if a product exists in the cart
  const getCartItem = (productName) => cart.find((item) => item.name === productName);

  // Add product to the cart if it doesn't already exist
  function handleAddToCart(product) {
    if (!getCartItem(product.name)) {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
    
  }

  // Ensure cart is an array before checking
  const isInCart = Array.isArray(cart) && Boolean(getCartItem(name));

  return (
    <div className="mx-auto py-10 flex relative group">
      <div className="w-[11rem]">
        {/* Product Image */}
        <div className="bg-[#F0EFEF] flex justify-center m-auto items-center h-[14rem]">
          <img
            className="w-[100%] object-cover object-center"
            src={img}
            alt={name}
          />
        </div>

        {/* Product Details */}
        <div className="flex justify-between items-center py-1">
          <p className="text-center text-sm">{name}</p>
          <span>{span}</span>
        </div>
        <div className="flex justify-start">
          <p className="text-center">Ksh. {price.toLocaleString()}</p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        className={`absolute bottom-[6rem] px-8 py-1 rounded w-[11rem] 
          ${isInCart ? "bg-red-500 text-white" : "bg-[#45C9A1] text-white"}
          opacity-0 group-hover:opacity-100`}
        onClick={() => handleAddToCart({ name, price, img })}
      >
        {isInCart ? "Added to Cart" : "Add To Cart"}
      </button>
    </div>
  );
}
