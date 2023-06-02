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
          {/* <Image
            src="/editorial/Brioni.gif"
            alt="Picture of the author"
            width={750}
            height={750}
            className={styles.image}
          /> */}

          <img  src="/editorial/Brioni.gif"
            alt="Picture of the author"
            className={styles.image}
            />
        </div>
        <div className={styles.headline}>
          <h2 className={styles.title}>PPM BY PAS POUR MOI</h2>
          
          {/* <h2 className={styles.subTitle}>SPRING/SUMMER 2023</h2>
          <h2 className={styles.subTitle}>COLLECTION 001</h2> */}
        </div>
         {/* <NewsLetter/> */}
         <Subscribe/>
    </div>
  );
};

export default HomePage;
