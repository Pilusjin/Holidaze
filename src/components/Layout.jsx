import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { styled } from "styled-components";


const Layout = (props) => {
  return (
    <>
      <Header />

          {props.children}
     
      <Footer />
    </>
  );
};


export default Layout;
