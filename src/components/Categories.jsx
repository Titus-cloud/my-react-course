import Cartegory from "./Category";
import jacket from "../images/jacket.png";
import handbag from "../images/handbag.png";
import shirts from "../images/tshirt.png";
import dress from "../images/dress.png";
import jeans from "../images/jeans.png";
import shoes from "../images/shoe.png";
import sweater from "../images/sweater.png";

export default function Categories() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center font-bold text-xl pb-6">Top Categories</h2>
      <div className="flex justify-between ">

        <Cartegory img={jacket} name="Jacket" />

        <Cartegory img={handbag} name="Handbag" /> 

        <Cartegory img={shirts} name="Shirts" /> 

        <Cartegory img={dress} name="Dress" /> 

        <Cartegory img={jeans} name="Jeans" /> 

        <Cartegory img={shoes} name="Shoes" /> 

        <Cartegory img={sweater} name="Sweater" /> 

      </div>
    </div>
  );
}
