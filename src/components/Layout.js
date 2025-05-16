// components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer"; // Create a Footer component if you don't have one
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;