import React, { useState, useContext } from "react";
import { CartContext } from "@/context/shopContext";
import styles from "./Nav.module.css";
import Cart from "../Cart/Cart";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
const Nav = () => {
  // State
  const [navOpen, setNavOpen] = useState(false);

  // Context
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navBar}>
            <div className={styles.logoContainer}>
              <Link legacyBehavior href="/" style={{ textDecoration: "none" }}>
                <a className={styles.logo}>PAS POUR MOI.</a>
              </Link>
            </div>
            <div className={styles.menuWrapper}>
              <div className={styles.menuContainer}>
                <NavigationMenu />
                {/* <Cart
                  cartQuantity={cartQuantity}
                  cart={cart}
                  className={styles.cartComponent}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
