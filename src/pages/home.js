import React from "react";
import ProductList from "@/components/ProductList/ProductList";
import { getProductsInCollection } from "../../lib/shopify";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Subscribe from "@/components/Subscribe/Subscribe";
const HomePage = () => {
  return (
    <div className={styles.homeWrapper}>
        <div className={`${styles.imageWrapper} `}>
      

          <img  src="/editorial/Brioni.gif"
            alt="Picture of the author"
            className={styles.image}
            />
        </div>
        <div className={styles.headline}>
          <h2 className={styles.title}>Join the mailing list.</h2>
          
          
        </div>
      
         <Subscribe/>
    </div>
  );
};

export default HomePage;
