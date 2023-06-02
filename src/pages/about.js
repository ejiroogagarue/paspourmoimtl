import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";
const about = () => {
  return (
    <>
      <div className={styles.container}>
       
        <div className={styles.aboutWrapper}>
          {/* <h2 className={styles.aboutTitle}>ABOUT</h2> */}
          <h2 className={styles.title}>About Us</h2>

          <p className={styles.about}>
            PAS POUR MOI is a Toronto based brand that makes eyewear and
            accessories designed for movement in the city.
          </p>

          <div>
            <h2 className={styles.contactTitle}>Contact Us</h2>

            <h3 className={styles.contactSubTitle}>
              Email: info@paspourmoi.com
            </h3>

            <h3 className={styles.contactSubTitle}>
              Instagram:
              <a
                href="https://www.instagram.com/paspourmoii/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                @paspourmoii
              </a>
            </h3>
          </div>
        </div>
        <div className={`${styles.imageWrapper} `}>
          <img
            src="/editorial/ppm.png"
            alt="Bun and Remy on the grass"
            className={styles.image}
          />
        </div>
      </div>
    </>
  );
};

export default about;
