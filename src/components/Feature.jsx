export default function Feature({ img, span, name, price, cart, setCart }) {
  function handleAddToCart(e, product) {
    // Check if the product already exists in the cart
    const itemExists = cart.find((item) => item.name === product.name);

    if (!itemExists) {
      // Update the cart state
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);

      // Change button state
      e.target.textContent = "Added to Cart";
      e.target.style.backgroundColor = "red";
      e.target.style.color = "white";
    } else {
      // Optional: Handle product already in cart (e.g., notify user)
      alert("This product is already in your cart.");
    }
  }

  return (
    <div className="mx-auto py-10 flex relative">
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
        className="absolute bottom-[6rem] left-[] transform-translate-x-1/2 bg-[#45C9A1] text-white px-8 py-1 rounded opacity-0 hover:opacity-100 w-[11rem]"
        onClick={(e) => handleAddToCart(e, { name, price, img })}
      >
        Add To Cart
      </button>
    </div>
  );
}
