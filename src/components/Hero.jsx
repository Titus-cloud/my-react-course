import myBcolor from "../images/hero-background.png";
import myBimg from "../images/hero-image.png";
import { Link } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import shop from "../pages/Shop"

export default function Hero() {
  return (
    <div className="container mx-auto flex justify-between">
      {/* Herro left */}
      <div className="flex-1 pt-20">
        {/* heading  */}
        <div>
          <h1 className="font-medium text-4xl pr-[5em]">
            Choose the look that <span className="text-[#45C9A1]">suits</span>{" "}
            you best
          </h1>
        </div>
        <div>
          <p className="pr-[4.32em]">
            Every day is a fashion show & the world is your runway.Clozzet will
            elevate your wardrobe with the best collections. Be exclusive, Be
            Devine, Be yourself. Explore outfits that will make you comfortably
            beautiful.True style never dies.
          </p>
        </div>
        <div className="flex align-middle pt-5 gap-10">
         <Link to="shop" > <button className="bg-[#45C9A1] text-[#F0EFEF] w-32 h-10 font-bold text-sm rounded-3xl">
            Shop Now
          </button></Link>
          <button className="text-[#45C9A1] bg-[#fff] text-sm font-bold drop-shadow-md w-32 rounded-3xl">
            About Us
          </button>
        </div>
        <div className="pt-5 relative w-80">
          {/* input part */}
          <div className="relative pb-1">
            <input
              className="drop-shadow-md w-full h-10 pl-10 rounded-3xl outline-none"
              type="text"
              placeholder="Search"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#928E8E] text-xl">
              <HiMagnifyingGlass />
            </div>
          </div>
        </div>
      </div>

      {/* Herro right */}
      <div className="flex-1 max-w-full relative hidden md:block">
        {/* Wrapper with relative positioning */}
        <div className="relative">
          {/* Background Color Image */}
          <img
            className="absolute bottom-10 left-0 w-full h-auto "
            src={myBcolor}
            alt="background color"
          />
          {/* Foreground Image */}
          <img className="relative z-20 bottom-5" src={myBimg} alt="background img" />
        </div>
      </div>
    </div>
  );
}
