import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Notfound from "../pages/NotFound";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import AddNewPro from "../pages/AddNewPro";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import ProductDetail from "./ProductDetail";

import { useState, useEffect } from "react";

export default function Router() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    cartData && setCart(cartData);
  }, []);
  useEffect(() => {
    if (cart && cart.length !== 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cart={cart}>
              <Home cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        {/* <Route path="hero" element={<Layout><Hero/></Layout>}/> */}
        <Route
          path="new-product"
          element={
            <Layout>
              <AddNewPro />
            </Layout>
          }
        />

        <Route
          path="login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        <Route
          path="sign"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />

        <Route
          path="cart"
          element={
            <Layout>
              <Cart cart={cart} setCart={setCart} />
            </Layout>
          }
        />

        {/* <Route
          path="setCart"
          element={
            <Layout>
              <Cart cart={setCart} />
            </Layout>
          }
        /> */}

        <Route
          path="shop"
          element={
            <Layout>
              <Shop cart={cart} setCart={setCart} />
            </Layout>
          }
        />

        <Route
          path="detail"
          element={
            <Layout>
              <ProductDetail cart={cart} setCart={setCart} />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <Notfound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
