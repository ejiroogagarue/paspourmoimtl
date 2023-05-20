import React from "react";
import Image from "next/image";
import ProductForm from "../ProductForm/ProductForm";

import styles from "./ProductPageContent.module.css";
const ProductPageContent = ({ product }) => {
  let metafieldValues = product.metafields.map((e) => e.value);
  const metafield = {
    details: metafieldValues[0],
    packaging: metafieldValues[1],
    manufactured: metafieldValues[2],
    material: metafieldValues[3],
    made: metafieldValues[4],
    dimension: metafieldValues[5],
  };

  return (
    <>
      <div className={styles.productPresentation}>
        <div>
          <div className={`${styles.imageWrapper} ${styles.removePhoto}`}>
            <Image
              src={product.images.edges[1].node.url}
              alt={product.images.edges[1].node.altText}
              width={350}
              height={100}
              className={styles.image}
            />
          </div>
        </div>

        <div>
          <div className={`${styles.imageWrapper} ${styles.removePhoto}`}>
            <Image
              src={product.images.edges[2].node.url}
              alt={product.images.edges[2].node.altText}
              width={350}
              height={200}
              className={styles.image}
            />
          </div>
        </div>

        <div>
          <div className={`${styles.imageWrapper} ${styles.removePhoto}`}>
            <Image
              src={product.images.edges[3].node.url}
              alt={product.images.edges[3].node.altText}
              width={350}
              height={100}
              className={styles.image}
            />
          </div>
        </div>
        <div>
          <div className={`${styles.imageWrapper} ${styles.coverPhoto}`}>
            <Image
              src={product.images.edges[4].node.url}
              alt={product.images.edges[4].node.altText}
              width={450}
              height={450}
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.productDescription}>
        <h2 className={styles.productDescriptionTitle}>{product.title}</h2>
        <ProductForm product={product} />
      </div>

      <div className={styles.productDetails}>
        <h3 className={styles.subTitle}>Specifications</h3>
        <p className={styles.productDescriptionDetail}>{product.description}</p>
      </div>
    </>
  );
};

export default ProductPageContent;
