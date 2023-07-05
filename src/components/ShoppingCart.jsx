import React from "react";
import styles from "../styles/ShoppingCart.module.css";


export let ShoppingCart = () => {
   return (
    <div className={styles.item}>
      <h2 className={styles.message}>Ваша корзина пуста</h2>
    </div>
  );
};
