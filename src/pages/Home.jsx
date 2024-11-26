import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Collections from "../components/Collections";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories/>
      <Features/>
      <Collections/>
    </div>
  );
}
