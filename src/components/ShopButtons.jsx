import React, {useState} from "react";
import styles from "../styles/ShopButtons.module.css";
import data from '../data';


function ShopButtons({setName}) {
   

  return (
    <div className={styles.navBar}>
          <nav className={styles.nav}>
          <div>
            {data.map((shop) => (
            <button
               key={shop.id}
               className={styles.item}
               onClick={() => setName(shop.title)}
            >
               {shop.title}
            </button>
            ))} 
           </div>
      </nav>
    </div>
  );
}

export default ShopButtons;
