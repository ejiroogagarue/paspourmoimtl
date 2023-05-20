import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./ProductList.module.css";
const ProductList = ({ products }) => {
  return (
    <div className={styles.productListWrapper}>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.node.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
