import React, { use, useState, useEffect } from "react";
import { withRouter } from "next/router";


import styles from "./NavigationMenu.module.css";
import Link from "next/link";

const NavigationMenu = ({ history }) => {
  // State for menu buitton
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // State for disabled buttton
  const [disabled, setDisabled] = useState(false);

  //State for Navigation Open
  const [navOpen, setNavOpen] = useState(false);

  // useEffect for page changes
  //  useEffect(() => {
  //   history.listen(() => {
  //     setState({clicked: false, menuName: 'Menu'})
  //   })
  //  })

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if our menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };
  return (
    <>
      <button
        className={styles.menuButton}
        onClick={() => setNavOpen(!navOpen)}
      >
        <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>Menu</div>
      </button>
      <div
        className={styles.navOverlay}
        style={{
          top: navOpen ? "0" : "-100%",
          transitionDelay: navOpen ? "0s" : "0s",
        }}
      >
        <div className={styles.navHeader}>
          <button
            className={styles.navMenuButton}
            onClick={() => setNavOpen(!navOpen)}
          >
           
              CLOSE{" "}
    
          </button>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link
              href="/"
              onClick={() => setNavOpen(!navOpen)}
              style={{ textDecoration: "none" }}
            >
              HOME
            </Link>
            <div className="navItemWrapper"></div>
          </li>
          <li>
        
            <Link legacyBehavior href="/store">
              <a onClick={() => setNavOpen(!navOpen)}>STORE</a>
            </Link>
            <div className="navItemWrapper"></div>
          </li>
          <li>
            <Link legacyBehavior href="/about">
              <a onClick={() => setNavOpen(!navOpen)}>ABOUT</a>
            </Link>
            <div className="navItemWrapper"></div>
          </li>
        </ul>
        <div className={styles.navFooter}>
         
            <img
              className={styles.navFooterImage}
              src="/editorial/ladysPPM.jpeg"
              alt="Picture of the author"
            />
        
        </div>
      </div>
      {/* <button
        className={styles.navOverlayButton}
        onClick={() => setNavOpen(!navOpen)}
      >
        Menu
      </button> */}
    </>
  );
};

export default withRouter(NavigationMenu);
// className={`${styles.imageWrapper} ${styles.removePhoto}`}
