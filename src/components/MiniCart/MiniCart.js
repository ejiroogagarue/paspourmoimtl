import React, { useCallback, useContext } from "react";
import Image from "next/image";
import { CartContext } from "@/context/shopContext";
import { formatter } from "@/utils/helpers";
import styles from "./MiniCart.module.css";
const MiniCart = ({ cart }) => {
  const { cartOpen, setCartOpen, checkoutUrl, removeCartItem } =
    useContext(CartContext);

  let cartTotal = 0;

  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart(id, { quantity: quantity - 1 }).then(handleUpdateCart)
      : removeCartItem;
  };
  return (
    <div className={styles.container}>
      <ul className="checkoutItems">
        {cart.map((product) => (
          <li key={product.id + Math.random()} className={styles.miniCartItem}>
            <div className={styles.miniCartWrapper}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.title}
                  className=""
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.productDetailsWrapper}>
                <div className={styles.productDetails}>
                  <h3 className={styles.productTitle}>
                    <a href={product.href}>{product.title}</a>
                  </h3>
                  <p className={styles.productPrice}>
                    {formatter.format(product.variantPrice)}
                  </p>
                </div>

                {/* <p>{product.variantTitle}</p> */}

                <div className={styles.checkoutFeatures}>
                  <div className={styles.productQuantity}>
                    <span className={styles.productQuantityTitle}>
                      Quantity:
                    </span>{" "}
                    <p>{product.variantQuantity}</p>
                  </div>

                  <button className={styles.removeItem} onClick={() => removeCartItem(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {cart.length > 0 ? (
        <div className={styles.checkoutFunctions}>
          <p className={styles.checkoutFunctionsTitle}>SubTotal</p>
          <div>
            <p className={styles.checkoutFunctionsPrice}>
              {formatter.format(cartTotal)}
            </p>
            <p className={styles.checkOutParagraph}>Shipping and taxes calculated at checkout.</p>
          </div>

          <div>
            {/* <button
              href={checkoutUrl}
              className={styles.pushable}
            >
              <span className={styles.front}>Checkout</span>
            </button> */}
            <button  className={styles.pushable}>
            <span className={styles.front}> <a href={checkoutUrl} target="_blank">Checkout</a></span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MiniCart;
