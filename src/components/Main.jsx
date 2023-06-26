import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import styles from "../styles/Main.module.css";
import data from "../data";

function Main() {
  let shopCards = data.map((card) => card.cards);
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        {shopCards[0].map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Main;
