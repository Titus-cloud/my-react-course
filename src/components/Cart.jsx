import CartItem from "./CartItem";

export default function Cart({ cart }) {
  return (
    <div className="container mx-auto py-10 flex space-x-8">
      {/* Left - Cart Items */}
      <div className="w-3/4 shadow-xl">
        <div className="border-b pb-4 flex justify-between m-4 px-5">
          <h4 className="flex-1">Product</h4>
          <h4 className="flex-1">Quantity</h4>
          <h4 className="flex-1">Price</h4>
        </div>
        {console.log(cart)}
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <CartItem
              key={index}
              img={item.img}
              name={item.name}
              size={item.size}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        ) : (
          <p className="text-center p-5">Your cart is empty.</p>
        )}
      </div>

      {/* Right - Cart Summary */}
      {/* <div className="w-1/3">
        <CartSummary
          subtotal={`KSh ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}`}
          deliveryFee="KSh 450"
          total={`KSh ${
            cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + 450
          }`}
        />
      </div> */}
    </div>
  );
}
