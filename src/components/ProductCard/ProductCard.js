import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatter } from "@/utils/helpers";
import { motion } from "framer-motion";
import styles from "./ProductCard.module.css";
//Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of anaimation or starting point.
// exit: defines animation when component exits

// Custom variant
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;
  const { altText, url } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <motion.div
      variants={fadeInUp}
      transition={transition}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={styles.card}
    >
      <Link href={`/products/${handle}`} style={{ textDecoration: 'none' }} >
        <a className={styles.productCardWrapper} style={{ textDecoration: "none" }}>
          <motion.div className={styles.imageWrapper}>
            <Image
              src={url}
              alt={altText}
              width={1500}
              height={1500}
              className={styles.image}
            />
          </motion.div>
          <div className={styles.productInfo}>
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.productPrice}>{formatter.format(price)}</p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
