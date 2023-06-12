import React from "react";
import styles from '../styles/Card.module.css'
import data from '../data';
import Cards from "./Cards";



const Card= (props) => {
    return (
       <div className={styles.card}> 
         <img src="https://placehold.co/300x120" ></img>
            <h2 className={styles.title}>blabla</h2>
            <button className={styles.btn}>add to Cart</button>
        </div>
    );
  }
  
  
  export default Card;
  
