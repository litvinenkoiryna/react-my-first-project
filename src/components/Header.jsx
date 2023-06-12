import React from "react";
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.headerShop}>
            <a href = "#">Shop</a>
        </div>
        <div className={styles.headerCart}>
            <a href = "#">Shopping Cart</a>
        </div>
      
    </div>
  );
}

export default Header;
