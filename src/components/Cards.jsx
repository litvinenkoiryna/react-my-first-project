import React from "react";
import styles from '../styles/Cards.module.css'
import Card from "./Card";

const Cards= () => {
    return (
       <div className={styles.cards}> 
          <Card />
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
       </div>
    );
  }
  
  export default Cards;