import myLogo from "../images/logo.svg";
import myMail from "../images/email.png";
import myPhone from "../images/phone.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twiter from "../images/twitter.png";

export default function Footer() {
  return (
    <div className=" bg-[#F0EFEF] p-10">
      {/* Subscribe Section */}
      <div className="text-center">
        <h1 className="text-3xl font-medium text-gray-800 pb-5">
          Subscribe & get up to 30% OFF
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <input
            className="border-[#45C9A1] border-2 p-3 rounded-full text-sm w-full sm:w-64 h-12 outline-none"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-[#45C9A1]  rounded-full w-full sm:w-32 text-white px-4 py-2 text-center text-sm font-bold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="flex flex-wrap gap-10 justify-between pt-10">
        {/* Logo and About Section */}
        <div className="flex-1 min-w-[200px]">
          <img className="w-28 pb-5" src={myLogo} alt="Logo" />
          <p className="text-[black]  text-sm font-medium leading-relaxed">
            Offering a unique and stylish perspective on fashion is our number
            one priority. Confuse your mirror with our trendy outfits.
          </p>
        </div>

        {/* Store Links */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="text-lg font-semibold text-[black] pb-3">Store</h4>
          <ul className="space-y-2">
            <li className="text-sm text-[black]  hover:text-gray-800">
              Women’s Fashion
            </li>
            <li className="text-sm text-[black] hover:text-gray-800">
              Men’s Fashion
            </li>
            <li className="text-sm text-[black] hover:text-gray-800">
              Store Sale
            </li>
            <li className="text-sm text-[black] hover:text-gray-800">
              Collections
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="text-lg font-semibold text-[black] pb-3">Help</h4>
          <ul className="space-y-2">
            <li className="text-sm text-[black] hover:text-gray-800">
              Customer Support
            </li>
            <li className="text-sm text-[black] hover:text-gray-800">
              Terms & Conditions
            </li>
            <li className="text-sm text-[black] hover:text-gray-800">
              Privacy Policy
            </li>
            <li className="text-sm text-[black] hover:text-gray-800">
              Track Your Order
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-semibold text-[black] pb-3">
            Contact Us
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center text-sm text-[black]">
              <img className="w-5 h-5 mr-3" src={myMail} alt="Mail" />
              contact@clozzet.com
            </li>
            <li className="flex items-center text-sm text-[black]">
              <img className="w-5 h-5 mr-3" src={myPhone} alt="Phone" />
              254-700-333-333
            </li>
          </ul>
          <div className="pt-5">
            <h6 className="text-gray-800 font-semibold">Follow Us</h6>
            <div className="flex gap-4 pt-2">
              <img
                className="w-6 cursor-pointer"
                src={facebook}
                alt="Facebook"
              />
              <img
                className="w-6 cursor-pointer"
                src={instagram}
                alt="Instagram"
              />
              <img className="w-6 cursor-pointer" src={twiter} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
