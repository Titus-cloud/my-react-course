import { FaPlay } from "react-icons/fa6";
import mens from "../images/mens.png";
import handbags from "../images/hbags.png";
import watches from "../images/watches.png";
import ladies from "../images/ladies.png";
import Collection from "./Collection"

export default function Collections() {
  return (
    
      <div className="container mx-auto py-10 px-4 grid grid-cols-3 md:grid-cols-1 gap-4 ">
        {/* Large Item 1 */}
        <Collection
          title="Men's Collection"
          subtitle="Casual Collection"
          img={mens}
          size="large"
          textColor="text-gray-900"
        />
  
        {/* Small Item 1 */}
        <Collection
          title="Luxury Watches"
          subtitle="Casual Collection"
          bgColor="bg-blue-100"
          textColor="text-gray-900"
        />
  
        {/* Small Item 2 */}
        <Collection
          title="Designer Handbags"
          subtitle="Casual Collection"
          bgColor="bg-pink-100"
          textColor="text-gray-900"
        />
  
        {/* Large Item 2 */}
        <Collection
          title="Ladies Collection"
          subtitle="Casual Collection"
          bgColor="bg-red-100"
          size="large"
          textColor="text-gray-900"
        />
      </div>
  );
}
