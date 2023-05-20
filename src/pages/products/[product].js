import React from "react";
import { getAllProducts, getProduct } from "../../../lib/shopify";
import ProductPageContent from "@/components/ProductPage/ProductPageContent";
import styles from "@/styles/ProductPage.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

const ProductPage = ({ product }) => {
  const router = useRouter();
  
  return (
    <>
      <motion.div
        className={styles.productWrapper}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <div className={styles.productContainer}>
          {/* <Link href="/store" style={{ textDecoration: "none" }}>
            <motion.div className={styles.back} variants={backVariants}>
              ← Back
            </motion.div>
          </Link> */}

          <ProductPageContent product={product} />
        </div>
      </motion.div>
    </>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
