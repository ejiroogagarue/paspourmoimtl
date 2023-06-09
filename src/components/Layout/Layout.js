import React, { useState, useRef, useContext } from "react";

import styles from "./Layout.module.css";
import { useRouter } from "next/router";

import { CartContext } from "@/context/shopContext";

import Nav from "../Nav/Nav";

const Layout = ({ children }) => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  const router = useRouter();

  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.container}>
           <header className={styles.headerWrapper}>
            <div className={styles.menu}>
              <Nav />
            </div>
          </header> 
        </div>

        <main className={styles.mainWrapper}>{children}</main>

        <footer>{/* <NewsLetter/> */}</footer>
      </div>
    </>
  );
};

export default Layout;
