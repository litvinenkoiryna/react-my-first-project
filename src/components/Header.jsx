import React from "react";
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <nav className={styles.nav}>
        <div className={styles.shopsItem}>
            <NavLink to='/' className={styles.item}>Shops</NavLink>
        </div>
        <div className={styles.cartItem}>
            <NavLink to ='/shopping_cart' className={styles.item}>Shopping Cart</NavLink>
        </div>

    </nav> 
  );
}

export default Header;


