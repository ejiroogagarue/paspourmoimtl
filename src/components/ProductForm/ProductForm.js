import { formatter } from "@/utils/helpers";
import { useState, useContext } from "react";

import { CartContext } from "@/context/shopContext";

import styles from "./ProductForm.module.css";
const ProductForm = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.url,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.price.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className={styles.productFormWrapper}>
      <h3 className={styles.price}>{formatter.format(product.variants.edges[0].node.price.amount)}</h3>

      <button
        onClick={() => {
          addToCart(selectedVariant);
        }}

        className={styles.pushable}
      >
        <span className={styles.front}>ADD TO CART</span>
      </button>
    </div>
  );
};

export default ProductForm;
