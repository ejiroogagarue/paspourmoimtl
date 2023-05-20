import React from "react";
import ProductList from "@/components/ProductList/ProductList";
import ProductCard from "@/components/ProductCard/ProductCard";
import { getProductsInCollection } from "../../lib/shopify";
import styles from "@/styles/Store.module.css";

import Image from "next/image";

const store = ({ products }) => {
  return (
    <>
      <section className={styles.coverWrapper}>
        <div className={styles.coverPhotoWrapper}>
          <div className={`${styles.imageWrapper} ${styles.coverPhoto}`}>
            <Image
              src="/editorial/temi.jpg"
              alt="temi in Pas poour moi"
              width={650}
              height={500}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.coverInformation}>
          <h2 className={styles.coverTitle}>COLLECTION .001</h2>
          <h3 className={styles.coverSubTitle}>THE BRIONI</h3>
        </div>
      </section>
      <section className={styles.productWrapper}>
        <ProductList products={products} />
      </section>
    </>
  );
};

export default store;

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
