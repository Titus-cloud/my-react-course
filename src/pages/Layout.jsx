import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Layout({ children, cart }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav cart={cart} />
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
