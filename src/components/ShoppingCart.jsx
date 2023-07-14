import React from "react";
import styles from "../styles/ShoppingCart.module.css";

 const ShoppingCart = ({items}) => {
 
   //console.log(items);
      return (
    
      <div className={styles.cart}>
        {items.map((item)=>(
           <div className = {styles.items} key={item.id}>
                <div className={styles.item}>item:{item.title}</div>
                <div className={styles.item}>price{item.price}</div>
            </div>))}
        {/* {items.lenght>0 ? */}
            
            {/* : */}
         {/* <h2 className={styles.message}>Ваша корзина пуста</h2> */}
        {/* } */}
      </div>
      
   )
};

export default ShoppingCart;