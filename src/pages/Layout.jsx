import React from "react";
import { Outlet } from "react-router-dom";
import Design from "./Design/Design";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Merchants from "./Merchants/Merchants";
import Products from "./Products/Products";

function Layout() {
  return (
    <>
      <Main />
      <Products />
      <Design />
      <Merchants />
      <Footer />
    </>
  );
}

export default Layout;
