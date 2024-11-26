import myLogo from "../images/logo.svg";
// import myogo from "../images/hackground.png"
import { IoIosCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <div className="flex relative">
          <img className="w-28" src={myLogo} alt="this is the logo" />
          <ul className="flex items-center hidden lg:flex">
            <li className="p-5">Home</li>
            <li className="p-5">About Us</li>
            <li className="p-5">Shop</li>
          </ul>
          <div className="bg-[#45C9A1]  h-4 absolute flex align-middle justify-center rounded-full"></div>
        </div>

        <div className="flex items-center relative md:flex hidden lg:flex">
          <div className="h-10 w-10">
            <li className="list-none text-center text-4xl  ">
              <IoIosCart />
            </li>

            <span className="flex justify-center align-middle bg-[#45C9A1] rounded-[50%]  w-[20px] absolute bottom-7 left-6 text-white  ">
              0
            </span>
          </div>
          <li className="list-none p-3">Sign Up</li>
          <button className="border-2 rounded-3xl border-black px-2">
            Log In
          </button>
        </div>
        <li className="list-none p-4 lg:hidden">
          <RxHamburgerMenu />
        </li>

        {/* cart number */}
      </div>
    </nav>
  );
}
