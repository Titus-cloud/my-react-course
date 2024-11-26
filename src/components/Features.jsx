import { CiHeart } from "react-icons/ci";
import Feature from "./Feature";
import leather from "../images/leather-jacket.png";
import sweatshirt from "../images/sweatshirts.png";
import pallazo from "../images/pallazo.png";
import denim from "../images/denim.png";

export default function Features(){
  return(
    <div>
      <h2 className="text-center font-bold text-xl">Featured Collection</h2>
      <div className="container mx-auto flex">
      <Feature img={leather} name="Brown Leather Jacket" span=<CiHeart/> price= "Ksh 2,250"/>
      <Feature img={sweatshirt} name="Round-neck Sweatshirts" span=<CiHeart/> price= "Ksh 2,000"/>
      <Feature img={pallazo} name="Pleated Pallazo Trousers" span=<CiHeart/> price= "Ksh 1,800"/>
      <Feature img={denim} name="M-22 Denim Jacket" span=<CiHeart/> price= "Ksh 1,250"/>
      </div>
    </div>
  )
}
