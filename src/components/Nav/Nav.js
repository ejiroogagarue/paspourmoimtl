import React, { useState, useContext } from "react";
import { CartContext } from "@/context/shopContext";
import styles from "./Nav.module.css";
import Cart from "../Cart/Cart";
import Link from "next/link";
import Image from "next/image";
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
            <div
              className={styles.menuToggle}
              onClick={() => setNavOpen(!navOpen)}
            >
              <div
                className={
                  navOpen
                    ? `${styles.hamBox} ${styles.hamBoxOpen}`
                    : `${styles.hamBox}`
                }
              >
                <span
                  className={
                    navOpen
                      ? `${styles.lineTop} ${styles.spin}`
                      : `${styles.lineTop} `
                  }
                ></span>
                <span
                  className={
                    navOpen
                      ? `${styles.lineBottom} ${styles.spin}`
                      : `${styles.lineBottom} `
                  }
                ></span>
                <span className={styles.menuTitle}>Menu</span>
              </div>
            </div>

            <Link  href="/"><a className={styles.logo}>PAS POUR MOI</a></Link>
           
            <Cart
              cartQuantity={cartQuantity}
              cart={cart}
              className={styles.cartComponent}
            />
          </div>

          <div
            className={styles.navOverlay}
            style={{
              top: navOpen ? "0" : "-100%",
              transitionDelay: navOpen ? "0s" : "0s",
            }}
          >
            <ul className={styles.navLinks}>
              <li className={styles.navItems}>
                <Link href="/" ><a onClick={() => setNavOpen(!navOpen)}>Home</a></Link>
                <div className="navItemWrapper"></div>
              </li>
              <li className={styles.navItems}>
                <Link href="/store" ><a onClick={() => setNavOpen(!navOpen)}>Store</a></Link>
                <div className="navItemWrapper"></div>
              </li>
              <li className={styles.navItems}>
                <Link href="/about" ><a onClick={() => setNavOpen(!navOpen)}>About</a></Link>
                <div className="navItemWrapper"></div>
              </li>
            </ul>

            <div className={`${styles.imageWrapper} ${styles.navPhoto}`}>
              <Image
                src="/editorial/navPhotoPreview.png"
                alt="Picture of the author"
                width={450}
                height={450}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
