import React, { Children } from "react";
import styles from "../styles/Navbar.module.css";
import data from '../data';
import ShopBtn from "./ShopBtn";

function Navbar() {
  return (
    <div className={styles.navBar}>
      <h2 className={styles.title}>Shops:</h2>
      <nav className={styles.nav}>
          <ShopBtn 
             onClick={console.log("ok")} />
      
      </nav>
    </div>
  );
}

export default Navbar;
