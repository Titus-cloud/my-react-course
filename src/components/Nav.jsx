import myLogo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Cart from "./Cart";

export default function Nav({ cart }) {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center content-center relative z-10">
        <div className="flex relative ">
          <Link to="/">
            <img className="w-28" src={myLogo} alt="this is the logo" />
          </Link>
          <ul className="flex items-center hidden lg:flex">
            <Link to="/">
              <li className="p-5">Home</li>
            </Link>
            <Link to="/">
              <li className="p-5">About Us</li>
            </Link>
            <Link to="shop">
              <li className="p-5">Shop</li>
            </Link>
          </ul>
          <div className="bg-[#45C9A1]  h-4 absolute flex align-middle justify-center rounded-full"></div>
        </div>

        <div className="flex items-center relative md:flex hidden lg:flex">
          <div className="h-10 w-10">

            {/* Come and update the path */}
            <Link to="cart">
              <li className="list-none text-center text-4xl  ">
                <IoIosCart />
              </li>
            </Link>
            <span className="flex justify-center align-middle bg-[#45C9A1] rounded-[50%]  w-[20px] absolute bottom-7 left-6 text-white  cursor-pointer">
              {cart && cart.length}
            </span>
          </div>
          <Link to="sign">
            <li className="cursor-pointer list-none p-3">Sign Up</li>
          </Link>
          <Link to="login">
            {" "}
            <button className="border-2 rounded-3xl border-black px-2">
              Log In
            </button>
          </Link>
        </div>
        <li className="list-none p-4 lg:hidden">
          <RxHamburgerMenu />
        </li>

        {/* cart number */}
      </div>
    </nav>
  );
}
