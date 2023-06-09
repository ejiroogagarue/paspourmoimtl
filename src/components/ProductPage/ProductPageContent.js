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
        <div className={styles.productImageContainer}>
          <div className={`${styles.imageWrapper} ${styles.removePhoto}`}>
           
            <img
            src={product.images.edges[1].node.url}
            alt={product.images.edges[1].node.altText}
            className={styles.image}
          />
          </div>
        </div>

        <div className={styles.productImageContainer}>
          <div className={`${styles.imageWrapper} ${styles.removePhoto}`}>
          
               <img
            src={product.images.edges[2].node.url}
            alt={product.images.edges[2].node.altText}
            className={styles.image}
          />
          </div>
        </div>

        <div className={styles.productImageContainer}>
          <div className={`${styles.imageWrapper} ${styles.removePhoto}`}>
         
                  <img
            src={product.images.edges[3].node.url}
            alt={product.images.edges[3].node.altText}
            className={styles.image}
          />
          </div>
        </div>
        <div className={styles.productImageContainer}>
          <div className={`${styles.imageWrapper} ${styles.coverPhoto}`}>
         
                       <img
            src={product.images.edges[4].node.url}
            alt={product.images.edges[4].node.altText}
            className={styles.image}
          />
          </div>
        </div>
      </div>
      <div className={styles.productDetailsContainer}>
        <div className={styles.productDetailsWrapper}>
          <div className={styles.productDetails}>
            <div className={styles.productDetailsForm}>
              <h2 className={styles.productDescriptionTitle}>
                {product.title}
              </h2>
              <ProductForm product={product} />
            </div>
            <div className={styles.productDetailsSpecifications}>
              <h3 className={styles.subTitle}>Specifications</h3>
              <p className={styles.productDescriptionDetail}>
                {product.description}
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default ProductPageContent;
