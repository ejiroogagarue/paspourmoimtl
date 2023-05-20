import React, { useState } from 'react';

import Content from '../Content/Content';
import SideBar from '../SideBar/SideBar';
import styles from "./Cart.module.css";
const Cart = ({cartQuantity, cart}) => {
    const [sideBar, setSideBar] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.cartWrapper}>
            {/* <button className={styles.cart} > <span className={styles.cartName}> Cart ({cartQuantity})</span> </button> */}
            <Content {...{sideBar, setSideBar}} cartQuantity={cartQuantity}/>
            <SideBar {...{sideBar, setSideBar}} cart={cart}/>
            </div>
            
        </div>
    );
};

export default Cart;