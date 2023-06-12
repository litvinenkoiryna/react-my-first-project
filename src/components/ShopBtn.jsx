import React, { Children } from 'react';
import data from '../data';
import styles from '../styles/ShopBtn.module.css';


const ShopBtn = () => {

   return(
       <div> 
          {data.map((shop) =>(
             <button key={shop.id} className={styles.item}>{shop.title}</button>
          ))}
       </div>
    );
  };

  export default ShopBtn;