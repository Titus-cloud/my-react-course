import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

import sweater from "../shop-images/knitted-sweater.png";
import shoes from "../shop-images/unisex.png";
import dress from "../shop-images/slim-banquet-dress.png";
import jeans from "../shop-images/denim-jeans.png";

export default function Cart() {
  return (
    <div className="container mx-auto py-10 flex space-x-8">
      {/* Left - Cart Items */}
      <div className="w-3/4 shadow-xl">
        <div className="border-b pb-4 flex justify-between m-4 px-5">
          <h4 className="flex-1">Product</h4>
          <h4 className="flex-1">Quantity</h4>
          <h4 className="flex-1">Price</h4>
        </div>
        <CartItem
          img={sweater}
          name="Strip Knitted Sweater"
          size="XL"
          price="KSh 2,250"
          quantity={1}
        />
        <CartItem
          img={shoes}
          name="Unisex Airforce Sneakers"
          size="40"
          price="KSh 2,000"
          quantity={1}
        />
        <CartItem
          img={dress}
          name="Slim Banquet Dress"
          size="M"
          price="KSh 10,250"
          quantity={1}
        />
        <CartItem
          img={jeans}
          name="Women Denim Jeans"
          size="L"
          price="KSh 10,250"
          quantity={1}
        />
      </div>

      {/* Right - Cart Summary */}
      <div className="w-1/3">
        <CartSummary
          subtotal="KSh 16,000"
          deliveryFee="KSh 450"
          total="KSh 16,450"
        />
      </div>
    </div>
  );
}
