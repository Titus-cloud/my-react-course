import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Collections from "../components/Collections";

export default function Home({cart, setCart}) {

  return (
    <div>
      <Hero/>
      <Categories/>
      <Features cart={cart} setCart={setCart}/>
      <Collections/>
    </div>
  );
}


