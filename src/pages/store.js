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
        <div className={styles.imageWrapper}>
          <img
            src="/editorial/temi.jpg"
            alt="temi in Pas poour moi"
            className={styles.image}
          />
        </div>

        <div className={styles.coverInformation}>
          <h2 className={styles.coverTitle}>COLLECTION .001</h2>
          <h3 className={styles.coverSubTitle}>THE BRIONI</h3>
        </div>
      </section>

      <ProductList products={products} />
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
