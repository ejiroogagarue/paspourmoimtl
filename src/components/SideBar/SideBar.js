import React, { useState, useRef, useContext } from "react";
import styles from "./SideBar.module.css";
import { AnimatePresence, motion } from "framer-motion";
import MiniCart from "../MiniCart/MiniCart";
import { CartContext } from "@/context/shopContext";

const SideBar = ({ sideBar = false, setSideBar = () => {} }) => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={styles.sideBarWrapper}
          >
            <div className={styles.sideBarDetails}>
              <h3 className={styles.sideBarTitle}>Cart.</h3>
              <button
                className={styles.sideBarCloseButton}
                onClick={() => setSideBar((sideBar) => !sideBar)}
              >
                &times;{" "}
              </button>
            </div>

            <MiniCart cart={cart} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ typr: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setSideBar((sideBar) => !sideBar)}
            className=""
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
