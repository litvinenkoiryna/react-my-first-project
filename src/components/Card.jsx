import React from "react";
import styles from "../styles/Card.module.css";


const Card = ({ item }) => {
   return (
    <div key={item.id} className={styles.card}>
      <img className={styles.img} src={item.img} />
      <h2 className={styles.title}>{item.title}</h2>
      <p className={styles.price}>price: {item.price}</p>
      <p className={styles.description}>{item.description}</p>
      <button className={styles.btn}>add to Cart</button>
    </div>
  );
};

export default Card;
