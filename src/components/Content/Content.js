import React from 'react';
import {motion} from "framer-motion";
import styles from './Content.module.css'
const Content = ({sideBar, setSideBar, cartQuantity}) => {
    return (
        <motion.div 
        animate={{
           scale: sideBar ? 0.8: 1,
           opacity: sideBar ? 0.9 : 1
        }}
        className={styles.contentWrapper}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
       >
          
           <div  className={styles.cartWrapper}>
               <button
              className={styles.cart}
                onClick={() => setSideBar((sideBar) => !sideBar)}
               >
                <span className={styles.cartName}> Cart ({cartQuantity})</span> 
               </button>
           </div>
       </motion.div>
    );
};

export default Content;