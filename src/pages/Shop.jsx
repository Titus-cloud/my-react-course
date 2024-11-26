import Feature from "../components/Feature";

import jacket from "../shop-images/ragged-jeans.png";
import { CiHeart } from "react-icons/ci";

import leather from "../images/sweatshirts.png";
import redDress from "../shop-images/slim-banquet-dress.png";

import mWatch from "../shop-images/quartz-watch.png";
import wDenim from "../shop-images/denim-jeans.png";
import Hbag from "../shop-images/brown-handbag.png";
import bom from "../shop-images/bomber.png";
import uniShoes from "../shop-images/unisex.png";
import smtWatch from "../shop-images/smartwatch.png";
import purse from "../shop-images/serpenti-forever.png";
import uniTsht from "../shop-images/graphic-tshirts.png";
import coke from "../shop-images/cocktail.png";
import pants from "../shop-images/Airsense-pleated.png";
import off from "../shop-images/Off-The-Shoulder.png";
import heels from "../shop-images/ZOOSHI-COBALT.png";
import Knetted from "../shop-images/knitted-sweater.png";
import lshoe from "../shop-images/leather-shoes.png";

// import sweatshirt from "../images/sweatshirts.png";
import pallazo from "../images/pallazo.png";
import denim from "../images/denim.png";

export default function Features() {
  return (
    <div>
      <div className="flex container justify-center align-middle rounded-full shadow-amber-950 mx-auto pl-10 border-red-600">
        <input className="w-[50%]" type="text" placeholder="Search Products and categories" />
        <h4>Filter Category</h4>
      </div>
      <div className="container mx-auto flex gap-4 flex-wrap">
        <Feature
          img={jacket}
          name="Blue Rageed Jeans"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={leather}
          name="Round-neck Sweatshirts"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={redDress}
          name="Slim Banquet Dress"
          span=<CiHeart />
          price="Ksh 10,250"
        />
        <Feature
          img={denim}
          name="Blue Denim Jacket"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={leather}
          name="Brown Leather Jacket"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={mWatch}
          name="Quartz Men’s Watch"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={wDenim}
          name="Women Denim Jeans"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={Hbag}
          name="Brown handbag"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={uniTsht}
          name="Unisex Graphic T-shirt"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={bom}
          name="Black Bomber Jacket"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={pallazo}
          name="Pleated pallazo Pants"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={lshoe}
          name="Pure Leather Shoes"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={purse}
          name="Purple Serpenti purse"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={uniShoes}
          name="Unisex Airforce Sneakers"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={coke}
          name="Blue Cocktail Dress"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={off}
          name="Off-Shoulder Crop Top"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={pants}
          name="Airsense Pleated Pants"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={smtWatch}
          name="Classy Smart Watch"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={heels}
          name="Blue Platform Heels"
          span=<CiHeart />
          price="Ksh 2,250"
        />
        <Feature
          img={Knetted}
          name="Strip Knitted Sweater"
          span=<CiHeart />
          price="Ksh 2,250"
        />
      </div>
    </div>
  );
}
